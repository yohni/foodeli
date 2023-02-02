<script lang="ts">
	export let imgSrc: string;
	export let title: string;
	export let description: string;
</script>

<div class="py-4 flex flex-col items-center gap-y-3">
	<img class="w-4/5 mx-auto" src={imgSrc} loading="lazy" alt={title} />
	<h3 class="font-bold text-3xl">
		{title}
	</h3>
	<p class="text-lg text-center">{description}</p>
</div>
