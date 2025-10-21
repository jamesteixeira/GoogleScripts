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

[Back to README](README.md)