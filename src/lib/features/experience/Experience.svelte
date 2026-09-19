<script lang="ts">
	import { SectionHeader, Card, Tag } from '$lib';

	interface ExperienceMetric {
		value: string;
		label: string;
		highlight?: boolean;
	}

	interface ExperienceRole {
		year: string;
		isCurrent: boolean;
		title: string;
		company: string;
		domain: string;
		location: string;
		period: string;
		description: string;
		areas: string[];
		technologies: string[];
		metrics: ExperienceMetric[];
	}

	const roles: ExperienceRole[] = [
		{
			year: '2026',
			isCurrent: true,
			title: 'Backend Software Engineer',
			company: 'Elixir Global',
			domain: 'Payment Systems / FinTech',
			location: 'Chennai, India',
			period: 'JUN 2026 — PRESENT',
			description:
				'Building payment orchestration and backend infrastructure in Go across payment aggregators and banking partners.',
			areas: [
				'Go microservices',
				'Unified payment orchestration',
				'Payment links & automated invoices',
				'Chargeback workflows',
				'MFA / RBAC',
				'DynamoDB + PostgreSQL',
				'Valkey caching',
				'Asynchronous notifications'
			],
			technologies: ['Go', 'DynamoDB', 'PostgreSQL', 'Valkey', 'AWS', 'Docker'],
			metrics: [
				{ value: '45% ↓', label: 'DB read latency', highlight: true },
				{ value: '60% ↓', label: 'Query load', highlight: true },
				{ value: '30% ↓', label: 'Dispute turnaround', highlight: true }
			]
		},
		{
			year: '2024',
			isCurrent: false,
			title: 'Backend Developer',
			company: 'Flipopay Technology',
			domain: 'Payment Systems / FinTech',
			location: 'Chennai, India',
			period: 'FEB 2024 — MAY 2026',
			description:
				'Built Go backend services supporting payment processing, banking integrations, payins, payouts, and merchant workflows.',
			areas: [
				'15+ Go REST APIs',
				'Gin framework',
				'Banking API integrations',
				'Payins & payouts engine',
				'Webhooks & idempotency',
				'Redis Lua scripting',
				'Distributed locking',
				'RabbitMQ',
				'AWS KMS',
				'GitHub Actions CI/CD'
			],
			technologies: ['Go', 'Redis', 'RabbitMQ', 'AWS', 'PostgreSQL', 'Gin', 'Docker'],
			metrics: [
				{ value: '40% ↓', label: 'API latency', highlight: true },
				{ value: '50% ↓', label: 'Compute overhead', highlight: true },
				{ value: '35% ↑', label: 'Reconciliation speed', highlight: true },
				{ value: '80%+', label: 'Test coverage', highlight: false }
			]
		}
	];
</script>

<section id="experience" class="scroll-mt-24 space-y-8" aria-labelledby="experience-title">
	<!-- Section Header: 03 / EXPERIENCE -->
	<SectionHeader
		index="03"
		title="Experience"
		description="Engineering history — A timeline of the systems, infrastructure and payment products I've worked on."
	/>

	<!-- Git-Inspired Timeline Container -->
	<div class="relative pl-6 sm:pl-10 md:pl-28">
		<!-- Continuous Timeline Vertical Line -->
		<div
			class="absolute top-3 bottom-4 left-2 w-[2px] bg-border sm:left-3 md:left-20"
			aria-hidden="true"
		></div>

		<!-- Roles List -->
		<div class="space-y-10 sm:space-y-12">
			{#each roles as role (role.company)}
				<div class="group relative">
					<!-- Timeline Year Label (Desktop Column) -->
					<div
						class="hidden font-mono text-xs font-semibold tracking-wider uppercase select-none md:absolute md:top-1 md:-left-20 md:block {role.isCurrent
							? 'text-accent'
							: 'text-text-muted'}"
					>
						{role.year}
					</div>

					<!-- Git Commit Node & Branch Connector -->
					<div
						class="absolute top-1 -left-[23px] flex items-center sm:-left-[27px] md:-left-[39px]"
						aria-hidden="true"
					>
						<!-- Node Circle -->
						<div
							class="relative flex h-4 w-4 items-center justify-center rounded-full {role.isCurrent
								? 'border-2 border-accent bg-background'
								: 'border-2 border-text-muted/60 bg-surface-primary'}"
						>
							{#if role.isCurrent}
								<span class="h-2 w-2 rounded-full bg-accent"></span>
							{/if}
						</div>

						<!-- Horizontal Git Branch Connector Line -->
						<div
							class="h-[2px] w-3 bg-border transition-colors duration-150 group-hover:bg-accent/40 sm:w-4 md:w-5"
						></div>
					</div>

					<!-- Role Card Content -->
					<Card hoverable={true} padding="normal">
						<div class="space-y-5">
							<!-- Role Header & Metadata -->
							<div class="space-y-3">
								<!-- Mobile Year + Period Strip -->
								<div class="flex flex-wrap items-center justify-between gap-2 md:hidden">
									<span
										class="font-mono text-xs font-semibold tracking-wider uppercase {role.isCurrent
											? 'text-accent'
											: 'text-text-muted'}"
									>
										{role.year}
									</span>
									<span
										class="font-mono text-xs tracking-wider {role.isCurrent
											? 'font-medium text-accent'
											: 'text-text-muted'}"
									>
										{role.period}
									</span>
								</div>

								<!-- Title & Period (Desktop) -->
								<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
									<h3
										class="font-sans text-xl font-semibold tracking-tight text-text-primary sm:text-2xl"
									>
										{role.title}
									</h3>
									<span
										class="hidden font-mono text-xs tracking-wider sm:inline-block {role.isCurrent
											? 'font-medium text-accent'
											: 'text-text-muted'}"
									>
										{role.period}
									</span>
								</div>

								<!-- Company, Domain & Location -->
								<div class="flex flex-wrap items-center gap-2 font-mono text-xs text-text-muted">
									<span class="font-sans text-sm font-medium text-text-primary">
										{role.company}
									</span>
									<span class="text-border" aria-hidden="true">•</span>
									<span>{role.domain}</span>
									<span class="text-border" aria-hidden="true">•</span>
									<span>{role.location}</span>
								</div>
							</div>

							<!-- Role Description Narrative -->
							<p class="font-sans text-sm leading-relaxed text-text-secondary sm:text-base">
								{role.description}
							</p>

							<!-- Key Technical Areas / Focus Points -->
							<div class="space-y-2 border-t border-divider pt-4">
								<span
									class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase"
								>
									Key Engineering Focus
								</span>
								<ul class="grid grid-cols-1 gap-1.5 pt-1 sm:grid-cols-2">
									{#each role.areas as area (area)}
										<li class="flex items-center font-sans text-xs text-text-secondary sm:text-sm">
											<span class="mr-2 font-mono text-accent select-none" aria-hidden="true">
												→
											</span>
											<span>{area}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Core Technologies Strip -->
							<div class="space-y-2 border-t border-divider pt-4">
								<span
									class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase"
								>
									Technologies
								</span>
								<div class="flex flex-wrap items-center gap-1.5 pt-1">
									{#each role.technologies as tech (tech)}
										<Tag variant="default" size="sm">
											{tech}
										</Tag>
									{/each}
								</div>
							</div>

							<!-- Impact Metrics Grid -->
							<div class="border-t border-divider pt-4">
								<div
									class="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 {role.metrics.length === 4
										? 'sm:grid-cols-4'
										: 'sm:grid-cols-3'}"
								>
									{#each role.metrics as metric (metric.label)}
										<div
											class="flex flex-col justify-between gap-1.5 rounded-[4px] border border-divider bg-surface-elevated/40 p-3"
										>
											<div
												class="font-sans text-xl font-semibold tabular-nums sm:text-2xl {metric.highlight
													? 'text-accent'
													: 'text-text-primary'}"
											>
												{metric.value}
											</div>
											<div
												class="font-mono text-[10px] leading-snug tracking-normal break-words text-text-muted uppercase sm:text-[11px]"
											>
												{metric.label}
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</Card>
				</div>
			{/each}
		</div>

		<!-- Git History Terminal Node (Origin) -->
		<div class="relative top-6 -left-[20px] flex items-center sm:-left-[24px] md:-left-[36px]">
			<div
				class="h-2.5 w-2.5 rounded-full border border-border bg-surface-elevated"
				title="Timeline Origin"
				aria-hidden="true"
			></div>
			<span class="ml-3 font-mono text-[10px] tracking-wider text-text-muted/60 uppercase">
				Origin
			</span>
		</div>
	</div>
</section>
