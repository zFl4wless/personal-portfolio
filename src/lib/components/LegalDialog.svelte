<script lang='ts'>
    import { onMount } from 'svelte';

    export let dialog;

    onMount(() => {
        dialog.addEventListener('click', () => {
            dialog.close();
        });

        document.getElementById('legalNoticeDialog').addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
</script>

<dialog class='bg-transparent rounded-xl p-0' bind:this={dialog} on:close>
    <div id='legalNoticeDialog' class='relative bg-neutral-700 text-neutral-100 rounded-xl p-10'>
        <h1 class='font-koulen text-3xl'>Legal Notice</h1>

        <h4 class='text-xl font-medium mt-3 mb-1'>INFORMATION PURSUANT TO SECT. 5 GERMAN TELEMEDIA ACT (TMG)</h4>

        <p>
            Noah Bauditz
            <br>
            Untere Walsumermarkstr. 23
            <br>
            46147 Oberhausen
        </p>

        <h4 class='text-xl font-medium mt-3 mb-1'>Contact</h4>

        <p>E-Mail: development@fl4wless.de</p>

        <p class='my-4'>Source: <a href='https://www.e-recht24.de/impressum-generator.html'>e-recht24</a></p>

        <p class='absolute bottom-4 right-6 text-sm italic'>Close with <kbd>Esc</kbd> or click outside.</p>
    </div>
</dialog>
