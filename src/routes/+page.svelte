<script>
    import Header from '$lib/components/layout/Header.svelte';
    import '../app.css';
</script>

<main>
    <!-- Hero Section -->
    <section class="hero-section min-h-screen">
        <Header />
    </section>
</main>

<style>
    .hero-section {
        background-image: radial-gradient(ellipse at center, #1b2735 0%, #202225 60%);
    }
</style>
