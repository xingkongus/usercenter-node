'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const baseApiUrl = 'xkusercenter'
  const apiVersion = 'v1'
  router.get('/', controller.home.index);
  router.get('/regist', controller.user.regist);
  router.get('/login', controller.user.login);
  router.get('/admin', controller.admin.index);

  router.post(`/api/${baseApiUrl}/${apiVersion}/regist`, controller.v1.user.regist);
  router.post(`/api/${baseApiUrl}/${apiVersion}/login`, controller.v1.user.login);
};