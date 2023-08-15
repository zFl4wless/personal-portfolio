<script lang="ts">
	import { onMount } from 'svelte';

	let boxShadows = '';
	function calculateBoxShadows() {
		for (let i = 2; i < 120; i++) {
			const boxShadow = `${Math.round(Math.random() * window.innerWidth)}px ${Math.round(Math.random() * 2000)}px #FFF`;
			if (boxShadows.length > 0) {
				boxShadows += `, ${boxShadow}`;
			} else {
				boxShadows += `${boxShadow}`;
			}
		}
	}

	onMount(() => {
		calculateBoxShadows();

		let windowWidth = window.innerWidth;
		window.addEventListener('resize', () => {
			if (windowWidth === window.innerWidth) {
				return;
			}
			windowWidth = window.innerWidth;

			boxShadows = '';
			calculateBoxShadows();
		});
	});
</script>

<div class="stars" style="--box-shadows: {boxShadows}" />

<style>
	.stars {
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: var(--box-shadows);
		animation: move-stars 50s linear infinite;
	}
	.stars::after {
		content: '';
		position: absolute;
		top: 2000px;
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: var(--box-shadows);
	}
	@keyframes move-stars {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-2000px);
		}
	}
</style>
