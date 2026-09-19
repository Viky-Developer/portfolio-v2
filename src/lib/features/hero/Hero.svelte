<script lang="ts">
	import { Button, Tag, ArrowRightIcon } from '$lib';

	interface Metric {
		value: string;
		label: string;
		highlight?: boolean;
	}

	const metrics: Metric[] = [
		{ value: '2+ Years', label: 'Backend Experience' },
		{ value: '15+', label: 'APIs Built' },
		{ value: 'FinTech', label: 'Domain Focus', highlight: true },
		{ value: '< 10ms', label: 'Target Latency' }
	];

	const technologies = [
		{ name: 'Go', primary: true },
		{ name: 'PostgreSQL', primary: false },
		{ name: 'Redis', primary: false },
		{ name: 'AWS', primary: false },
		{ name: 'Docker', primary: false },
		{ name: 'RabbitMQ', primary: false },
		{ name: 'Kafka', primary: false }
	];
</script>

<section id="hero" class="scroll-mt-24 space-y-8 pt-2 sm:pt-4" aria-labelledby="hero-title">
	<!-- Role & Main Heading -->
	<div class="space-y-4">
		<div class="flex items-center gap-2">
			<span class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
				Backend Software Engineer
			</span>
		</div>

		<h1
			id="hero-title"
			class="max-w-3xl font-sans text-4xl leading-[1.12] font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
		>
			Building reliable systems behind digital payments.
		</h1>

		<p class="max-w-2xl font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
			I build backend and payment infrastructure using Go, with a focus on reliability, performance,
			and distributed systems.
		</p>
	</div>

	<!-- Primary Action Controls -->
	<div class="flex flex-wrap items-center gap-3">
		<Button href="#projects" variant="primary" size="md">
			<span>Explore My Work</span>
			<ArrowRightIcon size={14} />
		</Button>
		<Button href="#contact" variant="secondary" size="md">
			<span>Get in Touch</span>
		</Button>
	</div>

	<!-- Lower Metadata: Metrics & Technologies -->
	<div class="space-y-6 border-t border-divider pt-6">
		<!-- Key Metrics Band -->
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
			{#each metrics as metric (metric.label)}
				<div class="space-y-1">
					<div
						class="font-sans text-2xl font-semibold tabular-nums {metric.highlight
							? 'text-accent uppercase'
							: 'text-text-primary'}"
					>
						{metric.value}
					</div>
					<div class="font-mono text-[11px] tracking-wider text-text-muted uppercase">
						{metric.label}
					</div>
				</div>
			{/each}
		</div>

		<!-- Technologies & System Metadata Strip -->
		<div class="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex flex-wrap items-center gap-2">
				<span class="mr-1 font-mono text-[11px] tracking-wider text-text-muted uppercase">
					Stack:
				</span>
				{#each technologies as tech (tech.name)}
					<Tag variant={tech.primary ? 'highlight' : 'default'} size="sm">
						{tech.name}
					</Tag>
				{/each}
			</div>

			<div
				class="flex flex-wrap items-center gap-2 font-mono text-[11px] text-text-muted select-none"
				aria-label="System Metadata"
			>
				<span>main</span>
				<span class="text-border" aria-hidden="true">•</span>
				<span>Go</span>
				<span class="text-border" aria-hidden="true">•</span>
				<span>Payments</span>
				<span class="text-border" aria-hidden="true">•</span>
				<span>Chennai, IN</span>
			</div>
		</div>
	</div>
</section>
