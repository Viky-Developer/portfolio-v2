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
	class="flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-code-surface font-mono text-[12px] text-on-dark shadow-card sm:text-[13px] {className}"
	{...restProps}
>
	<!-- Terminal Header / Titlebar -->
	<div
		class="flex items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-900/90 px-4 py-2.5 select-none"
	>
		<div class="flex items-center gap-2">
			<!-- Window dots -->
			<div class="flex items-center gap-1.5" aria-hidden="true">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#ef4444]/90"></span>
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#f59e0b]/90"></span>
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[#10b981]/90"></span>
			</div>

			{#if title}
				<span class="ml-2 truncate text-[11px] font-medium text-neutral-400 sm:text-[12px]">
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
			class="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-[11px] text-neutral-400 select-none"
		>
			{@render footer()}
		</div>
	{/if}
</div>
