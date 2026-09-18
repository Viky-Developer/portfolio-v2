<script lang="ts">
	import { resolve } from '$app/paths';
	import { StatusBadge, Tag, Card, Button, ArrowRightIcon } from '$lib';
</script>

<svelte:head>
	<title>Demos Overview — Portfolio v2</title>
</svelte:head>

<main class="mx-auto min-h-screen max-w-3xl space-y-6 bg-background p-6 text-text-primary sm:p-12">
	<div class="flex items-center gap-2">
		<StatusBadge status="healthy" label="feat/3-theme-and-reusable-components" />
	</div>

	<h1 class="font-sans text-3xl font-semibold text-text-strong">Available Demos & Showcases</h1>

	<div class="grid gap-4">
		<Card hoverable={true}>
			{#snippet header()}
				<span class="font-mono text-xs font-semibold text-text-strong"
					>Design System & Reusable Components</span
				>
				<Tag variant="accent">Showcase</Tag>
			{/snippet}

			<div class="space-y-3">
				<p class="text-sm text-text-muted">
					Interactive preview of all theme color tokens (surfaces, text shades, status indicators),
					typography, accessible Buttons, Cards, StatusBadges, Tags, SectionHeaders, KeyValueTiles,
					CodePanels, and SVG icons.
				</p>
				<Button href={resolve('/demo/components')} variant="primary" size="sm">
					<span>View Components Showcase</span>
					<ArrowRightIcon size={14} />
				</Button>
			</div>
		</Card>

		<Card hoverable={true}>
			{#snippet header()}
				<span class="font-mono text-xs font-semibold text-text-strong">Playwright E2E Demo</span>
				<Tag variant="default">Testing</Tag>
			{/snippet}

			<div class="space-y-3">
				<p class="text-sm text-text-muted">
					Baseline end-to-end testing route for automated browser assertions.
				</p>
				<Button href={resolve('/demo/playwright')} variant="outline" size="sm">
					<span>View Playwright Demo</span>
				</Button>
			</div>
		</Card>
	</div>
</main>
