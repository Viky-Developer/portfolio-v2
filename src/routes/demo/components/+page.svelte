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
	<title>Deep Forest Design System & Reusable Components — Showcase</title>
</svelte:head>

<main
	class="mx-auto min-h-screen max-w-5xl space-y-12 bg-background px-4 py-12 text-text-primary sm:px-8"
>
	<!-- Page Title -->
	<div class="space-y-3 border-b border-divider pb-6">
		<div class="flex items-center gap-2">
			<Tag variant="accent">v2.0</Tag>
			<Tag variant="highlight">VIGNESH.DEV</Tag>
			<Tag variant="default">Deep Forest & Warm Cream</Tag>
		</div>
		<h1 class="font-sans text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
			Theme Colors & Reusable Components
		</h1>
		<p class="max-w-2xl font-sans text-sm leading-relaxed text-text-secondary sm:text-base">
			Calm, mature, technical engineering workspace design system with Warm Cream typography and
			restrained Soft Sage accents. Validated against
			<code
				class="rounded border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-xs"
			>
				context/design.md
			</code>.
		</p>
	</div>

	<!-- 1. Theme Color Swatches -->
	<section class="space-y-4">
		<SectionHeader
			index="01"
			title="Color System Tokens"
			description="Deep Forest surfaces, Warm Cream typography, and restrained Soft Sage accent."
		/>

		<div class="space-y-4">
			<h3 class="font-mono text-xs tracking-wider text-text-muted uppercase">
				Core Surfaces & Borders
			</h3>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
				<div class="space-y-1 rounded-md border border-border bg-background p-3">
					<div class="h-8 rounded border border-border bg-background"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--background</div>
					<div class="font-mono text-[10px] text-text-muted">#07110D</div>
				</div>
				<div class="space-y-1 rounded-md border border-border bg-canvas-secondary p-3">
					<div class="h-8 rounded border border-border bg-canvas-secondary"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--canvas-sec</div>
					<div class="font-mono text-[10px] text-text-muted">#0A1712</div>
				</div>
				<div class="space-y-1 rounded-md border border-border bg-surface-primary p-3">
					<div class="h-8 rounded border border-border bg-surface-primary"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--surface-pri</div>
					<div class="font-mono text-[10px] text-text-muted">#0D1B15</div>
				</div>
				<div class="space-y-1 rounded-md border border-border bg-surface-elevated p-3">
					<div class="h-8 rounded border border-border bg-surface-elevated"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--surface-ele</div>
					<div class="font-mono text-[10px] text-text-muted">#11231B</div>
				</div>
				<div class="space-y-1 rounded-md border border-border bg-surface-primary p-3">
					<div class="h-8 rounded bg-border"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--border</div>
					<div class="font-mono text-[10px] text-text-muted">#26382F</div>
				</div>
				<div class="space-y-1 rounded-md border border-border bg-surface-primary p-3">
					<div class="h-8 rounded bg-divider"></div>
					<div class="font-mono text-[11px] font-medium text-text-primary">--divider</div>
					<div class="font-mono text-[10px] text-text-muted">#1B2B24</div>
				</div>
			</div>

			<h3 class="pt-2 font-mono text-xs tracking-wider text-text-muted uppercase">
				Typography & Accent Tokens
			</h3>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
				<div class="flex items-center gap-3 rounded-md border border-border bg-surface-primary p-3">
					<span class="h-3.5 w-3.5 rounded-full bg-text-primary"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-primary">Warm Cream</div>
						<div class="font-mono text-[10px] text-text-muted">#F0EBDD (Primary)</div>
					</div>
				</div>
				<div class="flex items-center gap-3 rounded-md border border-border bg-surface-primary p-3">
					<span class="h-3.5 w-3.5 rounded-full bg-text-secondary"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-primary">Soft Stone</div>
						<div class="font-mono text-[10px] text-text-muted">#B8B9AE (Body)</div>
					</div>
				</div>
				<div class="flex items-center gap-3 rounded-md border border-border bg-surface-primary p-3">
					<span class="h-3.5 w-3.5 rounded-full bg-accent"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-primary">Soft Sage</div>
						<div class="font-mono text-[10px] text-text-muted">#8BCB9B (3% Accent)</div>
					</div>
				</div>
				<div class="flex items-center gap-3 rounded-md border border-border bg-surface-primary p-3">
					<span class="h-3.5 w-3.5 rounded-full bg-status-success"></span>
					<div>
						<div class="font-mono text-[11px] font-semibold text-text-primary">
							Operational Green
						</div>
						<div class="font-mono text-[10px] text-text-muted">#78C990 (Success)</div>
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
			description="Restrained rectangular controls with visible focus ring and Deep Forest states."
		/>

		<div class="space-y-6 rounded-md border border-border bg-surface-primary p-6 shadow-card">
			<div class="space-y-2">
				<h4 class="font-mono text-xs tracking-wider text-text-muted uppercase">Variants</h4>
				<div class="flex flex-wrap items-center gap-3">
					<Button variant="primary">
						<span>Explore My Work</span>
						<ArrowRightIcon size={14} />
					</Button>
					<Button variant="secondary">
						<FileTextIcon size={14} />
						<span>Resume ↗</span>
					</Button>
					<Button variant="outline">
						<GithubIcon size={14} />
						<span>GitHub ↗</span>
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
				<h4 class="font-mono text-xs tracking-wider text-text-muted uppercase">Sizes</h4>
				<div class="flex flex-wrap items-center gap-3">
					<Button size="sm" variant="secondary">Small (32px)</Button>
					<Button size="md" variant="secondary">Medium (40px Default)</Button>
					<Button size="lg" variant="secondary">Large (44px Mobile Target)</Button>
				</div>
			</div>

			<div class="space-y-2">
				<h4 class="font-mono text-xs tracking-wider text-text-muted uppercase">
					Polymorphic Link Support
				</h4>
				<div class="flex flex-wrap gap-3">
					<Button
						href="https://github.com/Viky-Developer"
						target="_blank"
						rel="noreferrer"
						variant="outline"
					>
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
			description="Technical metadata chips and state indicators."
		/>

		<div class="space-y-6 rounded-md border border-border bg-surface-primary p-6 shadow-card">
			<div class="space-y-2">
				<h4 class="font-mono text-xs tracking-wider text-text-muted uppercase">
					Status Indicators
				</h4>
				<div class="flex flex-wrap items-center gap-3">
					<StatusBadge status="healthy" label="Production Healthy" pulse={true} />
					<StatusBadge status="healthy" label="99.99% Uptime" />
					<StatusBadge status="warning" label="Degraded Performance" />
					<StatusBadge status="error" label="Endpoint Unreachable" />
					<StatusBadge status="idle" label="Staged for Deployment" />
				</div>
			</div>

			<div class="space-y-2">
				<h4 class="font-mono text-xs tracking-wider text-text-muted uppercase">
					Technical Metadata Chips
				</h4>
				<div class="flex flex-wrap items-center gap-2">
					<Tag variant="highlight">Go (Primary)</Tag>
					<Tag variant="default">PostgreSQL</Tag>
					<Tag variant="default">Redis</Tag>
					<Tag variant="default">Kafka</Tag>
					<Tag variant="default">DynamoDB</Tag>
					<Tag variant="default">RabbitMQ</Tag>
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
			<KeyValueTile label="Location" value="Chennai, India" subtext="UTC +5:30" />
			<KeyValueTile label="Primary Language" value="Go (Golang)" subtext="Production Focus" />
			<KeyValueTile label="Domain" value="Payments & FinTech" subtext="Banking Orchestration" />
			<KeyValueTile label="P99 Latency" value="< 10ms" subtext="Peak load 10k req/s" />
		</div>
	</section>

	<!-- 5. Cards -->
	<section class="space-y-4">
		<SectionHeader
			index="05"
			title="Cards & Panels"
			description="Contained panels with Deep Forest surfaces and subtle Dark Moss dividers."
		/>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<Card hoverable={true}>
				{#snippet header()}
					<span class="font-sans text-sm font-semibold text-text-primary">
						Software Engineer — Payments
					</span>
					<span class="font-mono text-xs text-accent">2026 — Present</span>
				{/snippet}

				<div class="space-y-3">
					<p class="text-sm leading-relaxed text-text-secondary">
						Architected and maintained high-throughput payment reconciliation pipeline handling
						transaction orchestration.
					</p>
					<div class="flex flex-wrap gap-1.5 pt-1">
						<Tag variant="highlight">Go</Tag>
						<Tag variant="default">DynamoDB</Tag>
						<Tag variant="default">PostgreSQL</Tag>
						<Tag variant="default">Redis</Tag>
						<Tag variant="default">Valkey</Tag>
					</div>
				</div>
			</Card>

			<Card hoverable={true}>
				{#snippet header()}
					<span class="font-mono text-sm font-semibold text-text-primary">url-shortener</span>
					<Tag variant="default" size="sm">public</Tag>
				{/snippet}

				<div class="space-y-3">
					<p class="text-sm leading-relaxed text-text-secondary">
						Distributed URL shortening engine featuring Redis caching, rate limiting, and
						asynchronous click telemetry.
					</p>
					<div class="flex items-center gap-2 pt-1">
						<Button size="sm" variant="outline">
							<TerminalIcon size={12} />
							<span>Architecture</span>
						</Button>
						<Button size="sm" variant="ghost">
							<GithubIcon size={12} />
							<span>Repo ↗</span>
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
			description="Observability console with request trace and status timing."
		/>

		<CodePanel title="URL SHORTENER / LIVE REQUEST">
			{#snippet headerRight()}
				<span class="font-mono text-xs text-status-success">201 CREATED • 8ms</span>
			{/snippet}

			<div class="space-y-2 text-xs">
				<div class="flex items-center gap-3 text-text-code">
					<Tag variant="post" size="sm">POST</Tag>
					<span class="text-text-secondary">/api/v1/urls</span>
					<span class="ml-auto text-status-success tabular-nums">201 CREATED • 8ms</span>
				</div>
				<div
					class="space-y-1 rounded border border-border bg-background p-2 font-mono text-[11px] text-text-secondary"
				>
					<p>
						<span class="text-text-muted">request:</span> &#123; "url": "https://example.com/very-long-url"
						&#125;
					</p>
					<p>
						<span class="text-text-muted">response:</span> &#123; "short_url": "linkpluse/a8F2k" &#125;
					</p>
				</div>
			</div>

			{#snippet footer()}
				<span>Go • PostgreSQL • Redis • Valkey</span>
				<span class="text-accent">Trace Complete</span>
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

		<div class="rounded-md border border-border bg-surface-primary p-6 shadow-card">
			<div class="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 md:grid-cols-8">
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<GithubIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">Github</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<LinkedinIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">Linkedin</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<MailIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">Mail</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<ExternalLinkIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">ExternalLink</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<ArrowRightIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">ArrowRight</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<FileTextIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">FileText</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<TerminalIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">Terminal</span>
				</div>
				<div class="flex flex-col items-center gap-2 rounded bg-surface-elevated p-3">
					<CheckIcon size={20} />
					<span class="font-mono text-[10px] text-text-muted">Check</span>
				</div>
			</div>
		</div>
	</section>
</main>
