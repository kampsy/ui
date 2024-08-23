
/**
 * Returns a new Date object representing the month after the given date.
 *
 * @param {Date} fnDate - The date from which to calculate the next month.
 * @return {Date} A new Date object representing the first day of the next month.
 */
export const nextMonth = (fnDate: Date): Date => {
    return new Date(fnDate.setMonth(fnDate.getMonth() + 1));
};

/**
 * Returns a new Date object representing the month before the given date.
 *
 * @param {Date} fnDate - The date from which to calculate the previous month.
 * @return {Date} A new Date object representing the first day of the previous month.
 */
export const prevMonth = (fnDate: Date): Date => {
    return new Date(fnDate.setMonth(fnDate.getMonth() - 1));
};

/**
 * Returns the first and last day of the month for a given date.
 *
 * @param {Date} date - The date object from which to derive the month and year.
 * @return {[Date, Date]} An array containing the first and last day of the month.
 */
export const getFirstAndLastDay = (date: Date): [Date, Date] => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();

    const monthStart = new Date(Date.UTC(year, month, 1));
    const monthEnd = new Date(Date.UTC(year, month + 1, 0));

    return [monthStart, monthEnd];
};

/**
 * Generates an array of numbers over a specified range.
 *
 * @param {number} [start=0] - The starting number of the range (inclusive).
 * @param {number} [end=0] - The ending number of the range (exclusive).
 * @param {number} [step=1] - The difference between each number in the range.
 * @return {number[]} An array of numbers from `start` to `end` with the specified `step`.
 */
export const arrayRange = (start = 0, end = 0, step = 1) => {
    end = Number(end) - 1;

    if (end < start) return [];
    if (step === 0) step = 1;

    // Used Math.floor for safer handling of non-integer ranges
    const length = Math.floor((end - start) / step) + 1;

    return Array.from({ length }, (_, i) => start + i * step);
};

/**
 * Generates an array of objects representing the days in a month.
 *
 * @param {Date} dateProp - The date object from which to derive the month and year.
 * @param {Date} monthEnd - The date object representing the last day of the month.
 * @return {Object[]} An array of objects containing the day of the month and a corresponding date object.
 */
export const getMonthDateRange = (dateProp: Date, monthEnd: Date) => {
    const daysInMonth = monthEnd.getUTCDate();

    return arrayRange(1, daysInMonth + 1, 1).map((date) => ({
        day: date,
        dateObj: new Date(Date.UTC(dateProp.getUTCFullYear(), dateProp.getUTCMonth(), date))
    }));
};


/**
 * Generates a 2D array representing a calendar, where each sub-array represents a week.
 *
 * @param {Object[]} dateList - An array of objects containing the day of the month and a corresponding date object.
 * @return {string[][]} A 2D array of strings, where each string represents a day of the month.
 */
export const generateCalendar = (
    dateList: {
        day: number;
        dateObj: Date;
    }[]
): string[][] => {
    // Extract the first date to determine the starting day of the week
    const firstDateObj = dateList[0].dateObj;
    let firstDayOfWeek = firstDateObj.getDay(); // Sunday = 0, Saturday = 6

    // Initialize the calendar with the days of the week header
    const calendarRows: string[][] = [];

    // Start filling the first week with empty strings until the first date
    let currentRow: string[] = new Array(firstDayOfWeek).fill('');

    // Process the date list and add each date to the current row
    dateList.forEach((date) => {
        const formattedDate = `${date.day}`; // ${date.dateObj.toLocaleString('default', { month: 'short' }).toLowerCase()}
        currentRow.push(formattedDate);

        // If the row is full (7 days), add it to the calendar and start a new row
        if (currentRow.length === 7) {
            calendarRows.push(currentRow);
            currentRow = [];
        }
    });

    // Append the last row if it's not empty and fill it with empty strings to complete the week
    if (currentRow.length > 0) {
        while (currentRow.length < 7) {
            currentRow.push('');
        }
        calendarRows.push(currentRow);
    }

    return calendarRows;
}