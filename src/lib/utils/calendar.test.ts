import { describe, it, expect } from "vitest"
import { nextMonth, prevMonth, getMonthDateRange, generateCalendar } from './calendar.js';


describe("nextMonth", () => {
  it("should return February for January", () => {
    const date = new Date("2022-01-01T00:00:00.000Z");
    const result = nextMonth(date);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(1);
  });

  it("should return January for December", () => {
    const date = new Date("2022-12-01T00:00:00.000Z");
    const result = nextMonth(date);
    expect(result.getFullYear()).toBe(2023); // Next year
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1);
  });

  it("should return July for June", () => {
    const date = new Date("2022-06-01T00:00:00.000Z");
    const result = nextMonth(date);
    expect(result.getMonth()).toBe(6); // July
    expect(result.getDate()).toBe(1);
  });
});


describe('prevMonth function', () => {
  it('should return December for January', () => {
    const date = new Date('2022-01-01T00:00:00.000Z');
    const expectedDate = new Date('2021-12-01T00:00:00.000Z');
    expect(prevMonth(date)).toEqual(expectedDate);
  });

  it('should return previous month for a random month', () => {
    const date = new Date('2022-06-15T00:00:00.000Z');
    const expectedDate = new Date('2022-05-01T00:00:00.000Z');
    expect(prevMonth(date)).toEqual(expectedDate);
  });

  it('should return November for December', () => {
    const date = new Date('2022-12-01T00:00:00.000Z');
    const expectedDate = new Date('2022-11-01T00:00:00.000Z');
    expect(prevMonth(date)).toEqual(expectedDate);
  });
});

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