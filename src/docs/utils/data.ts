import type { AsideT } from '../../docs/ui/types.ts';

export const asideData: Array<AsideT> = [
    {
        title: {
            name:'foundations',
        },
        ul: [
            {
                name: 'introduction',
                url: '/',
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
                url: '/avatar'
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
                url: '/calendar'
            },
            {
                name: 'choicebox',
                url: '/choicebox'
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
                name: 'note',
                url: '/note'
            },
            {
                name: 'pagination',
                url: '/pagination'
            },{
                name: 'progress',
                url: '/progress'
            },
            {
                name: 'project banner',
                url: '/project-banner'
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
                url: '/tabs',
                badge: {
                    name: 'new',
                    variant: 'green'
                }
            },
            {
                name: 'textarea',
                url: '/textarea'
            },
            {
                name: 'theme switcher',
                url: '/theme-switcher'
            },
            {
                name: 'tooltip',
                url: '/tooltip'
            }
        ]

    }
]