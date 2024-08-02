
/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @return {string} The randomly generated string.
 */
export function randomString(length: number): string {
    let result = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}