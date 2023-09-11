<script lang="ts">
  export let href: string;
</script>

<a href={href}
   class="no-underline overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-primary-600 active:shadow-none shadow-lg bg-gradient-to-tr from-primary-600 to-primary-500 border-primary-700 text-white">
  <span
    class="absolute w-0 h-0 transition-all duration-300 ease-out bg-neutral-100 rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
  <span class="relative flex items-center gap-1.5">
    <slot />
  </span>
</a>