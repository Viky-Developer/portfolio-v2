<script lang="ts">
	import { Hero, About, Tag } from '$lib';

	const remainingSections = [
		{
			id: 'experience',
			title: 'Experience Section',
			desc: 'Career history and engineering impact (upcoming issue).'
		},
		{
			id: 'projects',
			title: 'Projects Section',
			desc: 'Distributed systems repositories and architecture (upcoming issue).'
		},
		{
			id: 'stack',
			title: 'Stack Section',
			desc: 'stack.yaml technical runtimes and infrastructure (upcoming issue).'
		},
		{
			id: 'background',
			title: 'Background Section',
			desc: 'Academic foundation and certifications (upcoming issue).'
		},
		{
			id: 'contact',
			title: 'Contact Section',
			desc: 'Terminal-styled contact interface (upcoming issue).'
		}
	];
</script>

<svelte:head>
	<title>Vignesh S — Backend Software Engineer</title>
</svelte:head>

<main class="mx-auto max-w-5xl space-y-12 px-4 py-6 sm:px-8 sm:py-10">
	<!-- Section 01: Hero / Engineering Workspace -->
	<Hero />

	<!-- Section 02: About / README.md -->
	<About />

	<!-- Remaining Sections Anchor Targets (for navbar scrollspy & upcoming features) -->
	<section class="space-y-6 pt-4">
		<div class="border-b border-divider pb-2">
			<span class="font-mono text-xs font-semibold tracking-wider text-text-muted uppercase">
				Upcoming Portfolio Sections
			</span>
		</div>

		<div class="space-y-4">
			{#each remainingSections as section (section.id)}
				<div
					id={section.id}
					class="scroll-mt-24 space-y-2 rounded-[6px] border border-border bg-surface-primary/40 p-6 transition-colors duration-150 hover:bg-surface-primary/70"
				>
					<div class="flex items-center justify-between">
						<span class="font-mono text-xs text-accent">#{section.id}</span>
						<Tag variant="default" size="sm">upcoming section</Tag>
					</div>
					<h2 class="font-sans text-base font-semibold text-text-primary">
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
