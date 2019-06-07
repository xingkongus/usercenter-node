class commonResEntity {
  /**
   * 接口统一返回对象实体
   * @param {object} data 响应对象
   * @param {string} msg 返回的提示信息
   * @param {number} code 返回的代号
   * @param {string} status 返回的状态
   * @param {any} data 返回的数据
   */
  constructor(data) {
    this.msg = data.msg || ''
    this.status = data.status || 'success'
    this.code = data.code || 200
    this.data = data.data || {}
  }
}

module.exports = {
  commonResEntity,
  success: (ctx, { result = null, msg = "请求成功", code = 200, status = 200 }) => {
    ctx.body = {
      code: code,
      msg: msg,
      data: result,
    };
    ctx.status = status;
  },
  error: (ctx, { code = 500, msg = '' }) => {
    ctx.body = {
      code: code,
      msg: msg,
    };
    ctx.status = code;
  }
};