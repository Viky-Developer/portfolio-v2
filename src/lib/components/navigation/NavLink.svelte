<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	interface Props {
		href: string;
		label: string;
		active?: boolean;
		class?: string;
		onclick?: () => void;
	}

	let { href, label, active = false, class: className = '', onclick }: Props = $props();
</script>

<a
	{href}
	{onclick}
	class="group relative inline-flex items-center rounded-sm px-2 py-1.5 font-sans text-[13px] whitespace-nowrap transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden lg:px-3 lg:py-2 lg:text-[14px] {active
		? 'font-medium text-accent'
		: 'text-text-secondary hover:text-text-primary'} {className}"
	aria-current={active ? 'location' : undefined}
>
	<span>{label}</span>

	<!-- Subtle active indicator line in Soft Sage -->
	{#if active}
		<span
			class="absolute right-2 -bottom-1 left-2 h-[2px] rounded-full bg-accent lg:right-3 lg:left-3"
			aria-hidden="true"
		></span>
	{/if}
</a>
