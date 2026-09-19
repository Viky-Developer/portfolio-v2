<script lang="ts">
	import { CodePanel, Tag } from '$lib';
	import { stackYamlContent } from './stackData';

	interface Token {
		text: string;
		class?: string;
	}

	interface HighlightedLine {
		num: number;
		tokens: Token[];
	}

	const highlightedLines: HighlightedLine[] = stackYamlContent
		.trimEnd()
		.split('\n')
		.map((line, idx) => {
			const num = idx + 1;
			const trimmed = line.trim();

			if (!trimmed) {
				return { num, tokens: [{ text: ' ' }] };
			}

			if (trimmed.startsWith('#')) {
				return { num, tokens: [{ text: line, class: 'text-text-muted/80 italic' }] };
			}

			// Top-level key: e.g. "backend:"
			const topKeyMatch = line.match(/^([a-z_]+):$/);
			if (topKeyMatch) {
				return {
					num,
					tokens: [
						{ text: topKeyMatch[1], class: 'font-semibold text-accent' },
						{ text: ':', class: 'text-text-muted' }
					]
				};
			}

			// Nested key: e.g. "  primary: Go" or "  framework:"
			const nestedKeyMatch = line.match(/^(\s+)([a-z_]+):(?:\s*(.*))?$/);
			if (nestedKeyMatch) {
				const indent = nestedKeyMatch[1];
				const key = nestedKeyMatch[2];
				const val = nestedKeyMatch[3];
				const tokens: Token[] = [
					{ text: indent },
					{ text: key, class: 'font-medium text-text-primary' },
					{ text: val ? ': ' : ':', class: 'text-text-muted' }
				];
				if (val) {
					tokens.push({ text: val, class: 'text-text-code' });
				}
				return { num, tokens };
			}

			// List item: e.g. "    - Gin"
			const listMatch = line.match(/^(\s+)-\s+(.*)$/);
			if (listMatch) {
				return {
					num,
					tokens: [
						{ text: listMatch[1] },
						{ text: '- ', class: 'text-text-muted' },
						{ text: listMatch[2], class: 'text-text-code' }
					]
				};
			}

			return { num, tokens: [{ text: line }] };
		});
</script>

<div class="w-full max-w-full min-w-0 space-y-3">
	<CodePanel title="STACK / stack.yaml">
		{#snippet headerRight()}
			<Tag variant="default" size="sm">yaml</Tag>
		{/snippet}

		<div class="font-mono text-[12px] leading-relaxed sm:text-[13px]">
			{#each highlightedLines as line (line.num)}
				<div class="group flex items-baseline hover:bg-surface-elevated/40">
					<span
						class="w-8 shrink-0 pr-4 text-right font-mono text-[11px] text-text-muted/50 select-none group-hover:text-text-muted"
					>
						{line.num}
					</span>
					<span class="font-mono whitespace-pre"
						>{#each line.tokens as token, tokenIndex (tokenIndex)}<span class={token.class ?? ''}
								>{token.text}</span
							>{/each}</span
					>
				</div>
			{/each}
		</div>

		{#snippet footer()}
			<div class="flex w-full min-w-0 items-center justify-between gap-2 text-[11px]">
				<div class="flex min-w-0 items-center gap-1.5 truncate text-text-muted sm:gap-2.5">
					<span>schema: <span class="font-medium text-text-secondary">v1.0.0</span></span>
					<span class="text-text-muted/40" aria-hidden="true">·</span>
					<span
						><span class="hidden sm:inline">encoding: </span><span class="text-text-secondary"
							>UTF-8</span
						></span
					>
				</div>
				<div class="flex shrink-0 items-center gap-1.5">
					<span class="inline-block h-1.5 w-1.5 rounded-full bg-status-success"></span>
					<span class="font-medium text-status-success">valid config</span>
				</div>
			</div>
		{/snippet}
	</CodePanel>
</div>
