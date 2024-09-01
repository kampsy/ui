

/**
 * Returns a Date object representing 1970-01-01T00:00:00.000Z.
 *
 * @return {Date} A Date object representing 1970-01-01T00:00:00.000Z.
 */
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
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    return [monthStart, monthEnd];
};


/**
 * Returns the first and last day of the month for a given date, using UTC date calculations.
 *
 * @param {Date} date - The date object from which to derive the month and year.
 * @return {[Date, Date]} An array containing the first and last day of the month.
 */
export const getFirstAndLastDayUTC = (date: Date): [Date, Date] => {
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
export const arrayRange = (start: number = 0, end: number = 0, step: number = 1): number[] => {
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
    const daysInMonth = monthEnd.getDate();

    return arrayRange(1, daysInMonth + 1, 1).map((date) => ({
        day: date,
        dateObj: new Date(dateProp.getFullYear(), dateProp.getMonth(), date)
    }));
};



/**
 * Generates an array of objects representing the days in a month, using UTC date calculations.
 *
 * @param {Date} dateProp - The date object from which to derive the month and year.
 * @param {Date} monthEnd - The date object representing the last day of the month.
 * @return {Object[]} An array of objects containing the day of the month and a corresponding date object.
 */
export const getMonthDateRangeUTC = (dateProp: Date, monthEnd: Date): { day: number; dateObj: Date }[] => {
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

/**
 * Returns true if the given dates have the same time.
 *
 * @param first - The first date to compare.
 * @param second - The second date to compare.
 * @return True if the given dates have the same time, false otherwise.
 */
export const isTimeEqual = (first: Date, second: Date) => {
    return first.getTime() == second.getTime()
}


/**
 * Returns true if the given date falls within the given start and end dates,
 * ignoring the time component of the dates.
 *
 * @param date - The date to check.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @return True if the given date is in the given range, false otherwise.
 */
export const isInDateRange = (date: Date, startDate: Date, endDate: Date) => {
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    date.setHours(0, 0, 0, 0)
    return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()
}

/**
 * Returns true if the given date falls within the given start and end dates,
 * ignoring the time component of the dates and using UTC date calculations.
 *
 * @param date - The date to check.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @return True if the given date is in the given range, false otherwise.
 */
export const isInDateRangeUTC = (date: Date, startDate: Date, endDate: Date) => {
    startDate.setUTCHours(0, 0, 0, 0)
    endDate.setUTCHours(0, 0, 0, 0)
    date.setUTCHours(0, 0, 0, 0)
    return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()
}

/**
 * Returns true if the given date is a Saturday or Sunday.
 *
 * @param date - The date to check.
 * @returns True if the given date is a Saturday or Sunday.
 */
export const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6
}


/**
 * Formats a date range into a string, handling different cases for single day,
 * same month, and different month/year.
 *
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @return A string representing the date range.
 */
export const formatDateRange = (startDate: Date, endDate: Date): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    const startDay = startDate.getDate();
    const startMonth = startDate.toLocaleString('en-US', { month: 'short' });
    const startYear = startDate.getFullYear();

    const endDay = endDate.getDate();
    const endMonth = endDate.toLocaleString('en-US', { month: 'short' });
    const endYear = endDate.getFullYear();

    if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
        // Same day
        return startDate.toLocaleDateString('en-US', { weekday: 'short', ...options });
    } else if (startMonth === endMonth && startYear === endYear) {
        // Same month and year
        return `${startMonth} ${startDay} - ${endDay}`;
    } else {
        // Different month or year
        return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    }
}