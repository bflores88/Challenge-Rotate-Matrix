'use strict';

const Direction = require('./Direction').Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here
    let originalArr = this.matrix;
    let result = [];

    if (direction === 'ClockWise') {
      for (let i = 0; i < originalArr.length; i++) {
        let newArr = [];

        for (let j = originalArr.length - 1; j >= 0; j--) {
          newArr.push(originalArr[j][i]);
        }

        result.push(newArr);
      }

    }

    if (direction === 'CounterClockWise') {
      for (let i = originalArr.length - 1; i >= 0; i--) {
        let newArr = [];

        for (let j = 0; j < originalArr.length; j++) {
          newArr.push(originalArr[j][i]);
        }

        result.push(newArr);
      }
    }

    this.matrix = result;
    return this.matrix;
  }
};
