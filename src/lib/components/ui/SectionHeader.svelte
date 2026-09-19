<script lang="ts">
	interface Props {
		index?: string;
		title: string;
		description?: string;
		class?: string;
	}

	let { index, title, description, class: className = '' }: Props = $props();
</script>

<div class="space-y-2 {className}">
	<div class="flex items-center gap-3">
		<span
			class="font-mono text-[11px] font-semibold tracking-[0.02em] text-accent uppercase sm:text-[12px]"
		>
			{#if index}
				{index} / {title}
			{:else}
				{title}
			{/if}
		</span>
		<div class="h-px flex-1 bg-divider" aria-hidden="true"></div>
	</div>

	{#if description}
		<p class="max-w-2xl font-sans text-[13px] leading-relaxed text-text-secondary sm:text-[14px]">
			{description}
		</p>
	{/if}
</div>
