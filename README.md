<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 用户中心

## 主要功能

主要负责各子平台用户的帐号注册、登陆、找回密码以及与其他系统之间帐号关联等功能，目标是可以通过调用平台提供的接口便可以快速完成用户模块的功能实现，避免重复冗余开发。

> 注意：这并不代表各子平台系统不能拥有自己的用户子模块，但各用户子模块的同有信息应该与该平台的信息实时同步，并始终以该平台的信息为准（比如用户名、性别、邮箱等信息）。其它的平台专属信息不作特殊限制（比如平台下的某位用户的昵称、心情状态等）。

## 安装

1. node版本v16以上。

2. 进入项目并执行一下命令：

```bash
$ yarn install
```

## 运行

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## 测试

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

### 占用资源

端口：3001

数据库：`xkuser`

### API接口

- 用户注册： `(http/https)://api.domain.com/xkusercenter/v1/regist`

- 用户登录： `(http/https)://api.domain.com/xkusercenter/v1/login`或`(http/https)://api.domain.com/xkusercenter/v1/signIn`

- 用户登出： `(http/https)://api.domain.com/xkusercenter/v1/logout`

- 找回密码/忘记密码： `(http/https)://api.domain.com/xkusercenter/v1/findPassword`

- 更新用户信息：`(http/https)://api.domain.com/xkusercenter/v1/update/userId`

- 删除用户（管理员）：`(http/https)://api.domain.com/xkusercenter/v1/delete/userId`

- 禁用用户/冻结用户（管理员）：`(http/https)://api.domain.com/xkusercenter/v1/disable/userId`

## 设计规范

- 平台遵循[通用接口设计规范](https://github.com/xingkongus/usercenter/blob/master/common-interface-standard.md)。

- 所有api以`/xkusercenter/`开头作为标识符。

- 标识符后面应该紧接**接口版本号**，如`/v1/`代表要使用版本1的接口调用方法，否则可能会出现因为版本不兼容而出的调用失败问题。

- 调用平台的用户注册url看起来应该像这样：`(http/https)://api.domain.com/xkusercenter/v1/regist`。

## 发布历史

### v0.0.1

- 新增项目README
