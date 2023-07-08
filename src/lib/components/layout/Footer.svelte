<script lang='ts'>
    const messages = [
        'Developed with ☕ and a sprinkle of magic.',
        'Made with love, caffeine, and a little bit of code.',
        'Proudly crafted by a sleep-deprived developer.',
        'Best viewed on a Friday with a cup of hot chocolate.',
        'No developers were harmed in the making of this website.',
        'Powered by sheer determination and copious amounts of pizza.',
    ];
</script>

<footer class='flex justify-between px-8 py-4 text-base'>
    <span class='text-neutral-300'>
        {messages[Math.floor(Math.random() * messages.length)]}
    </span>
    <a class='transition ease-in-out text-neutral-300 hover:brightness-125' href='/legal'>Legal Notice</a>
</footer>
