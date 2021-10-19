import { Router } from "@layer0/core";

export default new Router()
  .get("/:path*/:file.:ext(js|css|png|ico)", ({ cache, serveStatic }) => {
    cache({
      browser: {
        // cache js, css, and images in the browser for one hour...
        maxAgeSeconds: 60 * 60,
      },
      edge: {
        // ... and at the edge for one year
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    });
    serveStatic("dist/:path*/:file.:ext");
  })
  .match("/:path*", ({ cache, serveStatic, setResponseHeader }) => {
    cache({
      // prevent the browser from caching html...
      browser: false,
      edge: {
        // ...cache html at the edge for one year
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    });
    setResponseHeader("content-type", "text/html; charset=UTF-8");
    serveStatic("dist/:path*");
  });
