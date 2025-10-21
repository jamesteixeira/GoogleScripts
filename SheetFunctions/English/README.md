## Installation and Usage

- Open your Google Sheets document.
- Click on **Extensions → Apps Script.**
- Delete any existing code (if needed) and paste the script of the function.
- Save the project (you can name it as “Custom Functions”).
- You can also add a separate file for each function if you want to include more than one function, and save the file using the function’s own name (e.g., CumulativeAverage.gs)..
- Close the Apps Script editor.
- Back in the spreadsheet, you can now use the function like any built-in one.

- The function will automatically “spill” the results into the column below.

If the function doesn’t update immediately, reload the sheet or type the formula again. \
The custom function runs automatically, without requiring any special permissions.

## Functions

- [CumulativeAverage](CumulativeAverage.md) - Calculates the cumulative average (running mean) of a column of numbers and returns the result as a column array.
- [ElapsedTime](ElapsedTime.md) - Calculates the elapsed time between two dates and returns the result in years, months, and days as a text string.