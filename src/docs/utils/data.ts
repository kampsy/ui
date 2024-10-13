import type { AsideT } from '../../docs/ui/types.ts';

export const asideData: Array<AsideT> = [
    {
        title: {
            name: 'foundations',
        },
        ul: [
            {
                name: 'introduction',
                url: '/',
            },
            {
                name: 'installation',
                url: '/installation'
            },
            {
                name: 'colors',
                url: '/colors'
            }
        ]

    },
    {
        title: {
            name: 'components',
            badge: {
                name: 'alpha',
                variant: 'amber'
            }
        },
        ul: [
            {
                name: 'avatar',
                url: '/avatar',
            },
            {
                name: 'badge',
                url: '/badge'

            },
            {
                name: 'button',
                url: '/button'
            },
            {
                name: 'calendar',
                url: '/calendar',
                badge: {
                    name: 'updated',
                    variant: 'purple'
                }
            },
            {
                name: 'choicebox',
                url: '/choicebox'
            }, 
            {
                name: 'collapse',
                url: '/collapse'
            },
            {
                name: 'description',
                url: '/description'
            },
            {
                name: 'error',
                url: '/error'
            },
            {
                name: 'input',
                url: '/input',
                badge: {
                    name: 'updated',
                    variant: 'purple'
                }
            },
            {
                name: 'menu',
                url: '/menu',
            },
            {
                name: 'modal',
                url: '/modal',
                badge: {
                    name: 'new',
                    variant: 'green'
                }
            },
            {
                name: 'note',
                url: '/note'
            },
            {
                name: 'pagination',
                url: '/pagination'
            }, {
                name: 'progress',
                url: '/progress'
            },
            {
                name: 'project banner',
                url: '/project-banner',

            },
            {
                name: 'select',
                url: '/select'
            },
            {
                name: 'spinner',
                url: '/spinner'
            },
            {
                name: 'split button',
                url: '/split-button'
            },
            {
                name: 'status dot',
                url: '/status-dot'
            },
            {
                name: 'switch',
                url: '/switch'
            },
            {
                name: 'table',
                url: '/table'
            },
            {
                name: 'tabs',
                url: '/tabs'
            },
            {
                name: 'text',
                url: '/text',
                badge: {
                    name: 'new',
                    variant: 'green'
                }
            },
            {
                name: 'textarea',
                url: '/textarea',
                badge: {
                    name: 'updated',
                    variant: 'purple'
                }
            },
            {
                name: 'theme switcher',
                url: '/theme-switcher'
            },
            {
                name: 'toggle',
                url: '/toggle'
            },
            {
                name: 'tooltip',
                url: '/tooltip'
            }
        ]

    }
]