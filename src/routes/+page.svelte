<script lang="ts">
	import Hero from '../views/Hero.svelte';
	import Menu from '../views/Menu.svelte';
	import Services from '../views/Services.svelte';
	import { API_KEY } from '../lib/Env';
	import Reviews from '../views/Reviews.svelte';
	import Banner from '../views/Banner.svelte';

	const spoonApiKey = API_KEY;
</script>

<div>
	<Hero />
	<Services />
	{#if spoonApiKey}
		<Menu {spoonApiKey} />
	{/if}
	<Reviews />
	<Banner />
</div>
