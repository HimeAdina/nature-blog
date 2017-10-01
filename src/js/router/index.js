import Vue from 'vue';
import Router from 'vue-router';

import Admin from '../Admin.vue';
import PostEdit from '../components/content/PostEdit.vue';
import PostNew from '../components/content/PostNew.vue';
// import admin page components
import Posts from '../components/content/Posts.vue';
import Settings from '../components/content/Settings.vue';

import Index from '../components/Index.vue';
import Login from '../components/Login.vue';
// import app pages
import Home from '../Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'posts',
          component: Posts,
          children: [
            {
              path: 'new',
              component: PostNew
            },
            {
              path: 'edit/:key',
              component: PostEdit
            }
          ]
        },
        {
          path: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '*',
      name: 'default',
      component: Home
    }
  ]
});