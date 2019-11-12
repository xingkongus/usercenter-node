module.exports = async function filterGetReqest(ctx, next) {
  if (ctx.request.method === 'GET') {
    await next();
  } else {
    ctx.status = 405;
    ctx.body = { msg: '非法调用', code: 405, data: null };
  }
};