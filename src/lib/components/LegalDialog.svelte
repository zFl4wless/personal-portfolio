<script lang='ts'>
    export let dialog;
</script>

<dialog class='bg-neutral-700 text-neutral-100 rounded-xl' bind:this={dialog} on:close>
    <div class='p-5'>
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

        <p class='mt-4'>Source: <a href='https://www.e-recht24.de/impressum-generator.html'>e-recht24</a></p>
    </div>
</dialog>
