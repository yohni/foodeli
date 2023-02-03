<script lang="ts">
	import ServiceCard from '../components/ServiceCard.svelte';
</script>

<div class="container py-10">
	<h6 class="text-center text-red-primary font-semibold text-lg mb-4">WHAT WE SERVE</h6>
	<h1 class="font-rubik font-bold text-5xl text-center mb-6">
		Your Favourite Food Delivery Partner
	</h1>
	<div>
		<ServiceCard
			imgSrc="Order.webp"
			title="Easy To Order"
			description="You only need a few steps in ordering food"
		/>
		<ServiceCard
			imgSrc="TakeAway.webp"
			title="Fastest Delivery"
			description="Delivery that is always ontime even faster"
		/>
		<ServiceCard
			imgSrc="Waiters.webp"
			title="Best Quality"
			description="Not only fast for us quality is also number one"
		/>
	</div>
</div>
