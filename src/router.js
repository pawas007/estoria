import Vue from "vue";
import VueRouter from "vue-router";

import catalog from "@/pages/catalog";
import home from "@/pages/home";
import toDoList from "@/pages/toDoList";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: catalog,
    },
    {
        path: '/todo',
        name: 'todo',
        component: toDoList,
    },


]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
