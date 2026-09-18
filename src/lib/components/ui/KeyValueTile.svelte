<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		value?: string;
		subtext?: string;
		class?: string;
		children?: Snippet;
	}

	let { label, value, subtext, class: className = '', children }: Props = $props();
</script>

<div
	class="flex flex-col justify-between gap-1 rounded-lg border border-border-subtle bg-surface-lowest p-4 shadow-card transition-shadow duration-150 {className}"
>
	<span class="font-mono text-[11px] font-medium tracking-[0.02em] text-text-subtle uppercase">
		{label}
	</span>

	<div class="font-sans text-[15px] font-semibold text-text-strong tabular-nums">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</div>

	{#if subtext}
		<span class="text-[12px] text-text-muted tabular-nums">
			{subtext}
		</span>
	{/if}
</div>
