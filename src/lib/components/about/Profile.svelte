<script>
	import Cpu from '$lucide/cpu.svelte';
	import Globe from '$lucide/globe.svelte';
	import MapPin from '$lucide/map-pin.svelte';
	import User from '$lucide/user.svelte';
</script>

<div class="mt-5 bg-neutral-850 rounded-xl shadow-lg p-5">
	<h3 class="font-koulen text-2xl">Profile</h3>

	<ul class="flex flex-col gap-4 p-5">
		<li class="flex items-center gap-3">
			<abbr title="Name" class="cursor-help">
				<User />
			</abbr>
			<span>Noah</span>
		</li>
		<li class="flex items-center gap-3">
			<abbr title="Location" class="cursor-help">
				<MapPin />
			</abbr>
			<span>
				<a href="https://en.wikipedia.org/wiki/Oberhausen">Oberhausen</a>, Germany
			</span>
		</li>
		<li class="flex items-center gap-3">
			<abbr title="Currently favorite Frameworks" class="cursor-help">
				<Cpu />
			</abbr>
			<span>
				<a href="https://react.dev">React</a>, <a href="https://svelte.dev">Svelte</a>,
				<a href="https://tailwindcss.com">Tailwind</a>
			</span>
		</li>
		<li class="flex items-center gap-3">
			<abbr title="Currently favorite Languages" class="cursor-help">
				<Globe />
			</abbr>
			<span>
				<a href="https://typescriptlang.org">TypeScript</a>, HTML, CSS
			</span>
		</li>
	</ul>
</div>
