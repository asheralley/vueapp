// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import vueResource from 'vue-resource'
import Test from './components/Test'
import Users from './components/Users'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', compontent: Users},
    {path: '/test', compontent: Test}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/Test">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
