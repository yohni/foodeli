<script lang="ts">
	import Hero from '../views/Hero.svelte';
	import Menu from '../views/Menu.svelte';
	import Services from '../views/Services.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
	const { spoonApiKey } = data;
</script>

<div>
	<Hero />
	<Services />
	<Menu {spoonApiKey} />
</div>
