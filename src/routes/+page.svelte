<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, StatusBadge, Tag, ArrowRightIcon } from '$lib';
</script>

<svelte:head>
	<title>Portfolio v2 — Theme & Reusable Components</title>
</svelte:head>

<main
	class="flex min-h-screen flex-col items-center justify-center space-y-6 bg-background p-6 text-center text-text-primary"
>
	<div class="flex items-center gap-2">
		<StatusBadge
			status="healthy"
			label="Branch: feat/3-theme-and-reusable-components"
			pulse={true}
		/>
		<Tag variant="accent">In Review</Tag>
	</div>

	<h1
		class="max-w-2xl font-sans text-4xl font-semibold tracking-tight text-text-strong sm:text-5xl"
	>
		Theme Colors & Reusable Components
	</h1>

	<p class="max-w-xl text-base text-text-muted">
		The design tokens, color surfaces, and atomic reusable components are ready for inspection and
		testing.
	</p>

	<div class="flex flex-wrap items-center justify-center gap-4 pt-2">
		<Button href={resolve('/demo/components')} variant="primary" size="lg">
			<span>Open Components Showcase</span>
			<ArrowRightIcon size={16} />
		</Button>
		<Button href={resolve('/demo')} variant="secondary" size="lg">
			<span>Explore All Demos</span>
		</Button>
	</div>
</main>
