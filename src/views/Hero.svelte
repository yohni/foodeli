<script lang="ts">
	import { fly } from 'svelte/transition';
	import clsx from 'clsx';
	import Icon from '@iconify/svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<header
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div class="container flex flex-col xl:flex-row gap-6">
			<div class="py-8">
				<button
					in:fly={{ y: 200, duration: 250 }}
					type="button"
					class={clsx(
						'py-3 px-5 mb-12 flex gap-4 items-center text-base',
						'bg-[#FEE9DE] text-red-primary rounded-full'
					)}
				>
					<span>More than Faster</span>
					<img src="Cherry.png" alt="Cherry" />
				</button>

				<h1
					in:fly={{ y: 200, duration: 250, delay: 100 }}
					class="text-6xl font-rubik text-base-black-1 mb-6"
				>
					Claim Best Offer on Fast <span class="text-7xl text-red-primary font-lobster2 italic"
						>Food</span
					>
					& <span class="text-7xl text-red-primary font-lobster2 italic">Restaurants</span>
				</h1>

				<p in:fly={{ y: 200, duration: 250, delay: 200 }} class="text-base-black-2 text-lg">
					Our job is to filling your tummy with delicious food and with fast and free delivery
				</p>

				<div in:fly={{ y: 200, duration: 250, delay: 300 }} class="mt-6 grid xl:grid-cols-2 gap-6">
					<button
						type="button"
						class={clsx(
							'bg-red-primary py-6 px-10 w-full text-white rounded-full text-lg',
							'btn-hover'
						)}
					>
						Get Started
					</button>
					<button type="button" class="flex gap-4 items-center justify-center group">
						<div
							class="bg-[#F2C94C] rounded-full w-12 h-12 flex justify-center items-center text-2xl group-hover:animate-pulse"
						>
							<Icon icon="material-symbols:play-arrow-rounded" />
						</div>
						<span class="text-lg text-base-black-2"> Watch Video </span>
					</button>
				</div>
			</div>
			<div>
				<img loading="lazy" src="Food1.webp" alt="Food illustrations" />
			</div>
		</div>
	{/if}
</header>
