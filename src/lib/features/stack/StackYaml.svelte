<script lang="ts">
	import { CodePanel, CopyIcon, CheckIcon, Tag } from '$lib';
	import { stackYamlContent } from './stackData';

	let isCopied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(stackYamlContent);
			isCopied = true;
			setTimeout(() => {
				isCopied = false;
			}, 2000);
		} catch {
			// Fallback if clipboard API is restricted
			isCopied = false;
		}
	}

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

<div class="space-y-3">
	<CodePanel title="STACK / stack.yaml">
		{#snippet headerRight()}
			<div class="flex items-center gap-2">
				<Tag variant="default" size="sm">yaml</Tag>
				<button
					type="button"
					onclick={copyToClipboard}
					class="flex items-center gap-1.5 rounded-[4px] border border-border/80 bg-surface-elevated px-2 py-1 font-mono text-[11px] text-text-secondary transition-colors hover:border-accent hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden"
					aria-label={isCopied ? 'Copied YAML to clipboard' : 'Copy YAML to clipboard'}
				>
					{#if isCopied}
						<CheckIcon size={12} class="text-status-active" />
						<span class="text-status-active">Copied!</span>
					{:else}
						<CopyIcon size={12} />
						<span>Copy YAML</span>
					{/if}
				</button>
			</div>
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
			<div class="flex w-full flex-wrap items-center justify-between gap-2 text-[11px]">
				<div class="flex items-center gap-3">
					<span>format: <span class="text-accent">YAML</span></span>
					<span>•</span>
					<span>schema: <span class="text-text-secondary">v1.0.0</span></span>
					<span>•</span>
					<span>encoding: <span class="text-text-secondary">UTF-8</span></span>
				</div>
				<div class="flex items-center gap-1.5">
					<span class="bg-status-active inline-block h-1.5 w-1.5 rounded-full"></span>
					<span class="text-status-active font-medium">valid config</span>
				</div>
			</div>
		{/snippet}
	</CodePanel>
</div>
