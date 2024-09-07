export type AsideT = {
    title: string
    ul: Array<{
        name: string
        url: string
        badge?: {
            name: string
            variant: 'gray'
            | 'gray-subtle'
            | 'blue'
            | 'blue-subtle'
            | 'purple'
            | 'purple-subtle'
            | 'amber'
            | 'amber-subtle'
            | 'red'
            | 'red-subtle'
            | 'pink'
            | 'pink-subtle'
            | 'green'
            | 'green-subtle'
            | 'teal'
            | 'teal-subtle'
            | 'inverted'
        } | undefined
    }>
}