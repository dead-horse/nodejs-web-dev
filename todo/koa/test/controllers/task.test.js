/**!
 * todo - test/controllers/task.test.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var should = require('should');
var request = require('supertest');
var app = require('../../app');

describe.skip('controllers/task.test.js', function () {
  before(function (done) {
    app = app.listen(0, done);
  });

  describe('POST /', function () {
    it('should add new task success', function (done) {

    });
  });
});
