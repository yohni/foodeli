<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	let isInViewImage: boolean;
</script>

<div
	class="container py-10 xl:py-16 flex flex-col xl:flex-row-reverse xl:items-center xl:gap-10 xl:justify-between w-full gap-6"
>
	<div
		class="xl:text-left"
		use:inview={{ unobserveOnEnter: true }}
		on:change={({ detail }) => {
			isInView = detail.inView;
		}}
	>
		{#if isInView}
			<h6 in:fly class="text-center xl:text-left text-red-primary font-semibold text-lg mb-4">
				WHAT THEY SAY
			</h6>
			<h1
				in:fly={{ y: 200, duration: 200, delay: 300 }}
				class="font-rubik font-bold text-5xl text-center xl:text-left mb-6"
			>
				What Our Customers Say About Us
			</h1>
			<p in:fly={{ y: 200, duration: 200, delay: 350 }} class="text-xl text-base-black-2 mb-8">
				“Fudo is the best. Besides the many and delicious meals, the service is also very good,
				especially in the very fast delivey. I highly recommend Fudo to you”.
			</p>
			<div in:fly={{ y: 200, duration: 200, delay: 400 }}>
				<div class="flex items-center gap-3">
					<img class="rounded-full" src="https://i.pravatar.cc/64" alt="avatar" />
					<div>
						<h6 class="leading-7 text-xl">Theresa Jordan</h6>
						<span class="leading-7 text-base text-base-black-3">Food Enthusiast</span>
					</div>
				</div>

				<div class="flex items-center gap-2 mt-6">
					{#each [...Array(5).keys()] as key}
						{#if key === 4}
							<Icon icon="bx:star" class="text-yellow-primary text-xl" />
						{:else}
							<Icon class="text-yellow-primary  text-xl" icon="ic:sharp-star-purple500" />
						{/if}
					{/each}
					<span class="text-base ml-1">4.8</span>
				</div>
			</div>
		{/if}
	</div>

	<div
		use:inview={{ unobserveOnEnter: true }}
		on:change={({ detail }) => {
			isInViewImage = detail.inView;
		}}
		class="relative my-10"
	>
		{#if isInViewImage}
			<div
				in:fly={{ y: 200, duration: 600, delay: 200 }}
				class={clsx(
					'w-4 h-4 bg-yellow-primary rounded absolute top-[12%] left-[30%]',
					'animate-spin-slow'
				)}
			/>
			<div
				in:fly={{ y: 200, duration: 700, delay: 200 }}
				class={clsx('w-2 h-2 bg-yellow-primary rounded-full absolute bottom-[25%] left-0')}
			/>
			<div
				in:fly={{ y: 200, duration: 500, delay: 200 }}
				class={clsx(
					'w-3 h-3 bg-red-primary rounded absolute top-[30%] right-0',
					'animate-spin-slow'
				)}
			/>
			<img in:fly={{ y: 200, duration: 200 }} src="Cheff.webp" alt="cheff" />
			<img
				in:fly={{ y: 200, duration: 300, delay: 200 }}
				class={clsx('max-w-[30%]', 'absolute top-[5%] right-[5%]')}
				src="Leafs.webp"
				alt="leafs"
			/>
			<img
				in:fly={{ y: 200, duration: 350, delay: 200 }}
				class={clsx('max-w-[20%]', 'absolute top-[15%] left-[5%]')}
				src="Onion.webp"
				alt="Onion"
			/>
			<img
				in:fly={{ y: 200, duration: 400, delay: 200 }}
				class={clsx('max-w-[25%]', 'absolute top-[38%] left-[2%]')}
				src="Popcorn.webp"
				alt="Popcorn"
			/>
			<img
				in:fly={{ y: 200, duration: 250, delay: 200 }}
				class={clsx(
					'max-w-[265px] shadow-[0px_4px_100px_rgba(0,0,0,0.1)] rounded-[20px]',
					'absolute bottom-0 right-0 translate-y-1/2 transform',
					'w-[50%]'
				)}
				src="OurReviews.webp"
				alt="reviewBox"
			/>
		{/if}
	</div>
</div>
