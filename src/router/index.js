import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue"
import MarvelBuilder from "../build/MarvelBuilder.vue"

Vue.use(Router);

export default new Router ({
    routes: [{
        path: "/",
        name: "Home",
        component: HomePage
    }, {
        path: "/list",
        name: "List",
        component: MarvelBuilder
    }
]
})