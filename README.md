# 用户中心——星空学生创新中心

## 主要功能

主要负责各子平台用户的帐号注册、登陆、找回密码以及与其他系统之间帐号关联等功能，目标是可以通过调用平台提供的接口便可以快速完成用户模块的功能实现，避免重复冗余开发。

> 注意：这并不代表各子平台系统不能拥有自己的用户子模块，但各用户子模块的同有信息应该与该平台的信息实时同步，并始终以该平台的信息为准（比如用户名、性别、邮箱等信息）。其它的平台专属信息不作特殊限制（比如平台下的某位用户的昵称、心情状态等）。

## 安装

此项目可以包含有多种语言的实现，请参考：

- [NODE.JS](https://github.com/xingkongus/usercenter/blob/master/node/README.md)

## 使用

### API接口

- 用户注册： `(http/https)://api.domain.com/xkusercenter/v1/register`

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

- 调用平台的用户注册url看起来应该像这样：`(http/https)://api.domain.com/xkusercenter/v1/register`。

## 发布历史

### v0.0000.0

- 新增项目README
