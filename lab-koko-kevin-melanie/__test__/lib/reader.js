'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.read = function(path, callback) {
  fs.readFile(path, (err, fd) => {
    if(err) {
      console.error(err);
      return callback(err);
    }
    callback(null, fd);
    
  });
};
