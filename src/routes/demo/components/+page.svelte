<script lang="ts">
	import {
		Button,
		Card,
		StatusBadge,
		Tag,
		SectionHeader,
		KeyValueTile,
		CodePanel,
		GithubIcon,
		LinkedinIcon,
		MailIcon,
		ExternalLinkIcon,
		ArrowRightIcon,
		FileTextIcon,
		TerminalIcon,
		CheckIcon
	} from '$lib';
</script>

<svelte:head>
	<title>Design System & Reusable Components — Showcase</title>
</svelte:head>

<main
	class="mx-auto min-h-screen max-w-5xl space-y-12 bg-background px-4 py-12 text-text-primary sm:px-8"
>
	<!-- Page Title -->
	<div class="space-y-3 border-b border-border-subtle pb-6">
		<div class="flex items-center gap-2">
			<StatusBadge status="healthy" label="Engineered Precision Design System" pulse={true} />
			<Tag variant="accent">v2.0</Tag>
		</div>
		<h1 class="font-sans text-3xl font-semibold tracking-tight text-text-strong sm:text-4xl">
			Theme Colors & Reusable Components
		</h1>
		<p class="max-w-2xl text-sm text-text-muted sm:text-base">
			Technical, minimalist design system tailored for backend engineering portfolio. Validated
			against
			<code class="rounded bg-surface-container px-1.5 py-0.5 font-mono text-xs"
				>context/design.md</code
			>.
		</p>
	</div>

	<!-- 1. Theme Color Swatches -->
	<section class="space-y-4">
		<SectionHeader
			index="01"
			title="Color System Tokens"
			description="Core surfaces, text shades, and operational status colors."
		/>

		<div class="space-y-4">
			<h3 class="font-mono text-xs tracking-wider text-text-subtle uppercase">Core Surfaces</h3>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
				<div class="space-y-1 rounded-lg border border-border-subtle bg-background p-3">
					<div class="h-8 rounded border border-border-subtle bg-background"></div>
					<div class="font-mono text-[11px] font-medium text-text-strong">--background</div>
					<div class="font-mono text-[10px] text-text-subtle">#f9f9f9</div>
				</div>
				<div class="space-y-1 rounded-lg border border-border-subtle bg-surface-lowest p-3">
					<div class="h-8 rounded border border-border-subtle bg-surface-lowest"></div>
					<div class="font-mono text-[11px] font-medium text-text-strong">--surface-lowest</div>
					<div class="font-mono text-[10px] text-text-subtle">#ffffff</div>
				</div>
				<div class="space-y-1 rounded-lg border border-border-subtle bg-surface-low p-3">
					<div class="h-8 rounded border border-border-subtle bg-surface-low"></div>
					<div class="font-mono text-[11px] font-medium text-text-strong">--surface-low</div>
					<div class="font-mono text-[10px] text-text-subtle">#f3f3f3</div>
				</div>
				<div class="space-y-1 rounded-lg border border-border-subtle bg-surface-container p-3">
					<div class="h-8 rounded border border-border-subtle bg-surface-container"></div>
					<div class="font-mono text-[11px] font-medium text-text-strong">--surface-container</div>
					<div class="font-mono text-[10px] text-text-subtle">#eeeeee</div>
				</div>
				<div
					class="space-y-1 rounded-lg border border-border-subtle bg-code-surface p-3 text-white"
				>
					<div class="h-8 rounded border border-neutral-700 bg-code-surface"></div>
					<div class="font-mono text-[11px] font-medium text-white">--code-surface</div>
					<div class="font-mono text-[10px] text-neutral-400">#171717</div>
				</div>
			</div>

			<h3 class="pt-2 font-mono text-xs tracking-wider text-text-subtle uppercase">
				Operational Colors
			</h3>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
				<div
					class="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-lowest p-3"
				>
					<span class="h-3.5 w-3.5 rounded-full bg-status-healthy"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-strong">
							Healthy / Success
						</div>
						<div class="font-mono text-[10px] text-text-subtle">#10b981</div>
					</div>
				</div>
				<div
					class="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-lowest p-3"
				>
					<span class="h-3.5 w-3.5 rounded-full bg-status-warning"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-strong">
							Warning / Degraded
						</div>
						<div class="font-mono text-[10px] text-text-subtle">#f59e0b</div>
					</div>
				</div>
				<div
					class="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-lowest p-3"
				>
					<span class="h-3.5 w-3.5 rounded-full bg-status-error"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-strong">Error / Offline</div>
						<div class="font-mono text-[10px] text-text-subtle">#ef4444</div>
					</div>
				</div>
				<div
					class="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-lowest p-3"
				>
					<span class="h-3.5 w-3.5 rounded-full bg-status-idle"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-strong">Idle / Staged</div>
						<div class="font-mono text-[10px] text-text-subtle">#94a3b8</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 2. Buttons -->
	<section class="space-y-4">
		<SectionHeader
			index="02"
			title="Buttons & Actions"
			description="Accessible action controls with 4px border radius, visible focus ring, and multiple variants."
		/>

		<div class="space-y-6 rounded-lg border border-border-subtle bg-surface-lowest p-6 shadow-card">
			<div class="space-y-2">
				<h4 class="font-mono text-xs text-text-subtle uppercase">Variants</h4>
				<div class="flex flex-wrap items-center gap-3">
					<Button variant="primary">
						<span>Primary Action</span>
						<ArrowRightIcon size={14} />
					</Button>
					<Button variant="secondary">
						<FileTextIcon size={14} />
						<span>View Resume</span>
					</Button>
					<Button variant="outline">
						<GithubIcon size={14} />
						<span>Source Code</span>
					</Button>
					<Button variant="ghost">
						<span>Ghost Button</span>
					</Button>
					<Button variant="primary" disabled={true}>
						<span>Disabled</span>
					</Button>
				</div>
			</div>

			<div class="space-y-2">
				<h4 class="font-mono text-xs text-text-subtle uppercase">Sizes</h4>
				<div class="flex flex-wrap items-center gap-3">
					<Button size="sm" variant="secondary">Small (32px)</Button>
					<Button size="md" variant="secondary">Medium (40px Default)</Button>
					<Button size="lg" variant="secondary">Large (44px Mobile Target)</Button>
				</div>
			</div>

			<div class="space-y-2">
				<h4 class="font-mono text-xs text-text-subtle uppercase">Polymorphic Link Support</h4>
				<div class="flex flex-wrap gap-3">
					<Button href="https://github.com" target="_blank" rel="noreferrer" variant="outline">
						<GithubIcon size={14} />
						<span>External Link (renders &lt;a&gt;)</span>
						<ExternalLinkIcon size={12} />
					</Button>
				</div>
			</div>
		</div>
	</section>

	<!-- 3. Badges & Tags -->
	<section class="space-y-4">
		<SectionHeader
			index="03"
			title="Status Badges & Tags"
			description="Accessible status cues and monospaced technical skill tags."
		/>

		<div class="space-y-6 rounded-lg border border-border-subtle bg-surface-lowest p-6 shadow-card">
			<div class="space-y-2">
				<h4 class="font-mono text-xs text-text-subtle uppercase">Status Badges (Pills)</h4>
				<div class="flex flex-wrap items-center gap-3">
					<StatusBadge
						status="healthy"
						label="Available for high-impact backend roles"
						pulse={true}
					/>
					<StatusBadge status="healthy" label="99.99% Uptime" />
					<StatusBadge status="warning" label="Degraded Performance" />
					<StatusBadge status="error" label="Endpoint Unreachable" />
					<StatusBadge status="idle" label="Staged for Deployment" />
				</div>
			</div>

			<div class="space-y-2">
				<h4 class="font-mono text-xs text-text-subtle uppercase">Technical Tags & HTTP Chips</h4>
				<div class="flex flex-wrap items-center gap-2">
					<Tag variant="highlight">Go / Golang</Tag>
					<Tag variant="default">PostgreSQL</Tag>
					<Tag variant="default">Redis</Tag>
					<Tag variant="default">Kafka</Tag>
					<Tag variant="default">AWS ECS</Tag>
					<Tag variant="default">Docker</Tag>
					<Tag variant="get">GET</Tag>
					<Tag variant="post">POST</Tag>
					<Tag variant="accent">gRPC</Tag>
				</div>
			</div>
		</div>
	</section>

	<!-- 4. Key Value Tiles -->
	<section class="space-y-4">
		<SectionHeader
			index="04"
			title="Key-Value Metadata Tiles"
			description="Compact 16px padding tiles for specifications, location, and tabular metrics."
		/>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			<KeyValueTile label="Location" value="Bengaluru, India" subtext="UTC +5:30" />
			<KeyValueTile label="Primary Language" value="Go (Golang)" subtext="2+ Years Production" />
			<KeyValueTile label="Domain" value="Payments & Fintech" subtext="Banking Orchestration" />
			<KeyValueTile label="P99 Latency" value="< 12ms" subtext="Peak load 10k req/s" />
		</div>
	</section>

	<!-- 5. Cards -->
	<section class="space-y-4">
		<SectionHeader
			index="05"
			title="Cards & Panels"
			description="8px radius containers with standard 0 1px 3px shadow and subtle header strip."
		/>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<Card hoverable={true}>
				{#snippet header()}
					<span class="font-mono text-xs font-semibold text-text-strong"
						>Software Engineer — Payments</span
					>
					<span class="font-mono text-[11px] text-text-subtle">2023 — Present</span>
				{/snippet}

				<div class="space-y-3">
					<p class="text-sm text-text-muted">
						Architected and maintained high-throughput payment reconciliation pipeline handling 2M+
						daily transactions.
					</p>
					<div class="flex flex-wrap gap-1.5">
						<Tag variant="highlight">Go</Tag>
						<Tag variant="default">PostgreSQL</Tag>
						<Tag variant="default">Redis</Tag>
					</div>
				</div>
			</Card>

			<Card hoverable={true}>
				{#snippet header()}
					<span class="font-mono text-xs font-semibold text-text-strong"
						>URL Shortener Platform</span
					>
					<Tag variant="accent">Case Study</Tag>
				{/snippet}

				<div class="space-y-3">
					<p class="text-sm text-text-muted">
						Distributed URL shortening engine featuring Redis TTL caching, token bucket rate
						limiting, and asynchronous click telemetry.
					</p>
					<div class="flex items-center gap-2 pt-1">
						<Button size="sm" variant="outline">
							<TerminalIcon size={12} />
							<span>Architecture</span>
						</Button>
						<Button size="sm" variant="ghost">
							<GithubIcon size={12} />
							<span>Repo</span>
						</Button>
					</div>
				</div>
			</Card>
		</div>
	</section>

	<!-- 6. Dark Code / Observability Panel -->
	<section class="space-y-4">
		<SectionHeader
			index="06"
			title="Code & Observability Panel"
			description="Dark technical console for live traces, terminal outputs, and system topology."
		/>

		<CodePanel title="vignesh/backend • live trace">
			{#snippet headerRight()}
				<StatusBadge size="sm" status="healthy" label="99.99% UPTIME" />
			{/snippet}

			<div class="space-y-2 text-xs">
				<div class="flex items-center gap-3 text-neutral-300">
					<Tag variant="get" size="sm">GET</Tag>
					<span class="text-neutral-400">/api/v1/payments/pay_98a72b</span>
					<span class="ml-auto text-emerald-400 tabular-nums">200 OK • 8ms</span>
				</div>
				<div class="flex items-center gap-3 text-neutral-300">
					<Tag variant="post" size="sm">POST</Tag>
					<span class="text-neutral-400">/api/v1/payouts/process</span>
					<span class="ml-auto text-emerald-400 tabular-nums">202 ACCEPTED • 14ms</span>
				</div>
				<div class="flex items-center gap-3 text-neutral-400">
					<span class="font-bold text-amber-400">•</span>
					<span>event.published: payment.completed (partition #3, offset 1942)</span>
					<span class="ml-auto text-neutral-500 tabular-nums">ack 1.2ms</span>
				</div>
			</div>

			{#snippet footer()}
				<span>Go • PostgreSQL • Redis • Kafka • AWS</span>
				<span class="text-emerald-400">System Healthy</span>
			{/snippet}
		</CodePanel>
	</section>

	<!-- 7. Icons Preview -->
	<section class="space-y-4">
		<SectionHeader
			index="07"
			title="Inline SVG Icons"
			description="Crisp, typed SVG icons without runtime third-party font dependency."
		/>

		<div class="rounded-lg border border-border-subtle bg-surface-lowest p-6 shadow-card">
			<div class="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 md:grid-cols-8">
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<GithubIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">Github</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<LinkedinIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">Linkedin</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<MailIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">Mail</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<ExternalLinkIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">ExternalLink</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<ArrowRightIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">ArrowRight</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<FileTextIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">FileText</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<TerminalIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">Terminal</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-low p-3">
					<CheckIcon size={20} />
					<span class="font-mono text-[10px] text-text-subtle">Check</span>
				</div>
			</div>
		</div>
	</section>
</main>
