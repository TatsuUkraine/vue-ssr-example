import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './main'
import ProgressBar from '@/component/ProgressBar.vue'

// global progress bar
const progressBar = Vue.prototype.$progressBar = new Vue(ProgressBar).$mount()
document.body.appendChild(progressBar.$el)

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
    // Add router hook for handling asyncData.
    // Doing it after initial route is resolved so that we don't double-fetch
    // the data that we already have. Using router.beforeResolve() so that all
    // async components are resolved.
    router.beforeResolve((to, from ,next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false

        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        const asyncDataHooks = activated.map(c => {
            let asyncData = c.asyncData || c.options && c.options.asyncData

            if (asyncData) {
                //if component has defined option 'waitAsyncData' define it in async hook list, default: true
                let waitData = c.waitAsyncData

                if (waitData === undefined) {
                    waitData = c.options && c.options.waitAsyncData || true
                }

                return {
                    asyncData: asyncData,
                    waitAsyncData: !!waitData
                }
            }
            return null;
        }).filter(_ => _)

        if (!asyncDataHooks.length) {
            return next()
        }

        progressBar.start();
        Promise
            .all(asyncDataHooks.map((hook) => {
                let promise = hook.asyncData({ store, route: to });

                //if waitAsyncData !== false wait until asyncData promise will be resolved
                if (hook.waitAsyncData) {
                    return promise
                }

                //otherwise resolve it just now, and let component be mounted without data waiting
                return Promise.resolve()
            }))
            .then(() => {
                progressBar.finish()
                next()
            })
            .catch(() => {
                progressBar.fail()
                next()
            })
    })

    // actually mount to DOM
    app.$mount('#app')
})