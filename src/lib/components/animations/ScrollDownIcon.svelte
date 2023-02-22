<div
    class="scroll-down-icon absolute bottom-4 left-1/2 -translate-x-1/2 w-5 h-10 outline outline-neutral-500 rounded-xl before:content-[''] before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-3 before:bg-neutral-500 before:rounded-full"
/>

<style>
    .scroll-down-icon::before {
        animation: scroll-down 2s infinite;
    }
    @keyframes scroll-down {
        20% {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        70% {
            transform: translate(-50%, 6px);
            opacity: 0;
        }
        90% {
            opacity: 0;
            transform: translate(-50%, 0);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
</style>
