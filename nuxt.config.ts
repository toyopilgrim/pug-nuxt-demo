import { createResolver } from "@nuxt/kit";

export default defineNuxtConfig({
  vite: {
    vue: {
      template: {
        preprocessOptions: {
          basedir: createResolver(import.meta.url).resolve("./assets/pug"),
          // basedir: __dirname + "/assets/pug", This also works.
        },
      },
    },
  },
});
