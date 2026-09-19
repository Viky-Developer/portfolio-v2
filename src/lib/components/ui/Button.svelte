<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonSize, ButtonVariant } from '$lib/types/theme';

	interface BaseProps {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		children?: Snippet;
	}

	interface ButtonElementProps extends BaseProps, Omit<HTMLButtonAttributes, 'class'> {
		href?: undefined;
	}

	interface LinkElementProps extends BaseProps, Omit<HTMLAnchorAttributes, 'class'> {
		href: string;
	}

	type Props = ButtonElementProps | LinkElementProps;

	let {
		variant = 'primary',
		size = 'md',
		class: className = '',
		children,
		href,
		...restProps
	}: Props = $props();

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-accent text-background font-semibold hover:bg-accent-strong active:bg-accent border border-transparent shadow-xs',
		secondary:
			'bg-surface-elevated text-text-primary border border-border hover:bg-surface-primary active:bg-canvas-secondary shadow-xs',
		outline:
			'bg-transparent text-text-secondary border border-border hover:text-accent hover:border-accent/40 active:bg-surface-elevated',
		ghost:
			'bg-transparent text-text-muted hover:text-text-primary hover:bg-surface-elevated active:bg-surface-primary'
	};

	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'h-8 px-3 text-[13px] gap-1.5',
		md: 'h-10 px-4 text-[14px] gap-2 min-h-[40px]',
		lg: 'h-11 px-5 text-[15px] gap-2.5 min-h-[44px]'
	};

	const baseClasses =
		'inline-flex items-center justify-center whitespace-nowrap shrink-0 font-sans font-medium rounded-sm select-none transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
</script>

{#if href !== undefined}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}"
		{...restProps as HTMLAnchorAttributes}
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}"
		{...restProps as HTMLButtonAttributes}
	>
		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}
