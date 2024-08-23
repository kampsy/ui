import { describe, it, expect } from "vitest"
import { randomString } from './random.js';


describe('randomString function', () => {
    it('returns a string of the correct length', () => {
        const length = 10;
        const result = randomString(length);
        expect(result.length).toBe(length);
    });

    it('returns a string containing only the specified characters', () => {
        const length = 10;
        const result = randomString(length);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < result.length; i++) {
            expect(characters.includes(result[i])).toBe(true);
        }
    });

    it('returns a different string each time it is called', () => {
        const length = 10;
        const result1 = randomString(length);
        const result2 = randomString(length);
        expect(result1).not.toBe(result2);
    });

    it('throws an error when the length is less than 0', () => {
        const length = -1;
        expect(() => randomString(length)).toThrowError();
    });

    it('throws an error when the length is not an integer', () => {
        const length = 10.5;
        expect(() => randomString(length)).toThrowError();
    });
});