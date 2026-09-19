<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import {
		Button,
		Tag,
		Card,
		SectionHeader,
		KeyValueTile,
		ArrowRightIcon,
		FileTextIcon,
		GithubIcon,
		LinkedinIcon,
		MailIcon,
		TerminalIcon
	} from '$lib';
</script>

<svelte:head>
	<title>Full Portfolio Preview — Demo Routes</title>
</svelte:head>

<main class="mx-auto max-w-5xl space-y-20 px-4 py-12 sm:px-8">
	<!-- Demo Notice Banner -->
	<div
		class="flex items-center justify-between rounded-md border border-border bg-surface-elevated px-4 py-3 text-xs"
	>
		<div class="flex items-center gap-2">
			<Tag variant="accent">Demo Route</Tag>
			<span class="text-text-secondary">Full Page Architecture Preview</span>
		</div>
		<Button href={resolve('/demo/components')} variant="outline" size="sm">
			<span>Components Showcase ↗</span>
		</Button>
	</div>

	<!-- Section 01: Hero / Engineering Workspace (#about) -->
	<section id="about" class="scroll-mt-20 space-y-8 pt-4">
		<div class="space-y-4">
			<span class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
				Backend Software Engineer
			</span>

			<h1
				class="max-w-3xl font-sans text-4xl leading-[1.15] font-semibold tracking-tight text-text-primary sm:text-6xl"
			>
				Building reliable systems behind digital payments.
			</h1>

			<p class="max-w-2xl font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
				I build backend and payment infrastructure using Go, with a focus on reliability,
				performance, and distributed systems.
			</p>
		</div>

		<div class="flex flex-wrap items-center gap-3 pt-2">
			<Button href="#projects" variant="primary" size="md">
				<span>Explore My Work</span>
				<ArrowRightIcon size={14} />
			</Button>
			<Button
				href={asset('/Vignesh_Resume.pdf')}
				target="_blank"
				rel="noreferrer"
				variant="secondary"
				size="md"
			>
				<FileTextIcon size={14} />
				<span>Resume ↗</span>
			</Button>
			<Button href={resolve('/demo/components')} variant="outline" size="md">
				<span>Components Showcase</span>
			</Button>
		</div>

		<!-- Quick Metric Band -->
		<div class="grid grid-cols-2 gap-3 border-t border-divider pt-6 sm:grid-cols-4">
			<div class="space-y-1">
				<div class="font-sans text-2xl font-semibold text-text-primary tabular-nums">2+ Years</div>
				<div class="font-mono text-[11px] tracking-wider text-text-muted uppercase">
					Backend Experience
				</div>
			</div>
			<div class="space-y-1">
				<div class="font-sans text-2xl font-semibold text-text-primary tabular-nums">30+</div>
				<div class="font-mono text-[11px] tracking-wider text-text-muted uppercase">APIs Built</div>
			</div>
			<div class="space-y-1">
				<div class="font-sans text-2xl font-semibold text-accent uppercase">FinTech</div>
				<div class="font-mono text-[11px] tracking-wider text-text-muted uppercase">
					Domain Focus
				</div>
			</div>
			<div class="space-y-1">
				<div class="font-sans text-2xl font-semibold text-text-primary tabular-nums">&lt; 10ms</div>
				<div class="font-mono text-[11px] tracking-wider text-text-muted uppercase">
					Target Latency
				</div>
			</div>
		</div>
	</section>

	<!-- Section 02: Key Metrics -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			<KeyValueTile label="Location" value="Chennai, India" subtext="UTC +5:30" />
			<KeyValueTile label="Primary Language" value="Go (Golang)" subtext="Production Focus" />
			<KeyValueTile label="Domain" value="Payments & FinTech" subtext="Banking Orchestration" />
			<KeyValueTile label="P99 Latency" value="< 10ms" subtext="Peak load 10k req/s" />
		</div>
	</section>

	<!-- Section 03: Experience (#experience) -->
	<section id="experience" class="scroll-mt-20 space-y-6">
		<SectionHeader
			index="02"
			title="Experience"
			description="Professional backend engineering career in high-throughput payments."
		/>

		<div class="space-y-4">
			<Card hoverable={true}>
				{#snippet header()}
					<div class="flex w-full items-center justify-between">
						<span class="font-sans text-sm font-semibold text-text-primary">
							Software Engineer — Payments
						</span>
						<span class="font-mono text-xs text-accent">2026 — Present</span>
					</div>
				{/snippet}

				<div class="space-y-3">
					<p class="text-sm leading-relaxed text-text-secondary">
						Architected and maintained high-throughput payment reconciliation pipeline handling
						transaction orchestration. Implemented idempotency layer preventing duplicate debits
						across banking gateways.
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
		</div>
	</section>

	<!-- Section 04: Projects (#projects) -->
	<section id="projects" class="scroll-mt-20 space-y-6">
		<SectionHeader
			index="03"
			title="Projects"
			description="Personal distributed systems and payment platforms."
		/>

		<Card hoverable={true}>
			{#snippet header()}
				<div class="flex w-full items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="font-mono text-sm font-semibold text-text-primary">url-shortener</span>
						<Tag variant="default" size="sm">public</Tag>
					</div>
					<span class="font-mono text-xs font-medium text-accent">&lt; 10ms redirect</span>
				</div>
			{/snippet}

			<div class="space-y-4">
				<p class="text-sm leading-relaxed text-text-secondary">
					A high-concurrency URL shortening platform with a Go backend and responsive client,
					designed for fast redirects, Base62 encoding, Redis caching, rate limiting, and real-time
					click analytics.
				</p>

				<div class="flex flex-wrap gap-1.5">
					<Tag variant="highlight">Go</Tag>
					<Tag variant="default">Redis</Tag>
					<Tag variant="default">PostgreSQL</Tag>
					<Tag variant="default">REST API</Tag>
					<Tag variant="default">Docker</Tag>
				</div>

				<div class="flex items-center gap-3 pt-2">
					<Button
						href="https://github.com/Viky-Developer"
						target="_blank"
						rel="noreferrer"
						variant="primary"
						size="sm"
					>
						<GithubIcon size={14} />
						<span>GitHub ↗</span>
					</Button>
				</div>
			</div>
		</Card>
	</section>

	<!-- Section 05: Stack (#stack) -->
	<section id="stack" class="scroll-mt-20 space-y-6">
		<SectionHeader
			index="04"
			title="Stack"
			description="Technical environment, runtimes, and engineering practices."
		/>

		<div class="space-y-6 rounded-md border border-border bg-surface-primary p-6">
			<div class="space-y-3">
				<h3 class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
					backend:
				</h3>
				<div class="flex flex-wrap gap-2">
					<Tag variant="highlight">Go (Primary)</Tag>
					<Tag variant="default">TypeScript</Tag>
					<Tag variant="default">SQL</Tag>
					<Tag variant="default">Gin</Tag>
					<Tag variant="default">Microservices</Tag>
					<Tag variant="default">Distributed Systems</Tag>
					<Tag variant="default">REST APIs</Tag>
					<Tag variant="default">Clean Architecture</Tag>
				</div>
			</div>

			<div class="space-y-3 border-t border-divider pt-4">
				<h3 class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
					data & messaging:
				</h3>
				<div class="flex flex-wrap gap-2">
					<Tag variant="default">PostgreSQL</Tag>
					<Tag variant="default">DynamoDB</Tag>
					<Tag variant="default">Redis</Tag>
					<Tag variant="default">Kafka</Tag>
					<Tag variant="default">Valkey</Tag>
					<Tag variant="default">RabbitMQ</Tag>
				</div>
			</div>

			<div class="space-y-3 border-t border-divider pt-4">
				<h3 class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
					cloud & infrastructure:
				</h3>
				<div class="flex flex-wrap gap-2">
					<Tag variant="default">AWS (EC2, S3, KMS, RDS, Lambda, SQS)</Tag>
					<Tag variant="default">Docker</Tag>
					<Tag variant="default">AWS ECS</Tag>
					<Tag variant="default">GitHub Actions</Tag>
					<Tag variant="default">Terraform</Tag>
					<Tag variant="default">TDD</Tag>
				</div>
			</div>
		</div>
	</section>

	<!-- Section 06: Background (#background) -->
	<section id="background" class="scroll-mt-20 space-y-6">
		<SectionHeader
			index="05"
			title="Background"
			description="Academic foundation and engineering certifications."
		/>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<Card hoverable={true}>
				<div class="space-y-2">
					<span class="font-mono text-xs text-text-muted">Education</span>
					<h3 class="font-sans text-base font-semibold text-text-primary">
						Bachelor of Engineering
					</h3>
					<p class="text-sm text-text-secondary">Computer Science & Engineering</p>
				</div>
			</Card>

			<Card hoverable={true}>
				<div class="space-y-2">
					<span class="font-mono text-xs text-accent">Core Focus</span>
					<h3 class="font-sans text-base font-semibold text-text-primary">
						Payment Architecture & FinTech
					</h3>
					<p class="text-sm text-text-secondary">
						Transaction Orchestration, Caching, and Banking Integrations
					</p>
				</div>
			</Card>
		</div>
	</section>

	<!-- Section 07: Contact (#contact) -->
	<section id="contact" class="scroll-mt-20 space-y-6 pb-12">
		<SectionHeader
			index="06"
			title="Contact"
			description="Open for high-impact backend and payment infrastructure roles."
		/>

		<div
			class="flex flex-col gap-6 rounded-md border border-border bg-surface-primary p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-8"
		>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<TerminalIcon size={16} />
					<span class="font-mono text-xs font-semibold text-accent"
						>vignesh@portfolio:~$ contact</span
					>
				</div>
				<h3 class="font-sans text-2xl font-semibold text-text-primary">Let's talk engineering.</h3>
				<p class="max-w-md text-sm text-text-secondary">
					Available for backend engineering opportunities focusing on Go, payment systems, and
					distributed platforms.
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<Button href="mailto:vickyseeman2017@gmail.com" variant="primary" size="md">
					<MailIcon size={16} />
					<span>Email Me</span>
				</Button>
				<Button
					href="https://github.com/Viky-Developer"
					target="_blank"
					rel="noreferrer"
					variant="outline"
					size="md"
				>
					<GithubIcon size={16} />
					<span>GitHub</span>
				</Button>
				<Button
					href="https://linkedin.com"
					target="_blank"
					rel="noreferrer"
					variant="outline"
					size="md"
				>
					<LinkedinIcon size={16} />
					<span>LinkedIn</span>
				</Button>
			</div>
		</div>
	</section>
</main>
