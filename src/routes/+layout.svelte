<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Navbar } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-background text-text-primary">
	<Navbar />
	<div class="flex flex-1 flex-col pt-16">
		{@render children()}
	</div>
</div>
