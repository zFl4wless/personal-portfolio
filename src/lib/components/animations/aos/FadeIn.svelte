<script lang='ts'>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
</script>

<div
    use:inview={{unobserveOnEnter: true}}
    on:change={({detail}) => {
        isInView = detail.inView;
    }}
>
    {#if isInView}
        <div in:fade>
            <slot />
        </div>
    {/if}
</div>
