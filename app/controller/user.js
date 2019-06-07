'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async regist() {
    const { ctx } = this;
    await ctx.render('regist.ejs', {
      title: '注册页',
    });
  }
  async login() {
    const { ctx } = this;
    await ctx.render('login.ejs', {
      title: '登录页',
    });
  }
}

module.exports = UserController;