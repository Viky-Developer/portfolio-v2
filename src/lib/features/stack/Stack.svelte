<script lang="ts">
	import { SectionHeader } from '$lib';
	import StackCategories from './StackCategories.svelte';
	import StackYaml from './StackYaml.svelte';

	let activeView = $state<'categories' | 'yaml'>('categories');
</script>

<section id="stack" class="scroll-mt-24 space-y-8" aria-labelledby="stack-title">
	<!-- Section Header: Clean title matching Option B -->
	<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
		<SectionHeader
			title="Stack"
			description="Runtimes, database layers, cloud services, and engineering toolchains."
			class="flex-1"
		/>

		<!-- View Switcher (Categorical vs YAML) -->
		<div
			class="inline-flex shrink-0 items-center rounded-[6px] border border-divider bg-surface-primary p-1 font-mono text-xs select-none"
			role="tablist"
			aria-label="Stack view options"
		>
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
		</div>
	</div>

	<!-- Active View Container -->
	<div>
		{#if activeView === 'categories'}
			<StackCategories />
		{:else}
			<StackYaml />
		{/if}
	</div>
</section>
