

export const getZeroDate = (): Date => {
    return new Date(Date.UTC(1970, 0, 1));
};



/**
 * Returns true if the given Date object represents the date 1970-01-01T00:00:00.000Z, false otherwise.
 *
 * @param {Date} date - The date to check.
 * @return {boolean} True if the date is 1970-01-01T00:00:00.000Z, false otherwise.
 */
export const isZeroDate = (date: Date): boolean => {
    return date.getUTCFullYear() === 1970 && date.getUTCMonth() === 0 && date.getUTCDate() === 1;
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
 * Returns a new Date object representing the month after the given date.
 *
 * @param {Date} fnDate - The date from which to calculate the next month.
 * @return {Date} A new Date object representing the first day of the next month.
 */
export const nextMonth = (fnDate: Date): Date => {
    return new Date(fnDate.setMonth(fnDate.getMonth() + 1));
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
 * Generates a calendar array based on the provided date list.
 *
 * @param {Array<Object>} dateList - A list of objects containing the day and date object.
 * @return {Array<Object>} An array of objects representing the days in a calendar format.
 */

export const generateCalendar = (
    dateList: { day: number; dateObj: Date }[]
): Array<{ day: number | string; dateObj: Date }> => {
    // Get the day of the week of the first date
    const firstDateObj = dateList[0].dateObj;
    const firstDayOfWeek = firstDateObj.getDay(); // Sunday = 0, Saturday = 6

    // zero date
    const zero = getZeroDate();

    // Start filling the first week with empty objects until the first date
    const currentRow: Array<{ day: number | string; dateObj: Date }> = new Array(firstDayOfWeek).fill({ day: '', dateObj: zero });

    // Fill the current row with the dates from the date list
    dateList.forEach((date) => {
        currentRow.push({ day: date.day, dateObj: date.dateObj });
    });

    // Fill the rest of the rows with empty objects
    if (currentRow.length > 0) {
        while (currentRow.length < 7) {
            currentRow.push({ day: '', dateObj: zero });
        }
    }

    return currentRow;
};