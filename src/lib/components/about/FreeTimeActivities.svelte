<script lang="ts">
	import Bike from '$lucide/bike.svelte';
	import Code2 from '$lucide/code-2.svelte';
	import Joystick from '$lucide/joystick.svelte';
	import Music from '$lucide/music.svelte';
</script>

<div class="mt-10">
	<h3 class="font-koulen text-2xl">I like</h3>

	<ul class="flex flex-wrap justify-around gap-5 p-5">
		<li class="flex items-center gap-3 bg-neutral-850 px-10 rounded-lg py-2 shadow-lg">
			<Code2 class="text-primary-500" />
			<span>Coding</span>
		</li>
		<li class="flex items-center gap-3 bg-neutral-850 px-10 rounded-lg py-2 shadow-lg">
			<Bike class="text-primary-500" />
			<span>Sports</span>
		</li>
		<li class="flex items-center gap-3 bg-neutral-850 px-10 rounded-lg py-2 shadow-lg">
			<Joystick class="text-primary-500" />
			<span>Gaming</span>
		</li>
		<li class="flex items-center gap-3 bg-neutral-850 px-10 rounded-lg py-2 shadow-lg">
			<Music class="text-primary-500" />
			<span>Music</span>
		</li>
	</ul>
</div>
