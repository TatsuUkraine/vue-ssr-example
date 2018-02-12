import Vue from 'vue'
import Vuex from 'vuex'
import { author } from './module/author'
import { book } from './module/book'
import { filter } from './module/filter'
import config from "@/config";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        author,
        book,
        filter
    },
    strict: config.DEBUG
})
