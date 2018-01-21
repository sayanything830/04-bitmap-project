'use strict';
const start = module.exports = {};

const reader = require('./lib/reader.js');
const bitmap = require('./lib/bitmap.js');
const transform = require('./lib/transform.js');

start.processImage = function(args) {
  // console.log('args', args);
  if(args.length < 5) {
    // console.error('invalid arguments');
    return 'invalid arguments';
  }

  let [imagePath, newName, tm] = args.slice(2);
  let imgDir = imagePath.split('/').slice(0, -1).join('/');
  let newPath = `${imgDir}/${newName}.bmp`;

  if(!transform.hasOwnProperty(tm)) {
    // console.error('invalid transform method');
    return 'invalid transform method';
  }

  reader.read(imagePath, (err, fd) => {
    if(err) return err;
    bitmap.parse(fd, (err, bmp) => {
      if(err) err;
      transform[tm](bmp, (err, bmp) => {
        if(err) err;
        reader.write(bmp, newPath, err => {
          if(err) err;
        });
      });
    });
  });
};

start.processImage(process.argv);
