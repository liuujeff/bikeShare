import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/Full'
import Charts from '@/components/Charts'
import BikeMap from '@/components/BikeMap'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Full',
            component: Full,
            children: [
                {
                    path: '/',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: '/map',
                    name: 'BikeMap',
                    component: BikeMap
                }
            ]
        }
    ]
})
