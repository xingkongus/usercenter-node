'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * @member Config#mysql
   * @property {Object} client - mysql客户端配置
   * @property {Object} client.host - mysql服务地址
   * @property {Object} client.port - mysql服务端口
   * @property {Object} client.user - mysql服务用户名
   * @property {Object} client.password - mysql服务用密码
   * @property {Object} client.database - 使用mysql服务里的数据库名
   * @property {Object} app - 是否加载到 app 上，默认开启
   * @property {Object} agent - 是否加载到 agent 上，默认关闭
   */
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'xk_usercenter',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return config;
};