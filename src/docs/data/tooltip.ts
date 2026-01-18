export const toolTipDefault = `
import { Tooltip } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="top">
            <span>Top</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="bottom">
            <span>Bottom</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="right">
            <span>Right</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="left">
            <span>Left</span>
        </Tooltip>
	</div>
</div>`;

export const toolTipCustomType = `
import { Tooltip } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="top" type="success">
            <span>Top</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="bottom" type="error">
            <span>Bottom</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="right" type="warning">
            <span>Right</span>
        </Tooltip>
	</div>
    <div>
		<Tooltip text="The Evil Rabbit Jumped over the Fence" position="left" type="violet">
            <span>Left</span>
        </Tooltip>
	</div>
</div>`;

export const tooltipComponents = `
import { Tooltip } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
  <div>
	  <Tooltip position="bottom" text="The Evil Rabbit Jumped over the Fence">
      <Button size="small">Bottom</Button>
    </Tooltip>
  </div>

  <div>
	  <Tooltip position="right" text="The Evil Rabbit Jumped over the Fence">
      <Spinner />
    </Tooltip>
  </div>

  <div>
	  <Tooltip position="left" text="The Evil Rabbit Jumped over the Fence">
      <Badge size="sm">LEFT</Badge>
    </Tooltip>
  </div>
</div>`;