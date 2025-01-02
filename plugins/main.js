import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import JQuery from 'jquery'
window.$ = JQuery

import axios from 'axios'
axios.defaults.baseURL = 'https://app.mrkauto.net/'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

import Swal from 'sweetalert2'
Vue.prototype.$Swal = Swal

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
Vue.use(Toast, {
    transition: 'Vue-Toastification__bounce',
    position: 'top-right',
    timeout: 2000,
    maxToasts: 10,
    newestOnTop: true,
})



const router = new VueRouter({
    mode: 'history',
})

if (window.location.protocol != 'https:' || window.location.protocol == '127.0.0.1') {
     window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
}

//  if (window.location.protocol != 'https:') {
//   // window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
//  }


new Vue({
    // render: h => h(App),
    // store,
    router,
})
const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
