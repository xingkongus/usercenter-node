const crypto = require('crypto');

module.exports = {
  cryptoPwdGenerator(password) {
    // 密码AES加密配置
    const pwdContentPassword = '7UkSi30PMFabwqum'
    const iv = "";
    const clearEncoding = 'utf8';
    const cipherEncoding = 'base64';

    // 对密码进行AES加密
    let cipherChunks = [];
    let cipher = crypto.createCipheriv('aes-128-ecb', pwdContentPassword, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(password, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    cipherChunks.join('');
    let encryptContent = cipherChunks.join('');
    return encryptContent;
  },
  // getAccessToken: ctx => {
  //   let bearerToken = ctx.request.header.authorization;
  //   return bearerToken && bearerToken.replace("Bearer ", "");
  // },
  // verifyToken: async(ctx, userId) => {
  //   let token = this.getAccessToken(ctx);
  //   let verifyResult = await ctx.service.user.verifyToken(token);
  //   if (!verifyResult.verify) {
  //     ctx.helper.error(ctx, 401, verifyResult.message);
  //     return false;
  //   }
  //   if (userId != verifyResult.message.id) {
  //     ctx.helper.error(ctx, 401, "用户 ID 与 Token 不一致");
  //     return false;
  //   }
  //   return true;
  // },
  /**
   * 生成 Token
   * @param {Object} data
   */
  createToken(data) {
    return this.app.jwt.sign(data, app.config.jwt.secret, {
      expiresIn: "12h"
    });
  },

  /**
   * 验证token的合法性
   * @param {String} token
   */
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      this.app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
        let result = {};
        if (err) {
          /*
            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }
          */
          result.verify = false;
          result.message = err.message;
        } else {
          result.verify = true;
          result.message = decoded;
        }
        resolve(result);
      });
    });
  }
};