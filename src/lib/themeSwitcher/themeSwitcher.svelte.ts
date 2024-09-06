

/**
 * Creates a theme manager that returns an object with a getter and
 * setter for the theme state.
 *
 * The theme state is stored in the global state with the key 'system'.
 *
 * @returns An object with 'theme' property and 'setTheme' method.
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

export const switcher = createTheme()