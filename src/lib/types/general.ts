

export type DateValue = Date | string;

export interface RangeValue<T>  {
    start: T;
    end: T;
};