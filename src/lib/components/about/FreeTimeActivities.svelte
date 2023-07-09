<script>
    import { Bike, Code2, Joystick, Music } from 'lucide-svelte';
</script>

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
