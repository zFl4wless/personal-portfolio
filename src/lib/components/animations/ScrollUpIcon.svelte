<script lang='ts'>
    import { ChevronsUp } from 'lucide-svelte';
</script>

<button
    on:click={() => {
            document.getElementById('hero-section')?.scrollIntoView({
                behavior: 'smooth',
            });
        }}
    class='scroll-up-icon flex flex-col items-center'
>
    <ChevronsUp size={32} class='text-neutral-200' />
    <span class='text-sm text-neutral-200 tracking-wide'>Scroll up</span>
</button>

<style>
    .scroll-up-icon {
        animation: scroll-up 2s infinite;
    }

    @keyframes scroll-up {
        20% {
            transform: translateY(0);
        }
        70% {
            transform: translateY(-6px);
        }
        90% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
