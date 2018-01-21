const reader = require('../lib/reader.js');
const imagePath = `${__dirname}/asset/bitmap.bmp`;
const newPath = `${__dirname}/asset/test-bitmap.bmp`;
const bitmap = require('../lib/bitmap.js');
const transform = require('../lib/transform.js');
const fs = require('fs');


describe('#Transform module tests', function() {

  describe('#Transform.random tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.random({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.random(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.random(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.invert tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.invert({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.invert(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.invert(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.reverse tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.reverse({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.reverse(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.reverse(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.boostGreen tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.random({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.boostGreen(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.boostGreen(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.boostRed  tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.boostRed ({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.boostRed (bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.boostRed (bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.boostBlue tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.boostBlue({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.boostBlue(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.boostBlue(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.redChannel  tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.redChannel ({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.redChannel (bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.redChannel (bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.blackWhite  tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.blackWhite({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.blackWhite(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.blackWhite(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.invert2 tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.invert2({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.invert2(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.invert2(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.invert3 tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.invert3({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.invert3(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.invert3(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

  describe('#Transform.invert4 tests', function() {
    it('should return error message if the objet was not created by the Bmp constructor', (done) => {
      transform.invert4({some: 'thing'}, (err, bmp) => {
        if(err) console.error(err);
        expect(err).toBe('This is not a valid bitmap object');
        done();
      });
    });

    it('should return error message if the object is missing the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          delete bmp.pixelArray;
          delete bmp.colorArray;
          transform.invert4(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });

    it('should return error message if the object is missing values for the pixelArray or pixelColor  properties', (done) => {
      reader.read(imagePath, (err, data) => {
        bitmap.parse(data, (err, bmp) => {
          bmp.pixelArray = null;
          bmp.colorArray = null;
          transform.invert4(bmp, (err, bmp) => {
            if(err) console.error(err);
            expect(err).toBe('This is not a valid bitmap object');
            done();
          });
        });
      });
    });
  });

});