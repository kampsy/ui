

export type AsideT = {
    title: {
        name: string,
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
    }
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

export type VariantOption =
    | 'copy-13'
    | 'copy-14'
    | 'copy-16'
    | 'copy-18'
    | 'copy-20'
    | 'copy-24'
    | 'label-12'
    | 'label-13'
    | 'label-14'
    | 'label-16'
    | 'label-18'
    | 'label-20'
    | 'button-12'
    | 'button-14'
    | 'button-16'
    | 'heading-16'
    | 'heading-20'
    | 'heading-24'
    | 'heading-32'
    | 'heading-40'
    | 'heading-48'
    | 'heading-56'
    | 'heading-64'
    | 'heading-72';