import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	assets: true,
  	output: 'server',
  	integrations: [tailwind(), icon()]
});