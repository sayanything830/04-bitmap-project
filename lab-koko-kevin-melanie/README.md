# 04 Bitmap Project

This is an application that offers a selection of transformations to apply to a bitmap image.


## dazzle! - a command line bitmap transformer

---

The dazzle command line utility allows the user to transform a bitmap image using any of the nine transform methods.  A new copy of the image is created with the supplied name.

### dazzle takes three arguments

  - <bitmap_file_path> - the path to a bitmap image to transform

  - <new-file-name>   the name for the new bitmap image without an extension

  - <transform-method>  name of the transform method

```
 dazzle  bitmap_file_path file  new_file_name file transform_method
 
 ```

### Installation

This is a node js project that can be installed and run as a command line tool.  

  1. Clone or fork this repository.

  2. In terminal, navigate to the root of the project.

  3. Enter  
  ```npm install```

  4. Enter  
  ```npm link```

  5. You are now ready to use dazzle!


  ---




### Transform Methods:

  - random   Randomize the color palette of the image

  - reverse  Description of -a flag

  - boostGreen  Sets the green values to 255

  - boostRed	Sets the red values to 255

  - boostBlue	Sets the blue values to 255

  - redChannel	 Creates a gray scale image based on the value of the red value

  - blackWhite	Creates a gray scale image based on the average value of the rgb values

  - invert   Inverts the rgb values

  - invert2  Inverts every fourth bit in the color palette

  - invert3  Inverts every third bit in the color palette

  - invert4  Inverts every other bit in the color palette

### Example
  
  ```
  dazzle ~/users/home/pictures/test.bmp dazed boostGreen

  ```
#### Dazzle man page

```
man dazzle

```

---


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