<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { StatusType } from '$lib/types/theme';

	interface Props {
		status?: StatusType;
		label?: string;
		pulse?: boolean;
		size?: 'sm' | 'md';
		class?: string;
		children?: Snippet;
	}

	let {
		status = 'healthy',
		label,
		pulse = false,
		size = 'md',
		class: className = '',
		children
	}: Props = $props();

	const statusDotColor: Record<StatusType, string> = {
		healthy: 'bg-status-success',
		warning: 'bg-accent',
		error: 'bg-status-error',
		idle: 'bg-text-muted'
	};

	const statusAriaLabels: Record<StatusType, string> = {
		healthy: 'Operational status: healthy',
		warning: 'Operational status: degraded / warning',
		error: 'Operational status: offline / error',
		idle: 'Operational status: idle / staged'
	};
</script>

<div
	class="inline-flex items-center rounded-full border border-border bg-surface-elevated {size ===
	'sm'
		? 'gap-1.5 px-2.5 py-0.5 text-[11px]'
		: 'gap-2 px-3 py-1 text-[12px] sm:text-[13px]'} font-mono text-text-primary select-none {className}"
	aria-label={label ? undefined : statusAriaLabels[status]}
>
	<span class="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
		{#if pulse}
			<span
				class="absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping {statusDotColor[
					status
				]}"
			></span>
		{/if}
		<span class="relative inline-flex h-1.5 w-1.5 rounded-full {statusDotColor[status]}"></span>
	</span>

	{#if children}
		{@render children()}
	{:else if label}
		<span>{label}</span>
	{/if}
</div>
