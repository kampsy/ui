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