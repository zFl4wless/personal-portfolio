<script>
    import Header from '$lib/components/layout/Header.svelte';
    import '../app.css';
    import TagCloud from 'TagCloud';
    import { onMount } from 'svelte';

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
    <section class="hero-section grid min-h-screen">
        <!-- Header -->
        <Header />

        <!-- Hero Section Content -->
        <div class="flex items-center justify-center gap-36">
            <div>
                <h1 class="text-7xl font-bold">Hi, I'm <span class="text-primary-500">Noah</span>!</h1>
                <div
                    class="relative my-8 w-60 h-6 before:content-[''] before:block before:absolute before:w-40 before:h-1.5 before:bg-primary-400 before:rounded-full after:content-[''] after:block after:absolute after:w-40 after:h-1.5 after:bg-primary-400 after:rounded-full after:bottom-0 after:right-0"
                />
                <p
                    class="text-2xl before:animate-pulse before:content-['['] before:mr-2 before:text-3xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-2 after:text-3xl after:text-primary-500"
                >
                    student / developer
                </p>
            </div>
            <div class="tag-cloud" />
        </div>

        <!-- TODO: Mouse Scroll Icon -->
    </section>
</main>

<style>
    .hero-section {
        background-image: radial-gradient(ellipse at center, #273041 0%, #202225 65%);
        grid-template-rows: min-content auto;
    }
</style>
