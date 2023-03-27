<script lang="ts">
    import { Calendar, Radio, Code } from 'lucide-svelte';

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

<div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:20">
    <div class={index % 2 !== 0 ? 'order-1' : 'order-2 lg:order-none'}>
        <p class="text-2xl font-semibold mb-2">{project.title}</p>
        <span class="inline-flex items-center gap-2 text-xs bg-neutral-700 rounded-md px-3 py-1.5 mb-6">
            <Calendar size={14} />
            {project.date}
        </span>
        <p class="mb-4"><slot /></p>
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
                    class="flex items-center gap-1.5 bg-primary-500 px-4 py-2 rounded-md hover:brightness-110 transition ease-in-out"
                >
                    <Radio size={20} />
                    Live Version
                </a>
            {/if}
            {#if project.codeLink}
                <a
                    href={project.codeLink}
                    target="_blank"
                    class="flex items-center gap-1.5 bg-neutral-500 px-4 py-2 rounded-md hover:brightness-110 transition ease-in-out"
                >
                    <Code size={20} />
                    Code
                </a>
            {/if}
        </div>
    </div>
    <div class="flex justify-center items-center max-w-2xl mx-auto">
        <img src={project.image} alt={project.title} />
    </div>
</div>
