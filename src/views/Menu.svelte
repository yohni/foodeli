<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import { PUBLIC_API_KEY } from '$env/static/public';
	import Icon from '@iconify/svelte';

	interface Product {
		id: number;
		image: string;
		imageType: string;
		title: string;
	}

	interface MealData {
		results: Product[];
	}

	let mealsData: MealData = { results: [] };

	onMount(async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=asian&maxFat=25&number=10&apiKey=${PUBLIC_API_KEY}`
		);
		mealsData = await res.json();
	});
</script>

<div class="container py-10">
	<h6 class="text-center text-red-primary font-semibold text-lg mb-4">OUR MENU</h6>
	<h1 class="font-rubik font-bold text-5xl text-center mb-6">
		Menu That Always Makes You Fall In Love
	</h1>

	<Splide
		options={{
			gap: '1rem',
			autoplay: true,
			perPage: 1,
			heightRatio: 1.2
		}}
		aria-label="My Favorite Images"
	>
		{#if mealsData?.results?.length > 0}
			{#each mealsData.results as p, i}
				<SplideSlide>
					<div class="h-full overflow-hidden rounded-[30px] relative">
						<img
							class="w-full h-full object-cover object-center"
							src={p.image}
							loading="lazy"
							alt="p.title"
						/>
						<div
							class="absolute inset-0 text-white bg-warp flex flex-col justify-end py-10 px-6 gap-4"
						>
							<h5 class="text-3xl">{p.title}</h5>
							<span class="text-2xl text-[#F2C94C]"
								>$<b class="text-4xl text-white">{(i * 2 + Math.random()).toFixed(2)}</b></span
							>

							<button type="button" class="w-min flex whitespace-nowrap items-center gap-2 text-lg"
								>Order Now <Icon icon="fe:arrow-right" /></button
							>
						</div>
					</div>
				</SplideSlide>
			{/each}
		{/if}
	</Splide>
</div>
