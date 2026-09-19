<script lang="ts">
	import { resolve } from '$app/paths';
	import { Tag, Card, Button, ArrowRightIcon } from '$lib';
</script>

<svelte:head>
	<title>Demos Overview — Portfolio v2</title>
</svelte:head>

<main class="mx-auto min-h-screen max-w-3xl space-y-8 bg-background p-6 text-text-primary sm:p-12">
	<div class="flex items-center gap-2">
		<Tag variant="accent">Demos & Test Suites</Tag>
		<Tag variant="highlight">feat/5-responsive-navbar</Tag>
	</div>

	<h1 class="font-sans text-3xl font-semibold tracking-tight text-text-primary">
		Available Demos & Component Showcases
	</h1>

	<div class="grid gap-4">
		<Card hoverable={true}>
			{#snippet header()}
				<span class="font-mono text-xs font-semibold text-text-primary">
					Design System & Reusable Components
				</span>
				<Tag variant="accent">Showcase</Tag>
			{/snippet}

			<div class="space-y-3">
				<p class="text-sm leading-relaxed text-text-secondary">
					Interactive preview and visual testing suite for all Deep Forest theme tokens (surfaces,
					typography, accents), Buttons, Cards, Status Indicators, Technical Chips, Key-Value Tiles,
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
				<span class="font-mono text-xs font-semibold text-text-primary">Full Portfolio Preview</span
				>
				<Tag variant="highlight">Layout Demo</Tag>
			{/snippet}

			<div class="space-y-3">
				<p class="text-sm leading-relaxed text-text-secondary">
					Preview of the full portfolio sections (Hero, Experience, Projects, Stack, Background,
					Contact) with Deep Forest theme and reusable components.
				</p>
				<Button href={resolve('/demo/portfolio')} variant="secondary" size="sm">
					<span>View Portfolio Preview</span>
					<ArrowRightIcon size={14} />
				</Button>
			</div>
		</Card>

		<Card hoverable={true}>
			{#snippet header()}
				<span class="font-mono text-xs font-semibold text-text-primary">Playwright E2E Demo</span>
				<Tag variant="default">Testing</Tag>
			{/snippet}

			<div class="space-y-3">
				<p class="text-sm leading-relaxed text-text-secondary">
					Baseline end-to-end testing route for automated browser assertions.
				</p>
				<Button href={resolve('/demo/playwright')} variant="outline" size="sm">
					<span>View Playwright Demo</span>
				</Button>
			</div>
		</Card>
	</div>
</main>
