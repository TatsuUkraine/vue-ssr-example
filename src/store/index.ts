import Vue from 'vue'
import Vuex from 'vuex'
import { author } from './module/author'
import config from "@/config";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        author
    },
    strict: config.DEBUG
})
