<script lang='ts'>
    import Avatar from '../about/Avatar.svelte';
    import Profile from '../about/Profile.svelte';
    import FreeTimeActivities from '../about/FreeTimeActivities.svelte';
</script>

<section id='projects-section'
         class='min-h-screen flex flex-col justify-center px-6 xl:px-20 2xl:px-60 py-10 max-w-8xl mx-auto'>
    <h2
        class="mb-16 text-4xl font-koulen font-bold text-center tracking-wide before:animate-pulse before:content-['[']  before:mr-3 before:text-4xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-3 after:text-4xl after:text-primary-500"
    >
        Personal Overview
    </h2>

    <div class='grid lg:grid-cols-[auto_auto] justify-center items-center gap-20'>
        <div>
            <p class='text-justify'>
                I started my coding journey
                <mark>in April 2020</mark>
                and it has been an amazing experience for me. Since then, I worked hard on becoming skilled in
                different
                <mark>programming languages</mark>
                and frameworks. It's been really exciting to see how I can turn my
                <mark>creative ideas</mark>
                into
                <mark>real things</mark>
                through coding. The feeling of bringing my ideas to life by writing code is empowering. This journey has
                been a lot of fun, and I'm still passionate about
                <mark>learning and growing</mark>
                as a developer.
            </p>

            <Profile />
        </div>

        <div class='hidden lg:block'>
            <Avatar />
        </div>
    </div>

    <FreeTimeActivities />
</section>
