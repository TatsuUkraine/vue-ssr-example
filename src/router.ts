import Vue from 'vue'
import Router from 'vue-router'
import AuthorLayout from '@/layout/AuthorLayout.vue'
import BooksLayout from '@/layout/BooksLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/authors',
      name: 'authors',
      component: AuthorLayout
    },
    {
        path: '/books',
        name: 'books',
        component: BooksLayout
    },
  ]
})
