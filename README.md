# pug-nuxt-demo

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Demo

### Before

By default, when you use pug's `extend` or `include`, you will get the following error.

```
ERROR  the "basedir" option is required to use includes and extends with "absolute" paths      
```

### After

To fix the issue, add this vite config. (https://github.com/nuxt/nuxt/issues/15746#issuecomment-1399343429)

```
import { createResolver } from "@nuxt/kit";

export default defineNuxtConfig({
  vite: {
    vue: {
      template: {
        preprocessOptions: {
          basedir: createResolver(import.meta.url).resolve("./"),
          // basedir: __dirname + "/assets/pug", This also works.
        },
      },
    },
  },
});

```
