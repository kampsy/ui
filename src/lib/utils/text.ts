import { browser } from "$app/environment";

/**
 * Calculates the width of a string in pixels using a specified font.
 *
 * @param {string} text - The text to measure the width of.
 * @param {string} [font='12px Inter'] - The font to use for measuring the width. Defaults to '12px Inter'.
 * @return {number} The width of the text in pixels. Returns 250 if context or the browser is not available.
 */

export const getStringWidth = (text: string, font: string = '12px Inter'): number => {
    if (browser) {
        // Create a temporary canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
            // Set the font to the context, this must match the font used in the UI
            context.font = font;

            // Measure the width of the text
            const width = context.measureText(text).width;

            const numStr = width.toFixed(0);
            return Number(numStr);
        }
        return 250;
    }
    return 250;
};