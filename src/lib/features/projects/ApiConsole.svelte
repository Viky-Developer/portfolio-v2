<script lang="ts">
	import { Button, Tag, ArrowRightIcon, CheckIcon, CloseIcon } from '$lib';

	interface Props {
		onClose?: () => void;
	}

	let { onClose }: Props = $props();

	let urlInput = $state('https://example.com/very-long-url');
	let status = $state<'idle' | 'loading' | 'success'>('idle');
	let activeTraceStep = $state<number>(6);
	let latency = $state<number>(8);
	let shortUrlSuffix = $state('a8F2k');

	const traceSteps = [
		{ time: '00ms', name: 'Request Received' },
		{ time: '02ms', name: 'Payload Validation' },
		{ time: '03ms', name: 'Base62 Hash Computation' },
		{ time: '04ms', name: 'Redis Cache Lookup' },
		{ time: '06ms', name: 'RabbitMQ Event Published' },
		{ time: '08ms', name: 'Response Dispatched' }
	];

	function generateSuffix(): string {
		const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let result = '';
		for (let i = 0; i < 5; i++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return result;
	}

	async function handleSendRequest() {
		if (status === 'loading') return;

		status = 'loading';
		activeTraceStep = 0;

		for (let i = 0; i < traceSteps.length; i++) {
			activeTraceStep = i + 1;
			await new Promise((r) => setTimeout(r, 120));
		}

		shortUrlSuffix = generateSuffix();
		latency = Math.floor(Math.random() * 4) + 6;
		status = 'success';
	}
</script>

<div
	class="overflow-hidden rounded-[6px] border border-accent/40 bg-canvas-secondary font-mono shadow-card transition-all duration-200"
	role="region"
	aria-label="Interactive URL Shortener API Console"
>
	<!-- Title Bar -->
	<div
		class="flex items-center justify-between border-b border-divider bg-surface-elevated px-4 py-3 select-none"
	>
		<div class="flex items-center gap-2.5">
			<span class="inline-block h-2 w-2 animate-pulse rounded-full bg-accent"></span>
			<span class="text-xs font-semibold tracking-wider text-text-primary uppercase">
				URL SHORTENER / LIVE REQUEST TRACE
			</span>
		</div>

		<div class="flex items-center gap-3">
			<Tag variant="default" size="sm">simulation</Tag>
			{#if onClose}
				<button
					type="button"
					onclick={onClose}
					class="text-text-muted transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden"
					aria-label="Close API console"
				>
					<CloseIcon size={16} />
				</button>
			{/if}
		</div>
	</div>

	<!-- Main Console Body: Grid with Request Console (Left) and Request Trace (Right) -->
	<div class="grid grid-cols-1 divide-y divide-divider lg:grid-cols-12 lg:divide-x lg:divide-y-0">
		<!-- Left: Request & Response (7 cols) -->
		<div class="space-y-5 p-3.5 sm:p-6 lg:col-span-7">
			<!-- Endpoint Line -->
			<div class="flex items-center gap-2.5 text-xs sm:text-sm">
				<span
					class="rounded-[3px] bg-accent/15 px-2 py-0.5 font-bold tracking-wider text-accent uppercase"
				>
					POST
				</span>
				<span class="font-medium text-text-primary">/api/v1/urls</span>
			</div>

			<!-- Request Section -->
			<div class="space-y-2">
				<div class="flex items-center justify-between text-[11px] text-text-muted uppercase">
					<span>Request Payload</span>
					<span>application/json</span>
				</div>

				<div
					class="overflow-hidden rounded-[4px] border border-divider bg-surface-primary p-2.5 sm:p-3"
				>
					<div class="text-[11px] text-text-muted sm:text-[12px]">
						<span>&#123;</span>
						<div class="my-1.5 flex min-w-0 items-center pl-2 sm:pl-4">
							<span class="shrink-0 text-text-secondary">"url":</span>
							<input
								type="url"
								bind:value={urlInput}
								class="ml-2 min-w-0 flex-1 rounded-[3px] border border-border/80 bg-surface-elevated px-2 py-1 font-mono text-[11px] text-accent focus:border-accent focus:ring-1 focus:ring-accent focus:outline-hidden sm:text-[12px]"
								placeholder="https://example.com/very-long-url"
							/>
						</div>
						<span>&#125;</span>
					</div>
				</div>

				<div class="flex justify-end pt-1">
					<Button
						variant="primary"
						size="sm"
						onclick={handleSendRequest}
						disabled={status === 'loading'}
					>
						{#if status === 'loading'}
							<span>Executing...</span>
						{:else}
							<span>Send Request</span>
							<ArrowRightIcon size={13} />
						{/if}
					</Button>
				</div>
			</div>

			<!-- Response Section -->
			<div class="space-y-2 border-t border-divider pt-4">
				<div class="flex items-center justify-between text-[11px]">
					<div class="flex items-center gap-2">
						<span class="text-status-active font-semibold">201 CREATED</span>
						<span class="text-text-muted">•</span>
						<span class="text-text-muted">{latency}ms latency</span>
					</div>
					<span class="text-text-muted uppercase">Response</span>
				</div>

				<div
					class="overflow-x-auto rounded-[4px] border border-divider bg-surface-primary p-2.5 sm:p-3.5"
				>
					<pre
						class="font-mono text-[11px] leading-relaxed break-all whitespace-pre-wrap text-text-secondary sm:text-[12px]"><code
							>&#123;
  <span class="text-text-muted">"status":</span> <span class="text-status-active">"success"</span>,
  <span class="text-text-muted">"short_url":</span> <span class="text-accent"
								>"https://vignesh.dev/{shortUrlSuffix}"</span
							>,
  <span class="text-text-muted">"latency_ms":</span> <span class="text-text-primary">{latency}</span
							>
&#125;</code
						></pre>
				</div>
			</div>
		</div>

		<!-- Right: Request Trace Flow (5 cols) -->
		<div class="space-y-4 bg-surface-primary/30 p-3.5 sm:p-6 lg:col-span-5">
			<div class="flex items-center justify-between border-b border-divider pb-2.5">
				<span class="text-[11px] font-semibold tracking-wider text-text-muted uppercase">
					Request Trace
				</span>
				<span
					class="flex items-center gap-1 font-mono text-[11px] font-medium {activeTraceStep >= 6
						? 'text-status-active'
						: 'text-accent'}"
				>
					<CheckIcon size={12} />
					<span>{activeTraceStep >= 6 ? 'COMPLETE' : 'TRACE RUNNING'}</span>
				</span>
			</div>

			<!-- Trace Timeline Flow -->
			<div class="relative space-y-4 pt-2 pl-6">
				<!-- Vertical Trace Line -->
				<div class="absolute top-2 bottom-3 left-2 w-[1.5px] bg-border" aria-hidden="true"></div>

				{#each traceSteps as step, i (step.name)}
					{@const isCompleted = activeTraceStep > i}
					{@const isCurrent = activeTraceStep === i + 1}
					<div class="relative flex items-center justify-between text-xs">
						<!-- Node -->
						<div
							class="absolute -left-[20.5px] h-2.5 w-2.5 rounded-full border transition-colors duration-200 {isCompleted
								? 'border-accent bg-accent'
								: isCurrent
									? 'animate-ping border-accent bg-background'
									: 'border-border bg-surface-primary'}"
							aria-hidden="true"
						></div>

						<!-- Step Name -->
						<span
							class="font-sans text-[13px] transition-colors duration-200 {isCompleted
								? 'font-medium text-text-primary'
								: isCurrent
									? 'font-medium text-accent'
									: 'text-text-muted'}"
						>
							{step.name}
						</span>

						<!-- Step Timestamp -->
						<span
							class="font-mono text-[11px] tabular-nums {isCompleted
								? 'text-accent'
								: 'text-text-muted'}"
						>
							{step.time}
						</span>
					</div>
				{/each}
			</div>

			<!-- Cache & Architectural Note -->
			<div
				class="rounded-[4px] border border-divider bg-surface-elevated/40 p-3 pt-2.5 text-[11px]"
			>
				<span class="font-sans text-xs leading-relaxed text-text-secondary">
					Single-digit millisecond latency achieved via Redis memory-layer lookups, Base62
					collision-free encoding, and asynchronous click analytics persistence via RabbitMQ.
				</span>
			</div>
		</div>
	</div>
</div>
