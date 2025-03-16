import type { AsideT } from '../../docs/ui/types.ts';

export const asideData: Array<AsideT> = [
	{
		title: {
			name: 'foundations'
		},
		ul: [
			{
				name: 'introduction',
				url: '/'
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
			name: 'resources'
		},
		ul: [
			{
				name: 'changelog',
				url: '/changelog',
				badge: {
					name: 'new',
					variant: 'green'
				}
			}
		]
	},
	{
		title: {
			name: 'components'
		},
		ul: [
			{
				name: 'avatar',
				url: '/avatar'
			},
			{
				name: 'badge',
				url: '/badge',
				badge: {
					name: 'updated',
					variant: 'purple'
				}
			},
			{
				name: 'button',
				url: '/button',
				badge: {
					name: 'updated',
					variant: 'purple'
				}
			},
			{
				name: 'calendar',
				url: '/calendar'
			},
			{
				name: 'checkbox',
				url: '/checkbox'
			},
			{
				name: 'choicebox',
				url: '/choicebox'
			},
			{
				name: 'collapse',
				url: '/collapse',
				badge: {
					name: 'updated',
					variant: 'purple'
				}
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
				url: '/input'
			},
			{
				name: 'menu',
				url: '/menu',
				badge: {
					name: 'updated',
					variant: 'amber'
				}
			},
			{
				name: 'modal',
				url: '/modal'
			},
			{
				name: 'note',
				url: '/note'
			},
			{
				name: 'pagination',
				url: '/pagination'
			},
			{
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
				name: 'show more',
				url: '/show-more'
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
				url: '/text'
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
				name: 'toggle',
				url: '/toggle'
			},
			{
				name: 'tooltip',
				url: '/tooltip'
			}
		]
	}
];
