import Vue from 'vue'
import Router from 'vue-router'
import AuthorLayout from '@/layout/AuthorLayout.vue'
import BooksLayout from '@/layout/BooksLayout.vue'
import FilterLayout from '@/layout/FilterLayout.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/authors',
            name: 'authors',
            components: { default: AuthorLayout, sidebar: FilterLayout }
        },
        {
            path: '/books',
            name: 'books',
            components: { default: BooksLayout, sidebar: FilterLayout }
        },
    ]
})
