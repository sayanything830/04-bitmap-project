# 04 Bitmap Project

This is an application that offers a selection of transformations to apply to a bitmap image.

### How to Use

1. Clone or fork this repository
2. 

### Transform Module

The transform module contains functions to change the color array or pixel array in a bitmap image. All transform module functions have an arity of two, each taking in the object representing a bitmap image (created from the bitmap module) and a callback to send the transformed file data back to the reader module.

##### Transform Functions:

* random - takes each bit in the color array and assigns a random number (between 0 and 255) to the RGBa values. The new image file created will be different each time this function is called.

* invert - alters the color array to the opposite RGBa value (ex: 255 becomes 0).

* reverse - alters the pixel array and flips the image both vertically and horizontally.

* boostGreen - alters all green values in the color array to 255.

* boostRed - alters all red values in the color array to 255.

* boostBlue - alters all blue values in the color array to 255.

* redChannel - alters each green and blue value in the color array to equal the red value. This returns a grayscale image based on the red channel.

* blackWhite - alters each red green and blue value in the color array to the average of all three and returns a grayscale image.

* invert2 - alters every 4th bit in the color array to it's opposite value.

* invert3 - alters every 3rd bit in the color array to it's opposite value.

* invert4 - alters every other bit in the color array to it's opposite value.