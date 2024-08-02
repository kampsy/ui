export const tableDefault = `
import { Table } from 'kampsy-ui';

<div class="w-full">
    <Table.Root>
		<Table.Header>
            <Table.Row>
        	    <Table.Head>Col 1</Table.Head>
        	    <Table.Head>Col 2</Table.Head>
        	    <Table.Head>Col 3</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Value 1.1</Table.Cell>
                <Table.Cell>Value 1.2</Table.Cell>
                <Table.Cell>Value 1.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 2.1</Table.Cell>
                <Table.Cell>Value 2.2</Table.Cell>
                <Table.Cell>Value 2.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 3.1</Table.Cell>
                <Table.Cell>Value 3.2</Table.Cell>
                <Table.Cell>Value 3.3</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>
</div>`;

export const tableStriped = `
import { Table } from 'kampsy-ui';

<div class="w-full">
    <Table.Root>
		<Table.Header>
            <Table.Row>
        	    <Table.Head>Col 1</Table.Head>
        	    <Table.Head>Col 2</Table.Head>
        	    <Table.Head>Col 3</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body striped>
            <Table.Row>
                <Table.Cell>Value 1.1</Table.Cell>
                <Table.Cell>Value 1.2</Table.Cell>
                <Table.Cell>Value 1.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 2.1</Table.Cell>
                <Table.Cell>Value 2.2</Table.Cell>
                <Table.Cell>Value 2.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 3.1</Table.Cell>
                <Table.Cell>Value 3.2</Table.Cell>
                <Table.Cell>Value 3.3</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>
</div>`;

export const tableInteractive = `
import { Table } from 'kampsy-ui';

<div class="w-full">
    <Table.Root>
		<Table.Header>
            <Table.Row>
        	    <Table.Head>Col 1</Table.Head>
        	    <Table.Head>Col 2</Table.Head>
        	    <Table.Head>Col 3</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body interactive>
            <Table.Row>
                <Table.Cell>Value 1.1</Table.Cell>
                <Table.Cell>Value 1.2</Table.Cell>
                <Table.Cell>Value 1.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 2.1</Table.Cell>
                <Table.Cell>Value 2.2</Table.Cell>
                <Table.Cell>Value 2.3</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Value 3.1</Table.Cell>
                <Table.Cell>Value 3.2</Table.Cell>
                <Table.Cell>Value 3.3</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>
</div>`;

export const tableFull = `
import { Table } from 'kampsy-ui';

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	maximumFractionDigits: 2,
	currency: 'usd'
});

function formatCurrency(amount: number): string {
	return formatter.format(amount);
}

const items = [
    {
    	product: 'Brake Pads Set',
    	usage: '100 sets',
    	price: '$50 per set',
    	charge: 5000
    },
    {
    	product: 'Oil Filters',
    	usage: '200 filters',
    	price: '$10 per filter',
    	charge: 2000
    },
    {
    	product: 'Car Batteries',
    	usage: '50 batteries',
    	price: '$100 per battery',
    	charge: 5000
    },
    {
    	product: 'Headlight Bulbs',
    	usage: '300 bulbs',
    	price: '$15 per bulb',
    	charge: 4500
    },
    {
    	product: 'Windshield Wipers',
    	usage: '250 pairs',
    	price: '$20 per pair',
    	charge: 5000
    },
    {
    	product: 'Spark Plugs',
    	usage: '500 sets',
    	price: '$5 per set',
    	charge: 2500
    }
];

<div class="w-full">
    <Table.Root>
        <Table.Colgroup>
            <Table.Col class="w-[44%]" />
            <Table.Col class="w-[22%]" />
            <Table.Col class="w-[22%]" />
            <Table.Col class="w-[11%]" />
        </Table.Colgroup>
        <Table.Header>
            <Table.Row>
                <Table.Head>Product</Table.Head>
                <Table.Head>Usage</Table.Head>
                <Table.Head>Price</Table.Head>
                <Table.Head>Charge</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body interactive striped>
            {#each items as item}
                <Table.Row key={item.product}>
                    <Table.Cell>{item.product}</Table.Cell>
                    <Table.Cell>{item.usage}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>{formatCurrency(item.charge)}</Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
        <Table.Footer>
            <Table.Row>
                <Table.Cell class="text-gray-1000 font-medium">Subtotal</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell class="text-gray-1000 font-medium">
                    {formatCurrency(items.reduce((sum, val) => sum + val.charge, 0))}
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    </Table.Root>
</div>`;