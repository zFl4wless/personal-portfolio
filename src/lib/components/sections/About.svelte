<script lang='ts'>
    import Avatar from '../about/Avatar.svelte';
    import Profile from '../about/Profile.svelte';
    import FreeTimeActivities from '../about/FreeTimeActivities.svelte';
</script>

<section id='projects-section' class='min-h-screen flex flex-col justify-center px-6 xl:px-20 2xl:px-60 py-10'>
    <h2
        class="mb-16 text-4xl font-koulen font-bold text-center tracking-wide before:animate-pulse before:content-['[']  before:mr-3 before:text-4xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-3 after:text-4xl after:text-primary-500"
    >
        Who am I
    </h2>

    <div class='grid lg:grid-cols-[auto_auto] justify-center items-center gap-20'>
        <div>
            <p class='text-justify'>
                As a developer, my coding journey began in
                <mark>April 2020</mark>
                . Since then, I have diligently acquired
                proficiency in
                <mark>various programming languages and frameworks</mark>
                , empowering me to transform my creative
                concepts into tangible realities.
            </p>

            <Profile />
        </div>

        <div class='hidden lg:block'>
            <Avatar />
        </div>
    </div>

    <FreeTimeActivities />
</section>
