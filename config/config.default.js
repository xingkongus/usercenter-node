/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555343319427_7628';

  config.security = {
    domainWhiteList: ['http://localhost:3000', 'http://localhost:3001'],
    csrf: {
      enable: false,
    }
  }

  // add your middleware config here
  config.middleware = [];

  // view
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.cors = {
    origin: ['http://localhost:3001'],
    credentials: true,
  }

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

  config.jwt = {
    secret: "123456",
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};