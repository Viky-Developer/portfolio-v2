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
		default: 'bg-surface-container text-text-muted border border-transparent',
		highlight: 'bg-code-surface text-on-dark border border-neutral-800 font-medium',
		get: 'bg-blue-50 text-blue-700 border border-blue-200/60 font-semibold',
		post: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold',
		accent: 'bg-sky-50 text-accent border border-sky-200/60 font-medium'
	};

	const sizeClasses: Record<TagSize, string> = {
		sm: 'px-2 py-0.5 text-[11px] leading-[16px] tracking-[0.02em]',
		md: 'px-2.5 py-1 text-[13px] leading-[20px]'
	};
</script>

<span
	class="inline-flex items-center rounded-[4px] font-mono select-none {variantClasses[
		variant
	]} {sizeClasses[size]} {className}"
>
	{#if children}
		{@render children()}
	{/if}
</span>
