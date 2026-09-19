<script lang="ts">
	import { SectionHeader } from '$lib';
	import StackCategories from './StackCategories.svelte';
	import StackYaml from './StackYaml.svelte';

	let activeView = $state<'yaml' | 'categories'>('yaml');
</script>

<section id="stack" class="w-full min-w-0 scroll-mt-24 space-y-6" aria-labelledby="stack-title">
	<!-- Section Header: Full-width matching Projects, Experience, About, and Background -->
	<SectionHeader
		title="Stack"
		description="Runtimes, database layers, cloud services, and engineering toolchains."
	/>

	<!-- Controls & Category Summary -->
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<!-- Recruiter-friendly category summary line per design.md -->
		<div class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-text-muted">
			<span class="text-[11px] font-semibold tracking-wider text-accent uppercase">Categories:</span
			>
			<span class="text-text-secondary">Backend</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Data</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Cloud</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Infrastructure</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Messaging</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Security</span>
			<span class="text-text-muted/60">·</span>
			<span class="text-text-secondary">Practices</span>
		</div>

		<!-- View Switcher (YAML vs Categorical) -->
		<div
			class="inline-flex shrink-0 items-center self-start rounded-[6px] border border-divider bg-surface-primary p-1 font-mono text-xs select-none sm:self-auto"
			role="tablist"
			aria-label="Stack view options"
		>
			<button
				type="button"
				role="tab"
				aria-selected={activeView === 'yaml'}
				onclick={() => (activeView = 'yaml')}
				class="rounded-[4px] px-3 py-1.5 transition-colors duration-150 {activeView === 'yaml'
					? 'bg-surface-elevated font-medium text-accent shadow-xs'
					: 'text-text-muted hover:text-text-primary'}"
			>
				stack.yaml
			</button>

			<button
				type="button"
				role="tab"
				aria-selected={activeView === 'categories'}
				onclick={() => (activeView = 'categories')}
				class="rounded-[4px] px-3 py-1.5 transition-colors duration-150 {activeView === 'categories'
					? 'bg-surface-elevated font-medium text-accent shadow-xs'
					: 'text-text-muted hover:text-text-primary'}"
			>
				Categories
			</button>
		</div>
	</div>

	<!-- Active View Container -->
	<div class="w-full min-w-0">
		{#if activeView === 'categories'}
			<StackCategories />
		{:else}
			<StackYaml />
		{/if}
	</div>
</section>
