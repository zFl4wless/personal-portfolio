<script>
    import TagCloud from 'TagCloud';
    import { onMount } from 'svelte';
    import Stars from '../animations/Stars.svelte';
    import Header from '../layout/Header.svelte';
    import ScrollDownIcon from '../animations/ScrollDownIcon.svelte';

    const tagCloudOptions = {
        radius: 320,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
        useContainerInlineStyles: true,
        useItemInlineStyles: true,
    };

    onMount(() => {
        TagCloud(
            '.tag-cloud',
            [
                'TypeScript',
                'Figma',
                'JavaScript',
                'TailwindCSS',
                'ReactJS',
                'PostgreSQL',
                'CSS',
                'HTML',
                'MySQL',
                'Git',
            ],
            tagCloudOptions,
        );
    });
</script>

<section class="relative bg-neutral-900 bg-[url('/img/Background.png')] bg-center bg-no-repeat bg-cover grid grid-rows-[min-content_auto] min-h-screen px-6 overflow-hidden">
    <Stars />

    <Header />

    <div class='flex flex-col xl:flex-row items-center justify-center gap-14 2xl:gap-24'>
        <div>
            <h1 class='text-7xl font-bold text-center xl:text-left tracking-wide'>
                Hi, I'm
                <mark
                    class='relative z-[1] before:content-[" "] before:z-[-1] before:block before:absolute before:inset-0 before:top-1/2 before:bg-primary-500 before:bg-opacity-20 before:scale-x-0 before:origin-bottom-right before:transition-transform before:ease-in-out before:hover:scale-x-100 before:hover:origin-bottom-left'>
                    Noah
                </mark>
                !
            </h1>

            <hr
                class="border-none mx-auto xl:mx-0 relative my-10 w-60 h-6 before:content-[''] before:block before:absolute before:w-40 before:h-1.5 before:bg-primary-400 before:rounded-full after:content-[''] after:block after:absolute after:w-40 after:h-1.5 after:bg-primary-400 after:rounded-full after:bottom-0 after:right-0"
            />

            <p
                class="text-2xl text-center xl:text-left before:animate-pulse before:content-['['] before:mr-2 before:text-3xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-2 after:text-3xl after:text-primary-500"
            >
                student / developer
            </p>
        </div>

        <div class='hidden xl:block tag-cloud'></div>
    </div>

    <ScrollDownIcon />
</section>
