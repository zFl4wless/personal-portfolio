<script lang="ts">
	import Calendar from '$lucide/calendar.svelte';
	import Radio from '$lucide/radio.svelte';
	import Code from '$lucide/code.svelte';

	export let project: {
		title: string;
		date: string;
		tags: string[];
		visitLink?: string;
		codeLink?: string;
		image: string;
	};
	export let index: number;
</script>

<div class="border-4 border-neutral-850 rounded-xl grid grid-cols-1 lg:grid-cols-[auto_auto] items-center lg:20">
	<div class="bg-neutral-850 p-10 {index % 2 !== 0 ? 'order-1' : 'order-2 lg:order-none'}">
		<p class="text-2xl font-semibold mb-2">{project.title}</p>

		<span class="inline-flex items-center gap-2 text-xs bg-neutral-700 rounded-md px-3 py-1.5 mb-6">
			<Calendar size={14} />
			{project.date}
		</span>

		<p class="text-justify mb-4">
			<slot />
		</p>

		<ul class="flex flex-wrap gap-1.5">
			{#each project.tags as tag}
				<li class="flex-grow bg-neutral-700 text-xs text-center uppercase rounded-md px-8 py-1.5">
					{tag}
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2 mt-10">
			{#if project.visitLink}
				<a
					href={project.visitLink}
					target="_blank"
					class="flex items-center text-base text-neutral-100 no-underline gap-1.5 bg-primary-500 px-4 py-2 rounded-md hover:brightness-110 transition ease-in-out"
				>
					<Radio size={20} />
					Live
				</a>
			{/if}
			{#if project.codeLink}
				<a
					href={project.codeLink}
					target="_blank"
					class="flex items-center text-base text-neutral-100 no-underline gap-1.5 bg-neutral-500 px-4 py-2 rounded-md hover:brightness-110 transition ease-in-out"
				>
					<Code size={20} />
					Code
				</a>
			{/if}
		</div>
	</div>

	<div class="grid place-items-center w-[30rem] p-5 mx-auto">
		<img src={project.image} alt={project.title} />
	</div>
</div>
