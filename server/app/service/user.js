'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 查询用户
   * @param {object} queryParams 查询用户的参数
   * @returns {object} { result, data, message, fatal }数据库查询结果
   */
  async getUser(queryParams) {
    try {
      const queryRes = await this.app.mysql.get('user', queryParams);
      if (queryRes) {
        return { result: true, data: queryRes };
      } else {
        return { result: false, data: {}, message: '查询不到数据', fatal: false };
      }
    } catch (error) {
      return { result: false, message: error.sqlMessage, fatal: true };
    }
  }

  getUsers(userIds) {

  }

  /**
   * 添加一个用户
   * @param {object} userInfo 用户信息
   * @param {string} userInfo.username 名称
   * @param {string} userInfo.nickname 昵称
   * @param {string} userInfo.sex 性别
   * @param {string} userInfo.age 年龄
   * @param {string} userInfo.phone 电话
   * @param {string} userInfo.email 邮件
   * @param {string} userInfo.password 密码
   * @param {string} userInfo.collage 学院信息
   * @param {string} userInfo.major 专业信息
   * @param {string} userInfo.classnum 班级信息
   * @param {string} userInfo.classroleid 班级角色信息
   * @param {string} userInfo.xkroleid 星空角色信息
   * @param {string} userInfo.assiationroleid 社团角色信息
   * @returns {object} { result, data, message, fatal }数据库操作结果
   */
  async addUser(userInfo) {
    try {
      const result = await this.app.mysql.insert('user', userInfo);
      if (result.affectedRows > 0 && (result.insertId === 0 || result.insertId)) {
        return { result: true };
      } else {
        return { result: false, message: '数据插入失败' };
      }
    } catch (error) {
      return { result: false, message: error.sqlMessage };
    }
  }
}

module.exports = UserService;