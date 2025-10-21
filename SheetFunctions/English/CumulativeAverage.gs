/**
 * CumulativeAverage.gs
 * Copyright (c) 2025 James Santos Teixeira
 *
 * Developed by James Santos Teixeira
 * with assistance from OpenAI’s ChatGPT.
 *
 * This software is released under the MIT License.
 * See the LICENSE file in the repository root for details.
 */

/**
 * Returns the cumulative average (mean) as a column (2D array).
 * Usage in the spreadsheet: =CumulativeAverage(B2:B11)
 * Optional: =CumulativeAverage(B2:B11, 4)  -> rounds to 4 decimal places
 */
function CumulativeAverage(inputRange, decimals) {
  // receives a range (2D array) when called as a custom function
  var input = inputRange;
  var values = [];

  if (Array.isArray(input)) {
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < input[i].length; j++) {
        values.push(input[i][j]);
      }
    }
  } else {
    values = [input];
  }

  var averages = [];
  var sum = 0;
  var count = 0;
  var pow10 = (typeof decimals === 'number') ? Math.pow(10, decimals) : null;

  for (var k = 0; k < values.length; k++) {
    var v = values[k];

    // Converts "1,23" to 1.23 (in case the user entered text with a comma)
    var num = (typeof v === 'number') ? v : parseFloat(String(v).replace(',', '.'));

    if (!isNaN(num)) {
      sum += num;
      count++;
      var avg = sum / count;
      if (pow10 !== null) avg = Math.round(avg * pow10) / pow10;
      averages.push([avg]);
    } else {
      // keeps the cell empty for non-numeric entries
      averages.push(['']);
    }
  }

  return averages; // returns a 2D array for "spill"
}