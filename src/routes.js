/**
 * Created by ling.zou on 2018/4/16.
 */

import Login from 'views/Login';
import Home from 'views/Home';
import User from 'views/User';
import Editor from 'views/Editor';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/editor',
    component: Editor
  }
];

export default routes;
