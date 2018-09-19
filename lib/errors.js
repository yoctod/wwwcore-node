'use strict';

var createError = require('errno').create;

var WwwcoreNodeError = createError('WwwcoreNodeError');

var RPCError = createError('RPCError', WwwcoreNodeError);

module.exports = {
  Error: WwwcoreNodeError,
  RPCError: RPCError
};
