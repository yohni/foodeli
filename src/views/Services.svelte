<script lang="ts">
	import ServiceCard from '../components/ServiceCard.svelte';
	import { fly, scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="container py-10  xl:py-16"
>
	{#if isInView}
		<h6
			in:fly={{ y: 200, duration: 250, delay: 200 }}
			class="text-center text-red-primary font-semibold text-lg mb-4"
		>
			WHAT WE SERVE
		</h6>
		<h1
			in:fly={{ y: 200, duration: 300, delay: 200 }}
			class="font-rubik font-bold text-5xl text-center mb-6"
		>
			Your Favourite Food Delivery Partner
		</h1>
		<div class="xl:grid grid-cols-3 gap-x-6">
			<div in:scale={{ duration: 400, delay: 300 }}>
				<ServiceCard
					imgSrc="Order.webp"
					title="Easy To Order"
					description="You only need a few steps in ordering food"
				/>
			</div>
			<div in:scale={{ duration: 500, delay: 300 }}>
				<ServiceCard
					imgSrc="TakeAway.webp"
					title="Fastest Delivery"
					description="Delivery that is always ontime even faster"
				/>
			</div>
			<div in:scale={{ duration: 600, delay: 300 }}>
				<ServiceCard
					imgSrc="Waiters.webp"
					title="Best Quality"
					description="Not only fast for us quality is also number one"
				/>
			</div>
		</div>
	{/if}
</div>
