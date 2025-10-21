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

[Back to README](README.md)