import Vue from 'vue'
import Vuex from 'vuex'
import { author } from './module/author'
import { book } from './module/book'
import config from "@/config";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        author,
        book
    },
    strict: config.DEBUG
})
