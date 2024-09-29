export const menuDefault = `
import { Menu } from 'kampsy-ui';

<div class="w-full">
    <Menu.Root>
    	<Menu.Button>Actions</Menu.Button>
    	<Menu.Content class="w-[200px]">
    		<Menu.Item onClick={() => console.log('One')}>One</Menu.Item>
			<Menu.Item onClick={() => console.log('Two')}>Two</Menu.Item>
            <Menu.Item onClick={() => console.log('Three')}>One</Menu.Item>
            <Menu.Item onClick={() => console.log('Delete')} type="error">Delete</Menu.Item>
    	</Menu.Content>
    </Menu.Root>
</div>`;

export const menuLinkItem = `
import { Menu } from 'kampsy-ui';

<div class="w-full">
    <Menu.Root>
    	<Menu.Button>Actions</Menu.Button>
    	<Menu.Content class="w-[200px]">
    		<Menu.Link href="/menu">One</Menu.Link>
            <Menu.Link href="#/">Two</Menu.Link>
            <Menu.Link href="#/">One</Menu.Link>
    	</Menu.Content>
    </Menu.Root>
</div>`;

export const menuPrefixAndSuffix = `
import { Menu } from 'kampsy-ui';
import { MoreHorizontal,Accessibility } from 'kampsy-ui/icons';

<div class="w-full flex gap-6">
	<Menu.Root>
		<Menu.Button aria-label="Menu" shape="square" size="small" type="secondary">
			<div class="w-[16px] h-[16px]">
				<MoreHorizontal />
			</div>
		</Menu.Button>
		<Menu.Content class="w-[200px]">
			<Menu.Item prefix={Accessibility}>Left</Menu.Item>
			<Menu.Item prefix={Accessibility}>Center</Menu.Item>
			<Menu.Item prefix={Accessibility}>Right</Menu.Item>
		</Menu.Content>
	</Menu.Root>
	<Menu.Root>
		<Menu.Button aria-label="Menu" shape="square" size="small" type="secondary">
			<div class="w-[16px] h-[16px]">
				<MoreHorizontal />
			</div>
		</Menu.Button>
		<Menu.Content class="w-[200px]">
			<Menu.Item suffix={Accessibility}>Left</Menu.Item>
			<Menu.Item suffix={Accessibility}>Center</Menu.Item>
			<Menu.Item suffix={Accessibility}>Right</Menu.Item>
		</Menu.Content>
	</Menu.Root>
</div>`;

export const menuAlignment = `
import { Menu } from 'kampsy-ui';
import { MoreHorizontal,Accessibility } from 'kampsy-ui/icons';

<div class="w-full flex justify-between gap-8">
	<Menu.Root>
		<Menu.Button>Actions</Menu.Button>
		<Menu.Content class="w-[200px]">
			<Menu.Item prefix={Accessibility}>Left</Menu.Item>
			<Menu.Item prefix={Accessibility}>Center</Menu.Item>
			<Menu.Item prefix={Accessibility}>Right</Menu.Item>
		</Menu.Content>
	</Menu.Root>
	<Menu.Root alignment="right">
		<Menu.Button>Actions</Menu.Button>
		<Menu.Content class="w-[200px]">
			<Menu.Item suffix={Accessibility}>Left</Menu.Item>
			<Menu.Item suffix={Accessibility}>Center</Menu.Item>
			<Menu.Item suffix={Accessibility}>Right</Menu.Item>
		</Menu.Content>
	</Menu.Root>
</div>`;