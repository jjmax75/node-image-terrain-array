'use strict';

function getTerrain(imageFile, outputFile, cols, rows) {
  console.log('In the terrain module');

  const Promise = require('bluebird');
  let o = new Object();

  const createGridPoints = require('./src/createGridPoints');
  const imageWorker = require('./src/imageWorker');
  const helperFunctions = require('./src/helperFunctions');

  const image = imageWorker(imageFile);
  const gridPoints = createGridPoints(image.width, image.height, cols, rows);
  const helper = helperFunctions();

  // get details for the hexes
  const hexRadius = gridPoints.calculateHexRadius();
  const hexCentres = gridPoints.calculateEachHexCentre(hexRadius);

  o.getTerrainArray = function() {
    return new Promise(function(resolve, reject) {
      helper.getPixels(image)
      .then(function(pixels) {
        return helper.getSamplePixelsColours(pixels, hexRadius, hexCentres, image);
      })
      .then(function(samples) {
        return helper.getAverageColours(samples, image);
      })
      .then(function(averageColours) {
        return helper.convertToHSV(averageColours, image);
      })
      .then(function(hsvValues) {
        return helper.mapColourToTileType(hsvValues);
      })
      .then(function(terrain) {
        // writes to a file
        //helper.writeToFile(terrain, outputFile);
        // returns terrain array
        resolve(terrain);
      })
      .catch(function(error) {
        reject(error);
      });
    });

  }
  // get rgba samples values for each hexagon

  return o;
}

module.exports = getTerrain;
