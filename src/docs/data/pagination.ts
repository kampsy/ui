export const paginationDefault = `
<script lang="ts">
	import { Pagination } from 'kampsy-ui';

	const prev = {
	  title: 'Home',
	  href: '#',
	};
 
	const next = {
	  title: 'Introduction',
	  href: '#',
	};
</script>

<Pagination previous={prev} {next} />`;