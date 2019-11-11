// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/controller/admin');
import ExportHome = require('../../../app/controller/home');
import ExportUser = require('../../../app/controller/user');
import ExportV1User = require('../../../app/controller/v1/user');

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    home: ExportHome;
    user: ExportUser;
    v1: {
      user: ExportV1User;
    }
  }
}
