<script lang='ts'>
    import LegalDialog from '../LegalDialog.svelte';

    const coolMessage = [
        'Developed with ☕ and a sprinkle of magic.',
        'Made with love, caffeine, and a little bit of code.',
        'Proudly crafted by a sleep-deprived developer.',
        'Best viewed on a Friday with a cup of hot chocolate.',
        'No developers were harmed in the making of this website.',
        'Powered by sheer determination and copious amounts of pizza.',
    ][Math.floor(Math.random() * 6)];

    let dialog;
</script>

<footer class='flex justify-between px-6 py-4 text-base'>
    <span class='text-neutral-300'>
        {coolMessage}
    </span>

    <button class='transition ease-in-out text-neutral-300 hover:brightness-125' on:click={() => dialog.showModal()}>
        Legal Notice
    </button>


    <LegalDialog bind:dialog />
</footer>
