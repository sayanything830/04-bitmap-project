'use strict';

const reader = require('./lib/reader.js');
// const imagePath = `./__test__/asset/bitmap.bmp`;
const bitmap = require('./lib/bitmap.js');
const transform = require('./lib/transform.js');
console.log('argv', process.argv);
// let tm = 'reverse';
let [imagePath, newName, tm] = process.argv.slice(2);
// console.log(imagePath.split('/').slice(0, -1).join('/'));
let imgDir = imagePath.split('/').slice(0, -1).join('/');
// console.log(imgDir);
let newPath = `${imgDir}/${newName}.bmp`;

reader.read(imagePath, (err, fd) => {
  if(err) console.error(err);
  bitmap.parse(fd, (err, bmp) => {
    if(err) console.error(err);
    transform[tm](bmp, (err, bmp) => {
      if(err) console.error(err);
      // console.log(bmp);
      reader.write(bmp, newPath, err => {
        if(err) return console.error(err);
      });
    });
  });
});
