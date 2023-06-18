// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Less Travelled";
export const SITE_DESCRIPTION =
  "Welcome to my site! I write about math, tech and life.";
export const TWITTER_HANDLE = "@RealSimonWu";
export const MY_NAME = "Simon Wu";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
