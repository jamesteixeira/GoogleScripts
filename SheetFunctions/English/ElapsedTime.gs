/**
 * ElapsedTime.gs
 * Copyright (c) 2025 James Santos Teixeira
 *
 * Developed by James Santos Teixeira
 * with assistance from OpenAI’s ChatGPT.
 *
 * This software is released under the MIT License.
 * See the LICENSE file in the repository root for details.
 */


function elapsedTime(startDate, endDate) {
  // Check if the inputs are valid dates
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return "Invalid dates";
  }

  // Ensure the endDate is always after the startDate
  if (endDate < startDate) {
    return "The end date must be later than the start date.";
  }

  // Calculate the total difference in milliseconds
  const totalMilliseconds = endDate - startDate;

  // Calculate years, months, and days
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  const days = endDate.getDate() - startDate.getDate();

  // Adjust the difference if the number of months or days is negative
  let adjustedMonths = months;
  let adjustedYears = years;

  if (months < 0) {
    adjustedMonths = 12 + months;  // Adjust months to a positive value
    adjustedYears -= 1;  // Decrease a year since the month is not complete
  }

  let adjustedDays = days;

  if (days < 0) {
    const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0); // Get the last day of the previous month
    adjustedDays = prevMonth.getDate() + days;  // Adjust days to a positive value
    adjustedMonths -= 1;  // Decrease a month since the day is not complete
    if (adjustedMonths < 0) {
      adjustedMonths = 11;
      adjustedYears -= 1;  // Decrease a year since the month is not complete
    }
  }

  // Create the result string
  let result = [];

  // Add "year(s)" if there are years
  if (adjustedYears > 0) {
    result.push(adjustedYears + " " + (adjustedYears === 1 ? "year" : "years"));
  }

  // Add "month(s)" if there are months
  if (adjustedMonths > 0) {
    result.push(adjustedMonths + " " + (adjustedMonths === 1 ? "month" : "months"));
  }

  // Add "day(s)" if there are days
  if (adjustedDays > 0) {
    result.push(adjustedDays + " " + (adjustedDays === 1 ? "day" : "days"));
  }

  // Combine everything with "and" at the end if necessary
  if (result.length > 1) {
    const last = result.pop(); // Remove the last value
    return result.join(", ") + " and " + last; // Join the remaining values and add "and" at the end
  }

  // If there is only one value, return it directly
  return result.join("");
}