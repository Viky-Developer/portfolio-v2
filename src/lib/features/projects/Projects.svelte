<script lang="ts">
	import { SectionHeader, Card, Tag, Button, ExternalLinkIcon, GithubIcon } from '$lib';
	import ApiConsole from './ApiConsole.svelte';

	interface Project {
		id: string;
		index: string;
		name: string;
		visibility: string;
		headline: string;
		description: string;
		technologies: string[];
		metric: {
			value: string;
			label: string;
		};
		features: string[];
		githubUrl: string;
		liveUrl?: string;
		hasInteractiveConsole?: boolean;
	}

	const projects: Project[] = [
		{
			id: 'url-shortener',
			index: '01',
			name: 'linkpulse',
			visibility: 'public',
			headline: 'High-concurrency URL shortening platform built with Go.',
			description:
				'A high-concurrency URL shortening platform with a Go backend and responsive client, designed for fast redirects, custom Base62 encoding, Redis caching, rate limiting, and asynchronous click analytics store via RabbitMQ.',
			technologies: [
				'Go',
				'Redis',
				'PostgreSQL',
				'RabbitMQ',
				'Prometheus',
				'Grafana',
				'Docker',
				'REST API'
			],
			metric: {
				value: '< 10ms',
				label: 'Redirect latency'
			},
			features: [
				'Base62 encoding',
				'Redis caching',
				'RabbitMQ async analytics',
				'Rate limiting',
				'Link expiration'
			],
			githubUrl: 'https://github.com/Viky-Developer/url-shortner',
			liveUrl: 'https://linkpulse.netlify.app/',
			hasInteractiveConsole: true
		}
	];

	let isConsoleOpen = $state(false);

	function toggleConsole() {
		isConsoleOpen = !isConsoleOpen;
	}
</script>

<section id="projects" class="scroll-mt-24 space-y-8" aria-labelledby="projects-title">
	<!-- Section Header: PROJECTS -->
	<SectionHeader
		title="Projects"
		description="Personal repositories, distributed systems, and live backend request traces."
	/>

	<!-- Projects List -->
	<div class="space-y-8">
		{#each projects as project (project.id)}
			<div class="space-y-4">
				<Card hoverable={true} padding="normal">
					<div class="space-y-6">
						<!-- Repository Top Bar -->
						<div
							class="flex flex-wrap items-center justify-between gap-3 border-b border-divider pb-4"
						>
							<div class="flex items-center gap-3">
								<span class="font-mono text-sm font-semibold text-accent select-none">
									{project.index}
								</span>
								<h3
									class="font-mono text-base font-semibold tracking-tight text-text-primary sm:text-lg"
								>
									{project.name}
								</h3>
								<Tag variant="default" size="sm">{project.visibility}</Tag>
							</div>

							<!-- Metric Badge -->
							<div class="flex items-center gap-2 font-mono text-xs">
								<span class="text-text-muted">{project.metric.label}:</span>
								<span class="font-semibold text-accent">{project.metric.value}</span>
							</div>
						</div>

						<!-- Headline & Narrative Description -->
						<div class="space-y-2">
							<p class="font-sans text-base font-medium text-text-primary">
								{project.headline}
							</p>
							<p class="font-sans text-sm leading-relaxed text-text-secondary">
								{project.description}
							</p>
						</div>

						<!-- Tech Stack Tags -->
						<div class="space-y-2">
							<span
								class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase"
							>
								Tech Stack
							</span>
							<div class="flex flex-wrap items-center gap-1.5 pt-0.5">
								{#each project.technologies as tech (tech)}
									<Tag variant={tech === 'Go' ? 'highlight' : 'default'} size="sm">
										{tech}
									</Tag>
								{/each}
							</div>
						</div>

						<!-- Core Architectural Features Grid -->
						<div class="space-y-2 border-t border-divider pt-4">
							<span
								class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase"
							>
								Core Features
							</span>
							<ul class="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 md:grid-cols-3">
								{#each project.features as feature (feature)}
									<li class="flex items-center font-sans text-xs text-text-secondary sm:text-sm">
										<span class="mr-2 font-mono text-accent select-none" aria-hidden="true">→</span>
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Card Actions -->
						<div class="flex flex-wrap items-center gap-3 border-t border-divider pt-4">
							{#if project.hasInteractiveConsole}
								<Button
									variant={isConsoleOpen ? 'secondary' : 'primary'}
									size="sm"
									onclick={toggleConsole}
									aria-expanded={isConsoleOpen}
								>
									<span>{isConsoleOpen ? 'Hide Request Trace ↑' : 'View Request Trace ↓'}</span>
								</Button>
							{/if}

							{#if project.liveUrl}
								<Button
									href={project.liveUrl}
									target="_blank"
									rel="noreferrer"
									variant="outline"
									size="sm"
								>
									<span>Live Demo</span>
									<ExternalLinkIcon size={12} />
								</Button>
							{/if}

							<Button
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
								variant="outline"
								size="sm"
							>
								<GithubIcon size={14} />
								<span>GitHub</span>
								<ExternalLinkIcon size={12} />
							</Button>
						</div>
					</div>
				</Card>

				<!-- Expandable Interactive API Console for Primary Project -->
				{#if project.hasInteractiveConsole && isConsoleOpen}
					<div class="pt-2">
						<ApiConsole onClose={toggleConsole} />
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
