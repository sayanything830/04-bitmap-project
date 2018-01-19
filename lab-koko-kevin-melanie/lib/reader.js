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

reader.write = function(bmpObj, callback) {
  fs.writeFile(`${__dirname}/../__test__/asset/new.bmp`, bmpObj.allData, err => {
    if(err) return callback(err);
    console.log('file created');
  });
};
