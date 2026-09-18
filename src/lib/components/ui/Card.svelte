<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		header?: Snippet;
		children?: Snippet;
		hoverable?: boolean;
		padding?: 'none' | 'compact' | 'normal';
		class?: string;
	}

	let {
		header,
		children,
		hoverable = false,
		padding = 'normal',
		class: className = '',
		...restProps
	}: Props = $props();

	const paddingClasses = {
		none: '',
		compact: 'p-4',
		normal: 'p-6'
	};
</script>

<div
	class="overflow-hidden rounded-lg border border-border-subtle bg-surface-lowest shadow-card transition-shadow duration-150 {hoverable
		? 'hover:shadow-card-hover'
		: ''} {className}"
	{...restProps}
>
	{#if header}
		<div
			class="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface-low px-4 py-3 sm:px-6"
		>
			{@render header()}
		</div>
	{/if}

	<div class={paddingClasses[padding]}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
