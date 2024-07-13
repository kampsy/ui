/**
 * Creates a theme object with a getter and setter for the current theme.
 *
 * @return {Object} An object with a `theme` getter and a `setTheme` setter.
 */
function createTheme() {
    let theme = $state('system');

    return {
        get theme() {
            return theme
        },
        setTheme: (value: string) => {
            theme = value
        }
    }
}

export const scheme = createTheme()