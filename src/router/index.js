import { createRouter,  createWebHistory } from 'vue-router'
import App from '../App.vue'
import Bookmarks from '../pages/bookmarks/Bookmarks.vue'
import Events  from '../pages/events/Events.vue' 
import Courses from '../pages/courses/Courses.vue'
import My from '../pages/my/My.vue'
import ListArticles from '../pages/listArticles/ListArticles.vue'

const router = createRouter({
    routes: [
    {
    path: '/',
    name: 'home',
    component: ListArticles
    },
    {
    path: '/my',
    name: 'my',
    component: My
    },
    {
    path: '/bookmarks',
    name: 'bookmarks',
    component: ListArticles
    },
    {
    path: '/events',
    name: 'events',
    component: Events
    },
    {
    path: '/courses',
    name: 'courses',
    component: Courses
    }
    ],
    history: createWebHistory()
   })

   export default router;