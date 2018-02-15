# Ready for use Example for Vue + Vuex + TS + SSR + Jest

Inspired by [Vue SSR](https://ssr.vuejs.org/en) and [Evan You example](https://github.com/vuejs/vue-hackernews-2.0)

### API

This project uses [JSON API](http://jsonapiplayground.reyesoft.com/) playground that was made according to [JSON API Spec](http://jsonapi.org/)
API layer is placed in **/src/api** folder (according to suggestions from Vuex doc)

API layer uses Axios (implementation is in **/src/service**) transport to make requests over HTTP

### Vuex

Store is split on modules in **/src/store**

### SSR

This project is configured with Webpack + Express.

During server render App will wind matching Components by requested URL that has asyncData method.

Highly recommended make API requests to fetch data, that will be used in child components or layouts,
in asyncData - to prepare all needed data, that you are going to use.

**asyncData** should return Promise, that should be resolved after all data are ready for rendering.

Server won't continue rendering until all asyncData will be resolved

For client build this method will be used on route change.

By default component won't be mounted (route won't be proceeded) until all asyncData methods 
from all matched components will be resolved. As a result this will prevent user from navigation, until all data will
be loaded for new route

As an option it can be switched off, but only for Client app with help of **waitAsyncData** flag.

If **waitAsyncData** will be **FALSE** asyncData won't block app from navigation. It still won't affect
change anything during SSR.