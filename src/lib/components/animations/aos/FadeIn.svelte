<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;

	const changeHandler = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div use:inview={{ unobserveOnEnter: true }} on:inview_change={changeHandler}>
	{#if isInView}
		<div in:fade>
			<slot />
		</div>
	{/if}
</div>
