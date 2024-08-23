import { describe, it, expect } from "vitest"
import { getMonthDateRange, generateCalendar } from './calendar.js';

describe('getMonthDateRange', () => {
  it('should return 31 days for January', () => {
    const dateProp = new Date('2022-01-01T00:00:00.000Z');
    const monthEnd = new Date('2022-01-31T00:00:00.000Z');
    const result = getMonthDateRange(dateProp, monthEnd);
    expect(result.length).toBe(31);
  });

  it('should return 28 days for February (non-leap year)', () => {
    const dateProp = new Date('2022-02-01T00:00:00.000Z');
    const monthEnd = new Date('2022-02-28T00:00:00.000Z');
    const result = getMonthDateRange(dateProp, monthEnd);
    expect(result.length).toBe(28);
  });

  it('should return 29 days for February (leap year)', () => {
    const dateProp = new Date('2020-02-01T00:00:00.000Z');
    const monthEnd = new Date('2020-02-29T00:00:00.000Z');
    const result = getMonthDateRange(dateProp, monthEnd);
    expect(result.length).toBe(29);
  });

  it('should return 30 days for April', () => {
    const dateProp = new Date('2022-04-01T00:00:00.000Z');
    const monthEnd = new Date('2022-04-30T00:00:00.000Z');
    const result = getMonthDateRange(dateProp, monthEnd);
    expect(result.length).toBe(30);
  });
});


describe('generateCalendar', () => {
  it('should return an empty calendar for an empty date list', () => {
    const dateList: { day: number; dateObj: Date }[] = [];
    expect(generateCalendar(dateList)).toEqual([]);
  });

  it('should return a calendar with a single date', () => {
    const dateList: { day: number; dateObj: Date }[] = [
      { day: 1, dateObj: new Date('2022-01-01') },
    ];
    expect(generateCalendar(dateList)).toEqual([
      ['', '', '', '', '', '', '1'],
    ]);
  });

  it('should return a calendar with multiple dates', () => {
    const dateList: { day: number; dateObj: Date }[] = [
      { day: 1, dateObj: new Date('2022-01-01') },
      { day: 2, dateObj: new Date('2022-01-02') },
      { day: 3, dateObj: new Date('2022-01-03') },
    ];
    expect(generateCalendar(dateList)).toEqual([
      ['', '', '', '', '', '', '1'],
      ['', '', '', '', '', '2', '3'],
    ]);
  });

  it('should return a calendar with dates spanning multiple weeks', () => {
    const dateList: { day: number; dateObj: Date }[] = [
      { day: 1, dateObj: new Date('2022-01-01') },
      { day: 2, dateObj: new Date('2022-01-02') },
      { day: 3, dateObj: new Date('2022-01-03') },
      { day: 8, dateObj: new Date('2022-01-08') },
      { day: 9, dateObj: new Date('2022-01-09') },
    ];
    expect(generateCalendar(dateList)).toEqual([
      ['', '', '', '', '', '', '1'],
      ['', '', '', '', '', '2', '3'],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '8', '9'],
    ]);
  });

  it('should return a calendar with dates starting from different days of the week', () => {
    const dateList: { day: number; dateObj: Date }[] = [
      { day: 3, dateObj: new Date('2022-01-03') },
      { day: 4, dateObj: new Date('2022-01-04') },
      { day: 5, dateObj: new Date('2022-01-05') },
    ];
    expect(generateCalendar(dateList)).toEqual([
      ['', '', '3', '4', '5', '', ''],
    ]);
  });
});