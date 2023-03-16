<script>
    import { Calendar } from 'lucide-svelte';

    const projectsData = [
        {
            title: 'Hondicard',
            description:
                'A collaborative learning plattform. If you are a fan of a card-based learning system, Hondicard is perfectly made for you. You can also share your cards with your friends.',
            date: 'Aug 2022',
            tags: ['TypeScript', 'ReactJS', 'TailwindCSS', 'Metahond'],
            link: 'https://hondicard.metahond.codes',
            image: '/img/projects/hondicard.png',
        },
        {
            title: 'R6 Cards',
            description:
                'A showcase project that lists all operators with further information from the game Rainbow Six Siege. I thought it would be a fun thing to do.',
            date: 'Feb 2023',
            tags: ['TypeScript', 'Svelte', 'TailwindCSS', 'Rainbow Six Siege', 'Fun'],
            link: 'https://r6-cards.vercel.app/',
            image: '/img/projects/r6-cards.png',
        },
    ];
</script>

<section class="min-h-screen px-60 py-16">
    <h2 class="text-center text-4xl font-bold tracking-wide mb-20">Projects</h2>

    <div class="flex flex-col gap-20">
        {#each projectsData as project}
            <div class="grid grid-cols-2 gap-20">
                <div>
                    <p class="text-2xl font-semibold mb-2">{project.title}</p>
                    <span class="inline-flex items-center gap-2 text-xs font-semibold bg-neutral-700 rounded-md px-3 py-1.5 mb-6">
                        <Calendar size={14} />
                        {project.date}</span
                    >
                    <p class="mb-4">{project.description}</p>
                    <ul class="flex flex-wrap gap-2">
                        {#each project.tags as tag}
                            <li
                                class="flex-grow bg-neutral-700 text-xs font-semibold text-center uppercase rounded-md py-1.5"
                            >
                                {tag}
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <img src={project.image} alt={project.title} />
                </div>
            </div>
        {/each}
    </div>
</section>
