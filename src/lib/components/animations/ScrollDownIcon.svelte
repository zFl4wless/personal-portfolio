<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ChevronsDown from '$lucide/chevrons-down.svelte';

	let scrollDownIcon = false;
	onMount(() => {
		scrollDownIcon = window.scrollY <= 0;
		window.addEventListener('scroll', () => {
			scrollDownIcon = window.scrollY <= 0;
		});
	});
</script>

{#if scrollDownIcon}
	<button
		on:click={() => {
			document.getElementById('projects-section')?.scrollIntoView({
				behavior: 'smooth',
			});
		}}
		class="block scroll-down-icon absolute bottom-4 left-1/2 -translate-x-1/2"
		transition:fade={{ duration: 200 }}
	>
		<ChevronsDown size={32} class="text-neutral-200" />
	</button>
{/if}

<style>
	.scroll-down-icon {
		animation: scroll-down 2s infinite;
	}

	@keyframes scroll-down {
		20% {
			transform: translate(-50%, 0);
		}
		70% {
			transform: translate(-50%, 6px);
		}
		90% {
			transform: translate(-50%, 0);
		}
		100% {
			transform: translate(-50%, 0);
		}
	}
</style>
