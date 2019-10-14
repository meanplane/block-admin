import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

import {routes} from './route'

const router = new Router({
    mode:"history",
    routes:routes
});

export default router;