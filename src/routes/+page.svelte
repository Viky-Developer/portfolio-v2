<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Tag, ArrowRightIcon } from '$lib';

	const testSections = [
		{
			id: 'about',
			title: 'About Section',
			desc: 'Target anchor for the About navigation link.'
		},
		{
			id: 'experience',
			title: 'Experience Section',
			desc: 'Target anchor for the Experience navigation link.'
		},
		{
			id: 'projects',
			title: 'Projects Section',
			desc: 'Target anchor for the Projects navigation link.'
		},
		{
			id: 'stack',
			title: 'Stack Section',
			desc: 'Target anchor for the Stack navigation link.'
		},
		{
			id: 'background',
			title: 'Background Section',
			desc: 'Target anchor for the Background navigation link.'
		},
		{
			id: 'contact',
			title: 'Contact Section',
			desc: 'Target anchor for the Contact navigation link.'
		}
	];
</script>

<svelte:head>
	<title>Portfolio v2 — Responsive Navigation Bar (Issue #5)</title>
</svelte:head>

<main class="mx-auto max-w-5xl space-y-16 px-4 py-12 sm:px-8">
	<!-- Branch Overview & Testing Controls -->
	<section
		class="space-y-6 rounded-[6px] border border-border bg-surface-primary p-8 text-center sm:p-12"
	>
		<div class="flex items-center justify-center gap-2">
			<Tag variant="accent">Issue #5</Tag>
			<Tag variant="highlight">feat/5-responsive-navbar</Tag>
		</div>

		<div class="space-y-3">
			<h1 class="font-sans text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
				Responsive Navigation Bar
			</h1>
			<p
				class="mx-auto max-w-xl font-sans text-sm leading-relaxed text-text-secondary sm:text-base"
			>
				This branch implements the responsive navigation bar (<code
					class="font-mono text-xs text-accent">VIGNESH.DEV</code
				>), mobile drawer with backdrop blur, active section scrollspy indicator, and clean
				text-based labels.
			</p>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-3 pt-2">
			<Button href={resolve('/demo/components')} variant="primary" size="md">
				<span>Components Showcase</span>
				<ArrowRightIcon size={14} />
			</Button>
			<Button href={resolve('/demo/portfolio')} variant="secondary" size="md">
				<span>Full Portfolio Layout Demo</span>
				<ArrowRightIcon size={14} />
			</Button>
			<Button href={resolve('/demo')} variant="outline" size="md">
				<span>All Demos</span>
			</Button>
		</div>
	</section>

	<!-- Navbar Anchor Targets (for scrollspy and navigation link testing) -->
	<section class="space-y-8">
		<div class="border-b border-divider pb-2">
			<span class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
				Navigation Anchor Test Zones
			</span>
		</div>

		<div class="space-y-6">
			{#each testSections as section (section.id)}
				<div
					id={section.id}
					class="scroll-mt-24 space-y-2 rounded-[6px] border border-border bg-surface-primary/60 p-6 transition-colors duration-150"
				>
					<div class="flex items-center justify-between">
						<span class="font-mono text-xs text-accent">#{section.id}</span>
						<Tag variant="default" size="sm">target anchor</Tag>
					</div>
					<h2 class="font-sans text-lg font-semibold text-text-primary">
						{section.title}
					</h2>
					<p class="text-sm text-text-secondary">
						{section.desc}
					</p>
				</div>
			{/each}
		</div>
	</section>
</main>
