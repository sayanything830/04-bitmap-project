'use strict';

const transform = module.exports = {};

transform.random = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i++) {
    bmp.colorArray[i] = Math.floor(Math.random() * Math.floor(255));
  }
  callback(null, bmp);
};

transform.invert = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i++) {
    bmp.colorArray[i] = 255 - bmp.colorArray[i];
  }
  callback(null, bmp);
};

transform.reverse = function(bmp, callback) {
  let x = bmp.pixelArray.reverse();
  bmp.colorArray = x;
  callback(null, bmp);
};

transform.boostGreen = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i + 1] = 255;
  }
  callback(null, bmp);
};

transform.boostRed = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i + 2] = 255;
  }
  callback(null, bmp);
};

transform.boostBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = 255;
  }
  callback(null, bmp);
};

transform.boostTransparent = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i - 1] = 50;
  }
  callback(null, bmp);
};

transform.redChannel = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = bmp.colorArray[i + 2];
    bmp.colorArray[i + 1] = bmp.colorArray[i + 2];
  }
  callback(null, bmp);
};

transform.blackWhite = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    let x = ((bmp.colorArray[i] + bmp.colorArray[i + 2] + bmp.colorArray[i + 1]) / 3);
    bmp.colorArray[i] = x;
    bmp.colorArray[i + 1] = x;
    bmp.colorArray[i + 2] = x;
  }
  callback(null, bmp);
};

transform.invert2 = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = 255 - bmp.colorArray[i];
  }
  callback(null, bmp);
};

transform.invert3 = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 3) {
    bmp.colorArray[i] = 255 - bmp.colorArray[i];
  }
  callback(null, bmp);
};

transform.invert4 = function(bmp, callback) {
  for(let i = 0; i < bmp.colorArray.length; i += 2) {
    bmp.colorArray[i] = 255 - bmp.colorArray[i];
  }
  callback(null, bmp);
};
