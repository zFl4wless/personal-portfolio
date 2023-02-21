<script>
    import Header from '$lib/components/layout/Header.svelte';
    import '../app.css';
    import TagCloud from 'TagCloud';
    import { onMount } from 'svelte';
    import ShootingStar from '$lib/components/animations/ShootingStar.svelte';

    onMount(() =>
        TagCloud(
            // @ts-ignore-next-line
            '.tag-cloud',
            ['TypeScript', 'Figma', 'JavaScript', 'TailwindCSS', 'ReactJS', 'PostgreSQL', 'CSS', 'HTML', 'MySQL'],
            {
                radius: 320,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                direction: 135,
                keep: true,
                useContainerInlineStyles: true,
                useItemInlineStyles: true,
            },
        ),
    );
</script>

<main>
    <!-- Hero Section -->
    <section class="hero-section bg-[url('background.png')] bg-center bg-no-repeat grid min-h-screen px-6">
        <!-- Shooting Stars -->
        <ShootingStar />
        <ShootingStar />
        <ShootingStar />

        <!-- Header -->
        <Header />

        <!-- Hero Section Content -->
        <div class="flex flex-col xl:flex-row items-center justify-center gap-14">
            <div>
                <h1 class="text-7xl font-bold text-center xl:text-left">
                    Hi, I'm <span class="text-primary-500">Noah</span>!
                </h1>
                <div
                    class="mx-auto xl:mx-0 relative my-10 w-60 h-6 before:content-[''] before:block before:absolute before:w-40 before:h-1.5 before:bg-primary-400 before:rounded-full after:content-[''] after:block after:absolute after:w-40 after:h-1.5 after:bg-primary-400 after:rounded-full after:bottom-0 after:right-0"
                />
                <p
                    class="text-2xl text-center xl:text-left before:animate-pulse before:content-['['] before:mr-2 before:text-3xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-2 after:text-3xl after:text-primary-500"
                >
                    student / developer
                </p>
            </div>
            <div class="hidden xl:block tag-cloud" />
        </div>

        <!-- TODO: Mouse Scroll Icon -->
    </section>
</main>

<style>
    .hero-section {
        grid-template-rows: min-content auto;
    }
</style>
