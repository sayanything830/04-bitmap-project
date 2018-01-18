'use strict';

const reader = require('./lib/reader.js');
const imagePath = `${__dirname}/asset/bitmap.bmp`

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
});
