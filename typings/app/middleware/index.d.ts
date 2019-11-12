// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFilterGetRequest = require('../../../app/middleware/filterGetRequest');
import ExportFilterPostRequest = require('../../../app/middleware/filterPostRequest');

declare module 'egg' {
  interface IMiddleware {
    filterGetRequest: typeof ExportFilterGetRequest;
    filterPostRequest: typeof ExportFilterPostRequest;
  }
}
