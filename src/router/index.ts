import { createRouter, createWebHistory,RouteRecordRaw  } from 'vue-router'
import FrontendLayout from '../layouts/FrontendLayout.vue'
import HomeView from '../views/frontend/HomeView.vue'
import FeaturesView from '../views/frontend/FeaturesView.vue'
import ServicesView from '../views/frontend/ServicesView.vue'
import TestimonialsView from '../views/frontend/TestimonialsView.vue'
import ContactView from '../views/frontend/ContactView.vue'
import GetstartedView from '../views/frontend/GetstartedView.vue'

const routes: Array<RouteRecordRaw> =[
    {
        path: '/',
        name: 'Frontend',
        component: FrontendLayout,

        children: [
            {
                path: '',
                name: 'Home',
                component: HomeView,
                meta: {
                    title: 'Home'
                }
            },
            {
                path: 'features',
                name: 'Features',
                component: FeaturesView,
                meta: {
                    title: 'Features'
                }
            },
            {
                path: 'services',
                name: 'Services',
                component: ServicesView,
                meta: {
                    title: 'Services'
                }
            },
            {
                path: 'testimonials',
                name: 'Testimonials',
                component: TestimonialsView,
                meta: {
                    title: 'Testimonials'
                }
            },
            {
                path: 'contact',
                name: 'Contact',
                component: ContactView,
                meta: {
                    title: 'Contact'
                }
            },
            {
                path: 'getstarted',
                name: 'Getstarted',
                component: GetstartedView,
                meta: {
                    title: 'Getstarted'
                }
            },
        ]
    },
]

const router = createRouter({ 
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {
    
    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()

})

export default router