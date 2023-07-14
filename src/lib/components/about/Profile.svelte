<script>
    import { Cpu, Globe, MapPin, User } from 'lucide-svelte';
</script>

<div class='mt-5 bg-neutral-800 rounded-xl shadow-lg p-5'>
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
