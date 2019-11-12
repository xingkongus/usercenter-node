'use strict';

const filterGetRequest = require('./middleware/filterGetRequest');
const filterPostRequest = require('./middleware/filterPostRequest');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiVersion = 'v1'
  router.get('/', controller.home.index);
  router.get('/regist', controller.user.regist);
  router.get('/login', controller.user.login);
  router.get('/admin', controller.admin.index);

  // 注册、登录
  router.post(`/api/${apiVersion}/regist`, filterPostRequest, controller.v1.user.regist);
  router.post(`/api/${apiVersion}/login`, filterPostRequest, controller.v1.user.login);
  router.post(`/api/${apiVersion}/logout`, filterPostRequest, controller.v1.user.logout);

  // 用户接口
  router.resources('users', `/api/${apiVersion}/users`, controller.v1.user);
};