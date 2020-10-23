import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Home from "./pages/HomePage/HomePage.vue";
import Faq from "./pages/FAQPage/FAQPage.vue";
import About from "./pages/About/About.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
    ],
});

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount("#app");