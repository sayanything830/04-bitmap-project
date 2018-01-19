'use strict';

const transform = module.exports = {};

transform.random = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = Math.floor(Math.random() * Math.floor(255));
  }
  callback(null, bmp);
};

transform.invert = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = 255 - bmp.pixelArray[i];
  }
  callback(null, bmp);
};

// transform.reverse = function(bmp, callback) {
//   let x = bmp.pixelArray.reverse();
//   bmp.pixelArray = x;
//   callback(null, bmp);
// };

transform.boostGreen = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    bmp.pixelArray[i + 1] = 255;
  }
  callback(null, bmp);
};

transform.boostRed = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    bmp.pixelArray[i + 2] = 255;
  }
  callback(null, bmp);
};

transform.boostBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    bmp.pixelArray[i] = 255;
  }
  callback(null, bmp);
};

transform.redChannel = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    bmp.pixelArray[i] = bmp.pixelArray[i + 2];
    bmp.pixelArray[i + 1] = bmp.pixelArray[i + 2];
  }
  callback(null, bmp);
};

transform.blackWhite = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    let x = ((bmp.pixelArray[i] + bmp.pixelArray[i + 2] + bmp.pixelArray[i + 1]) / 3);
    bmp.pixelArray[i] = x;
    bmp.pixelArray[i + 1] = x;
    bmp.pixelArray[i + 2] = x;
  }
  callback(null, bmp);
};

transform.invert2 = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
    bmp.pixelArray[i] = 255 - bmp.pixelArray[i];
  }
  callback(null, bmp);
};

transform.invert3 = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 3; i += 3) {
    bmp.pixelArray[i] = 255 - bmp.pixelArray[i];
  }
  callback(null, bmp);
};

transform.invert4 = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length / 2; i += 2) {
    bmp.pixelArray[i] = 255 - bmp.pixelArray[i];
  }
  callback(null, bmp);
};
