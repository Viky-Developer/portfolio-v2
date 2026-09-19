<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title?: string;
		headerRight?: Snippet;
		footer?: Snippet;
		children?: Snippet;
		class?: string;
	}

	let {
		title,
		headerRight,
		footer,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div
	class="flex flex-col overflow-hidden rounded-[6px] border border-border bg-canvas-secondary font-mono text-[12px] text-text-code shadow-card sm:text-[13px] {className}"
	{...restProps}
>
	<!-- Terminal Header / Titlebar -->
	<div
		class="flex items-center justify-between gap-3 border-b border-divider bg-surface-primary px-4 py-2.5 select-none"
	>
		<div class="flex items-center gap-2">
			<!-- Window dots -->
			<div class="flex items-center gap-1.5" aria-hidden="true">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#c98373]/80"></span>
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#a3907c]/80"></span>
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#78c990]/80"></span>
			</div>

			{#if title}
				<span class="ml-2 truncate text-[11px] font-medium text-text-muted sm:text-[12px]">
					{title}
				</span>
			{/if}
		</div>

		{#if headerRight}
			<div class="flex items-center gap-2">
				{@render headerRight()}
			</div>
		{/if}
	</div>

	<!-- Scrollable content area -->
	<div class="code-scroll flex-1 overflow-x-auto p-4">
		{#if children}
			{@render children()}
		{/if}
	</div>

	<!-- Optional footer -->
	{#if footer}
		<div
			class="flex flex-wrap items-center justify-between gap-4 border-t border-divider bg-surface-primary px-4 py-2 text-[11px] text-text-muted select-none"
		>
			{@render footer()}
		</div>
	{/if}
</div>
