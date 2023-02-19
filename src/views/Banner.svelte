<script lang="ts">
	import { scale } from 'svelte/transition';
	import clsx from 'clsx';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="container py-10 xl:py-16"
>
	{#if isInView}
		<div
			in:scale={{ duration: 250 }}
			class="bg-[#FFDDCC]/[25%] rounded-[30px] flex flex-col xl:flex-row"
		>
			<div class="p-6 xl:p-10 place-items-center">
				<h6 class="text-red-primary font-semibold text-lg mb-4">DOWNLOAD APP</h6>
				<h1 class="font-rubik font-bold text-5xl mb-6">Get Started With Fudo Today!</h1>
				<p class="text-xl text-base-black-2 mb-6">
					Discover food wherever and whenever and get your food delivered quickly.
				</p>
				<button
					class={clsx(
						'bg-red-primary w-full text-white rounded-full py-5 px-10 text-lg xl:w-min whitespace-nowrap',
						'btn-hover'
					)}
				>
					Get The App
				</button>
			</div>
			<div class="px-6 pt-8">
				<img src="Prototype.svg" alt="" />
			</div>
		</div>
	{/if}
</div>
