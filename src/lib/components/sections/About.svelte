<script lang='ts'>
    import { User, MapPin, Cpu, Globe, Code2, Bike, Joystick, Music } from 'lucide-svelte';
    import Avatar from '../about/Avatar.svelte';
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
            <div class='mt-5 bg-neutral-800 rounded-xl p-5'>
                <h3 class='font-koulen text-2xl'>Profile</h3>

                <ul class='flex flex-col gap-4 p-5'>
                    <li class='flex items-center gap-3'>
                        <User />
                        <span>Noah</span>
                    </li>
                    <li class='flex items-center gap-3'>
                        <MapPin />
                        <span>
                            <a href='https://en.wikipedia.org/wiki/Oberhausen'>Oberhausen</a>, Germany
                        </span>
                    </li>
                    <li class='flex items-center gap-3'>
                        <Cpu />
                        <span>
                            <a href='https://react.dev'>React</a>, <a href='https://svelte.dev'>Svelte</a>, <a
                            href='https://tailwindcss.com'>Tailwind</a>
                        </span>
                    </li>
                    <li class='flex items-center gap-3'>
                        <Globe />
                        <span>
                            <a href='https://typescriptlang.org'>TypeScript</a>, HTML, CSS
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <Avatar />
    </div>

    <div class='mt-10'>
        <h3 class='font-koulen text-2xl'>I like</h3>

        <ul class='flex flex-wrap justify-around gap-5 p-5'>
            <li class='flex items-center gap-3 bg-neutral-800 px-10 rounded-lg py-2'>
                <Code2 class='text-primary-500' />
                <span>Coding</span>
            </li>
            <li class='flex items-center gap-3 bg-neutral-800 px-10 rounded-lg py-2'>
                <Bike class='text-primary-500' />
                <span>Sports</span>
            </li>
            <li class='flex items-center gap-3 bg-neutral-800 px-10 rounded-lg py-2'>
                <Joystick class='text-primary-500' />
                <span>Gaming</span>
            </li>
            <li class='flex items-center gap-3 bg-neutral-800 px-10 rounded-lg py-2'>
                <Music class='text-primary-500' />
                <span>Music</span>
            </li>
        </ul>
    </div>
</section>
