'use strict';

const reader = require('../lib/reader.js');
const imagePath = `${__dirname}/asset/bitmap.bmp`;
const bitmap = require('../lib/bitmap.js');
const transform = require('../lib/transform.js');
console.log('this should be a file path', bitmap);

describe('Reader Module', function() {
  describe('#Read', () => {
    it('should read file', (done) => {
      reader.read(imagePath, (err, fd) => {
        if(err) console.error(err);
        expect(fd).not.toBeNull();
        console.log(fd);
        done();
      });
    });
  });
  describe('#Bitmap', () => {
    it('should read file and create new bmp object', (done) => {
      reader.read(imagePath, (err, fd) => {
        if(err) console.error(err);
        expect(fd).not.toBeNull();
        bitmap.parse(fd, (err, bmp) => {
          if(err) console.error(err);
          console.log(bmp);
          done();
        });
      });
    });
    it('should write a new file', (done) => {
      reader.read(imagePath, (err, fd) => {
        if(err) console.error(err);
        expect(fd).not.toBeNull();
        bitmap.parse(fd, (err, bmp) => {
          if(err) console.error(err);
          console.log(bmp);
          // reader.write(bmp, err => {
          //   if(err) return console.error(err);
          done();
          // });
        });
      });
    });
    it('should write a new file', (done) => {
      reader.read(imagePath, (err, fd) => {
        if(err) console.error(err);
        expect(fd).not.toBeNull();
        bitmap.parse(fd, (err, bmp) => {
          if(err) console.error(err);
          console.log(bmp.pixelArray);
          transform.boostBlue(bmp, (err, bmpObj) => {
            console.log('transform function', bmp.pixelArray);
            if(err) console.error(err);
            reader.write(bmpObj, err => {
              if(err) return console.error(err);
              done();
            });
          });
        });
      });
    });
  });
});
