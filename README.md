# Node Image to Terrain Array by Box It Off

Input - png file, output filename number of columns, number of rows

Output - array of map terrain

## Overview

This is a module for a bigger project. It is self contained and will output to a file in the output folder. On its own it is not very useful but watch this space :)

## Example
Turn this -

![An image of part of the world][world]

Into this -

["water","water","water","water","water","water", ...,"land"...,"desert"...,"mountain"]

## Usage
`getTerrain(imageFile, cols, rows)`

## Further Development
- output code for rendering map
- command line inputs
- Browser gui

## Tasks
- [x] get image width and height
- [x] get hex radius
- [x] get center point of each hex
- [x] get pixel sample (array->rgba values) function
- [x] get average colour(array->rgb) of each sample
- [x] get hsv(array) values from rgb averages
- [x] convert hsv to terrain type (array)
- [x] output array to file
- [x] clean up code :)

[world]: https://github.com/jjmax75/node-image-terrain-array/blob/master/test/resources/map.png "World - Asia, Europe, North Africa"
