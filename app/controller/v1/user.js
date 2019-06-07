'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  async regist() {
    const { ctx } = this;
    if (ctx.req.method === 'POST') {
      let {
        email,
        password
      } = ctx.request.body

      if (email) {
        let queryUserRes = await ctx.service.user.getUser({ email });
        if (queryUserRes.result) {
          ctx.success(ctx, { msg: '用户已存在', code: 412, status: 412 });
          return 0;
        }
      } else {
        this.ctx.error(this.ctx, 500, '必须传入用户名或者邮箱！');
        return 0;
      }

      let cryptoPwd = this.ctx.helper.cryptoPwdGenerator(password);
      let insertObj = {
        email,
        password: cryptoPwd,
      }
      const addUserRes = await this.ctx.service.user.addUser(insertObj);
      if (addUserRes.result) {
        ctx.success(ctx, { result: insertObj, msg: '注册成功' })
      } else {
        ctx.error(ctx, { code: 500, msg: '注册失败: ' + addUserRes.message });
      }
    } else {
      ctx.status = 405;
    }
  }

  async login() {
    const { ctx } = this;
    if (ctx.req.method === 'POST') {
      let { username, email, password } = ctx.request.body;
      if (!email && !username) {
        ctx.success(ctx, { msg: '必须传入用户名或者邮箱！', code: 412, status: 412 })
        return 0;
      }

      let cryptoPwd = this.ctx.helper.cryptoPwdGenerator(password);
      const queryUserRes = await this.ctx.service.user.getUser({ username: username });
      if (queryUserRes.result && queryUserRes.data.password === cryptoPwd) {
        const userToken = { username, email };
        const secret = this.config.jwt.secret;
        const token = this.app.jwt.sign(userToken, secret, { expiresIn: '1h' });
        const responseRes = {
          token: token,
          userInfo: queryUserRes.data
        }
        this.ctx.success(ctx, { result: responseRes, msg: '登录成功' });
      } else {
        if (queryUserRes.fatal) {
          ctx.error(ctx, { code: 500, msg: queryUserRes.message });
        } else {
          ctx.body = new ctx.commonResEntity({ data: "", msg: '用户名或密码错误', status: 'error', code: 200 });
        }
      }
    } else {
      ctx.status = 405;
    }
  }
}

module.exports = UserController;