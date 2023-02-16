<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

	const MENU = ['Why Foodeli?', 'Services', 'Menu', 'Contact'];
</script>

<nav class="container flex justify-between items-center">
	<div class="flex gap-4 items-center">
		<Logo className="w-6 h-6 md:w-11 md:h-11" />
		<h4 class="font-semibold text-lg md:text-2xl">Foodeli</h4>
	</div>

	<div class="hidden xl:block">
		<ul class="flex gap-7">
			{#each MENU as m, i}
				<li
					class={clsx('text-sm text-base-black-2 relative hover:text-red-primary cursor-pointer', {
						'!text-red-primary': i === 0
					})}
				>
					<div>
						{m}
					</div>
					{#if i === 0}
						<div
							class={clsx(
								'bg-red-primary w-[6px] h-[6px] rounded-full',
								'transform -translate-x-1/2 absolute left-1/2 top-full mt-2'
							)}
						/>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<button class="text-xl xl:hidden">
		<Icon icon="charm:menu-hamburger" />
	</button>

	<div class="xl:flex items-center gap-x-6 hidden">
		<button class="btn-hover">
			<Icon icon="akar-icons:search" class="text-2xl" />
		</button>
		<button class="relative h-min btn-hover">
			<Icon icon="akar-icons:shopping-bag" class="text-2xl" />
			<div
				class="text-[10px] px-1 font-bold rounded-full bg-red-primary text-white absolute -top-[6px] -right-[6px]"
			>
				5
			</div>
		</button>
		<button
			class={clsx(
				'flex items-center gap-2',
				'bg-red-primary text-white rounded-full px-6 py-3',
				'btn-hover'
			)}
		>
			<Icon icon="carbon:login" /> <span>Login</span>
		</button>
	</div>
</nav>
