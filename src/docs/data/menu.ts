export const menuDefault = `
import { Menu } from 'kampsy-ui';

<div class="w-full">
    <Menu.Root>
    	<Menu.Button>Actions</Menu.Button>
    	<Menu.Content class="w-[200px]">
    		<Menu.Item 
                onClick={() => {
                    console.log('One');
                }}>One
            </Menu.Item>
    		<Menu.Item
    			onClick={() => {
    				console.log('Two');
    			}}>Two
            </Menu.Item>
            <Menu.Item 
                onClick={() => {
                    console.log('Three');
                }}>One
            </Menu.Item>
    		<Menu.Item
    			onClick={() => {
    				console.log('Delete');
    			}}>Two
            </Menu.Item>
    	</Menu.Content>
    </Menu.Root>
</div>`;