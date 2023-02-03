<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';
	import Logo from '../components/Logo.svelte';

	const FOOTERS = [
		{
			title: 'About',
			items: ['About Us', 'Features', 'News', 'Menu']
		},
		{
			title: 'Company',
			items: ['Why Foodeli?', 'Partner With Us', 'FAQ', 'Blog']
		},
		{
			title: 'Support',
			items: ['Account', 'Support Center', 'Feedback', 'Contact Us', 'Accessibilty']
		},
		{
			title: 'Get in Touch',
			items: ['Question or feedback?', "We'd love to hear from you"]
		}
	];
</script>

<footer class="container flex flex-col gap-8">
	<div class="flex flex-col gap-y-8">
		<div class="flex gap-4 items-center">
			<Logo className="w-6 h-6" />
			<h4 class="font-semibold text-lg md:text-2xl">Foodeli</h4>
		</div>
		<p class="text-base text-base-black-2">
			Our job is to filling your tummy with delicious food and with fast and free delivery.
		</p>
		<div class="flex gap-10 text-red-primary text-2xl">
			<a href="/">
				<Icon icon="bxl:instagram-alt" />
			</a>
			<a href="/">
				<Icon icon="bxl:facebook-square" />
			</a>
			<a href="/">
				<Icon icon="bxl:twitter" />
			</a>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-8">
		{#each FOOTERS as { title, items }, i}
			<div>
				<h6 class="font-rubik font-semibold text-xl mb-6">{title}</h6>
				<ul class="gap-y-4 flex flex-col">
					{#each items as item}
						<li class="text-base">{item}</li>
					{/each}
				</ul>
				{#if i === FOOTERS.length - 1}
					<button
						type="button"
						class={clsx(
							'text-base font-normal py-3 px-5 flex items-center gap-5',
							'border-[#BDBDBD] border border-solid rounded-full mt-6'
						)}
					>
						<span class="">Email Us</span>
						<Icon icon="carbon:send" class="text-red-primary text-xl" />
					</button>
				{/if}
			</div>
		{/each}
	</div>
</footer>

<div class="w-full text-sm text-slate-400 text-center py-4">
	2023 &bull; Built with all <span class="text-red-primary">&hearts;</span> I have.
</div>
