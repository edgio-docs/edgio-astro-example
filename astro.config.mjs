import react from '@astrojs/react'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [preact(), react(), tailwind()],
  site: `http://astro.build`,
})
