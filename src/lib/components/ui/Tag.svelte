<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TagSize, TagVariant } from '$lib/types/theme';

	interface Props {
		variant?: TagVariant;
		size?: TagSize;
		class?: string;
		children?: Snippet;
	}

	let { variant = 'default', size = 'sm', class: className = '', children }: Props = $props();

	const variantClasses: Record<TagVariant, string> = {
		default: 'bg-surface-elevated text-text-secondary border border-border',
		highlight: 'bg-surface-primary text-accent border border-accent/40 font-medium',
		get: 'bg-surface-elevated text-text-code border border-border font-medium',
		post: 'bg-surface-elevated text-status-success border border-status-success/40 font-medium',
		accent: 'bg-surface-elevated text-accent border border-accent/40 font-medium'
	};

	const sizeClasses: Record<TagSize, string> = {
		sm: 'px-2 py-0.5 text-[11px] leading-[16px] tracking-[0.02em]',
		md: 'px-2.5 py-1 text-[13px] leading-[20px]'
	};
</script>

<span
	class="inline-flex items-center rounded-sm font-mono select-none {variantClasses[
		variant
	]} {sizeClasses[size]} {className}"
>
	{#if children}
		{@render children()}
	{/if}
</span>
