<script lang='ts'>
    import './app.css';
    import Hero from './lib/components/sections/Hero.svelte';
    import About from './lib/components/sections/About.svelte';
    import Projects from './lib/components/sections/Projects.svelte';
    import Footer from './lib/components/layout/Footer.svelte';
    import ScrollUpIcon from './lib/components/animations/ScrollUpIcon.svelte';
</script>

<main>
    <Hero />

    <About />

    <Projects />

    <div class='flex justify-center my-6'>
        <ScrollUpIcon />
    </div>

    <Footer />
</main>
