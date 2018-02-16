# Ready for use Example for Vue + Vuex + TS + SSR + Jest

Inspired by [Vue SSR](https://ssr.vuejs.org/en) and [Evan You example](https://github.com/vuejs/vue-hackernews-2.0)

## API

This project uses [JSON API](http://jsonapiplayground.reyesoft.com/) playground that was made according to [JSON API Spec](http://jsonapi.org/)
API layer is placed in **/src/api** folder (according to suggestions from Vuex doc)

API layer uses Axios (implementation is in **/src/service**) transport to make requests over HTTP

## Vuex

Store is split on modules in **/src/store**

## SSR

This project is configured with Webpack + Express.

```vue
<script>
    export default {
        waitAsyncData: false, //default: true
        
        asyncData () {
            return new Promise((res, rej) => res())
        }
    }
</script>
```

During server rendering, App will find matching Components by requested URL that has asyncData method.

### Highly resomended
Make API requests to fetch data, that will be used in child components or layouts,
in `asyncData` - to prepare all needed data, that you are going to use. It will prevent you
from problems when SSR rendered page and Client rendered page will be contains different result.

`asyncData` should return Promise, that should be resolved after fetched data are ready for rendering.

Server won't continue rendering until all asyncData will be resolved

For client build this method will be used on route change.

By default component won't be mounted (route won't be proceeded) until all asyncData methods 
from all matched components will be resolved. As a result this will prevent user from navigation, until all data will
be loaded for new route

As an option it can be switched off, but only for Client app with help of **waitAsyncData** flag.

If **waitAsyncData** will be **FALSE** asyncData won't block app from navigation. It still will 
stop rendering until Promise will be resolved.

## .ENV

You can modify environment variables, that will be exported in
`process.env`.

Default file `.env` should be placed in root folder. If needed path can be changed
in `/build/env-loader.js`

Variables in default file can be changed with `.env.{environent}`, where
`environment` defines based on NODE_ENV. For example,
if NODE_ENV='development' builder will try to load `.env.development`
after `.env` file

Properties `VUE_ENV` and `NODE_ENV` in `.env` files will be ignored

Also you can create files with `.local` postfix (`.env.local`, `.env.{environent}.local`). Such files will be loaded last.
They are added to GitIgnore so you can use them as local config files

Alongside with custom variables in .env file you can also specify
variables for server build. Default server target is **localhost:8080**
even, if variables in `.env` files wasn't defined

```
PORT=8080
HOST=localhost
```

Default `process.env` object that will be available in you app after build

```typescript
NODE_ENV: 'development'
VUE_ENV: 'client' // or 'server'
```

## TypeScript

In this example you can use ES6 style in `*.vue` alongside
with `*.ts` imports. TS support was configured to prevent using regular
`*.js` files inside TS files (you still can import `.vue` components inside TS files).
 But it can be changed easily in `tsconfig.json`
file. In same time `*.ts` files can be imported anywhere (JS or Vue file)

Vue components doesn't use TS since it's overcomplicated in my opinion.
But it can be changed if needed just with [Vue Class Component](https://github.com/vuejs/vue-class-component) package

## Jest

This example uses Jest for testing. In general it was used, just to get full stack example of project)
Test files are placed in `/test` folder. You can run tests with

``` bash
npm run test
```

This test example was built based on `@vue/cli`

## Build setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start

# run tests
npm run test
```

## License

MIT
