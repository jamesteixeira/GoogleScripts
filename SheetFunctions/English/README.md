# Installation and Usage

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

# Functions

## CUMULATIVEAVERAGE

Calculates the cumulative average (running mean) of a column of numbers and returns the result as a column array.
Each cell in the output represents the average of all values from the first to that row.

## Sample Usage

```CUMULATIVEAVERAGE(A2:A06, 8)```

### Syntax

```CUMULATIVEAVERAGE(range, [decimals])```

### Parameters

- **range** — The input range containing the numeric values to average.
Non-numeric cells are ignored, but preserved as empty in the output.

- **decimals** — (optional) The number of decimal places to round the result to.
If omitted, results are not rounded.

### Example
| Input | Formula | Output |
|-------|----------|--------|
| 2 | ```=CUMULATIVEAVERAGE(A2:A6)``` | 2 |
| 4 |  | 3 |
| 6 |  | 4 |
| 8 |  | 5 |
| 10 |  | 6 |

**Notes:**
- The function must be inserted as an *array formula* (it spills automatically in Google Sheets).  
- Text values are ignored; commas in numeric text (e.g., `"1,23"`) are treated as decimal points (`1.23`).

## ELAPSEDTIME

Calculates the elapsed time between two dates and returns the result in years, months, and days as a text string. \
The function automatically adjusts incomplete months and days for accurate results.

### Sample Usage

```ELAPSEDTIME(A2; B2)```

### Syntax

```ELAPSEDTIME(start_date, end_date)```

### Parameters

- **start_date** — The beginning date of the interval.

- **end_date** — The ending date of the interval. Must be later than the start date.

## Return

A descriptive string representing the elapsed time between the two dates, for example:

"2 years, 3 months and 5 days" \
"1 year and 12 days" \
"4 months and 2 days"

### Examples
| A | B | Formula | Result |
|-----|-----|----------|-------|
| 01/01/2020 | 03/15/2023 | =ELAPSEDTIME(A2; B2) | 3 years, 2 months and 14 days |
| 05/10/2022 | 06/25/2022 | ELAPSEDTIME(A3; B3) | 1 month and 15 days |
| 01/01/2024 | 01/01/2025 | =ELAPSEDTIME(A4; B4) | 1 year |

**Notes:**

If either input is not a valid date, the function returns "Invalid dates". \
If the end date is earlier than the start date, the function returns "The end date must be later than the start date." \
The result is textual only and cannot be used directly in numeric calculations.