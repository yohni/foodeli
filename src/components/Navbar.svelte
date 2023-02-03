<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from '@iconify/svelte';
</script>

<nav class="container flex justify-between">
	<div class="flex gap-4 items-center">
		<Logo className="w-6 h-6" />
		<h4 class="font-semibold text-lg md:text-2xl">Foodeli</h4>
	</div>

	<button class="text-xl">
		<Icon icon="charm:menu-hamburger" />
	</button>
</nav>
