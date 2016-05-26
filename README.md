# Node Image to Terrain Array by Box It Off

Input - png buffer, number of columns, number of rows

Output - array of average hsv values for each hexagon, array of centre points of hexagons, hexagon radius

## Overview

This is a module for a bigger project. It is self contained and will output to a file in the output folder. On its own it is not very useful but watch this space :)

## Example
Turn this -

![An image of part of the world][world]

Into this -

[{ h: 91, s: 55, v: 21 }, {....}, .....], [[ 9.804061174918171, 16.9811320754717 ], [ ....... ], ......], 11.320754716981131

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
- [x] return array of hsv values, array of hex centre points, hex radius
- [x] clean up code :)

[world]: https://github.com/jjmax75/node-image-terrain-array/blob/master/test/resources/map.png "World - Asia, Europe, North Africa"
