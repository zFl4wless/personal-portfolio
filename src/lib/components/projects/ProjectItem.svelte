<script lang="ts">
  import Calendar from "$lucide/calendar.svelte";
  import Radio from "$lucide/radio.svelte";
  import Code from "$lucide/code.svelte";
  import PrimaryLinkButton from "$lib/components/buttons/PrimaryLinkButton.svelte";
  import NeutralLinkButton from "$lib/components/buttons/NeutralLinkButton.svelte";

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
        <NeutralLinkButton href={project.visitLink}>
          <Radio size={20} />
          Live
        </NeutralLinkButton>
      {/if}
      {#if project.codeLink}
        <PrimaryLinkButton href={project.codeLink}>
          <Code size={20} />
          Code
        </PrimaryLinkButton>
      {/if}
    </div>
  </div>

  <div class="grid place-items-center w-[30rem] p-5 mx-auto">
    <img src={project.image} alt={project.title} />
  </div>
</div>
