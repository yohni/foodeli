<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;

	export let spoonApiKey: string;

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
			`https://api.spoonacular.com/recipes/complexSearch?query=asian&maxFat=25&number=5&apiKey=${spoonApiKey}`
		);
		mealsData = await res.json();
	});
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="container py-10 xl:py-16"
>
	{#if isInView}
		<h6
			in:fly={{ y: 200, duration: 250 }}
			class="text-center text-red-primary font-semibold text-lg mb-4"
		>
			OUR MENU
		</h6>
		<h1
			in:fly={{ y: 200, duration: 300, delay: 200 }}
			class="font-rubik font-bold text-5xl text-center mb-6 xl:mb-10"
		>
			Menu That Always Makes You Fall In Love
		</h1>

		<div in:fade={{ duration: 400, delay: 300 }}>
			<Splide
				options={{
					gap: '1rem',
					autoplay: true,
					perPage: 4,
					heightRatio: 1.2,
					breakpoints: {
						1400: {
							perPage: 2
						},
						1021: {
							perPage: 1
						},
						400: {
							perPage: 1
						}
					}
				}}
				aria-label="My Favorite Images"
			>
				{#if mealsData?.results?.length > 0}
					{#each mealsData.results as p, i}
						<SplideSlide class=" max-h-[450px]">
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
									<span class="text-2xl text-[#F2C94C]">
										$<b class="text-4xl text-white">{(i * 2 + Math.random()).toFixed(2)}</b></span
									>

									<button
										type="button"
										class="w-min flex whitespace-nowrap items-center gap-2 text-lg"
									>
										Order Now <Icon icon="fe:arrow-right" /></button
									>
								</div>
							</div>
						</SplideSlide>
					{/each}
				{/if}
			</Splide>
		</div>
	{/if}
</div>
