export const toastDefault = `
<script lang="ts">
	import { Toaster, toast } from 'kampsy-ui';
</script>

<Toaster position="bottom-right" />

<button onclick={() => toast('The Evil Rabbit jumped over the fence.')}>
	Give me a toast
</button>`

export const toastPositioning = `
import { Toaster } from 'kampsy-ui';

<!-- Available positions: top-left, top-center, top-right,
bottom-left, bottom-center, bottom-right -->
<Toaster position="top-center" />`

export const toastMultiLine = `
toast(
	'The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence.'
);`

export const toastPreserve = `
toast('The Evil Rabbit jumped over the fence.', {
	preserve: true
});`

export const toastAction = `
toast('The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence again.', {
	action: 'Undo',
	onAction: () => console.log('undone')
});`

export const toastUndo = `
toast('The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence again.', {
	onUndoAction: () => console.log('undone')
});`

export const toastSuccess = `
toast.success('The Evil Rabbit jumped over the fence.');`

export const toastWarning = `
toast.warning('The Evil Rabbit jumped over the fence.');`

export const toastError = `
toast.error('The Evil Rabbit jumped over the fence.');`
