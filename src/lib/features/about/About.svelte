<script lang="ts">
	import { SectionHeader, Card, Tag, FileTextIcon } from '$lib';

	const focusAreas = [
		'Go backend engineering',
		'Payment infrastructure',
		'Distributed systems',
		'Performance & reliability',
		'Cloud infrastructure'
	];
</script>

<section id="about" class="scroll-mt-24 space-y-6 pt-8 pb-8" aria-labelledby="about-title">
	<!-- Section Header: 02 / ABOUT -->
	<SectionHeader
		index="02"
		title="About"
		description="Background, engineering focus, and core philosophy."
	/>

	<!-- README.md Container -->
	<Card hoverable={false} padding="none" class="overflow-hidden">
		{#snippet header()}
			<div class="flex w-full items-center justify-between">
				<div class="flex items-center gap-2 font-mono text-xs text-text-muted">
					<FileTextIcon size={14} />
					<span class="font-medium text-text-primary">ABOUT</span>
					<span class="text-divider">/</span>
					<span class="text-text-muted">README.md</span>
				</div>
				<Tag variant="default" size="sm">markdown</Tag>
			</div>
		{/snippet}

		<div class="space-y-6 p-6 sm:p-8">
			<!-- Headline with Markdown syntax cue -->
			<div class="space-y-4">
				<h2
					id="about-title"
					class="flex items-baseline font-sans text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
				>
					<span
						class="mr-2.5 font-mono text-xl text-accent select-none sm:text-2xl"
						aria-hidden="true"
					>
						#
					</span>
					<span>Hello, I'm Vignesh.</span>
				</h2>

				<div
					class="max-w-3xl space-y-4 font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
				>
					<p>
						I'm a Backend Software Engineer based in Chennai, specializing in payment systems and
						financial technology.
					</p>
					<p>
						My work focuses on building backend services that handle transactions reliably — from
						payment orchestration and banking integrations to caching, asynchronous processing, and
						secure financial workflows.
					</p>
				</div>
			</div>

			<!-- Currently Focused On -->
			<div class="space-y-3 border-t border-divider pt-6">
				<h3
					class="flex items-baseline font-sans text-base font-semibold text-text-primary sm:text-lg"
				>
					<span class="mr-2 font-mono text-sm text-accent select-none" aria-hidden="true">##</span>
					<span>Currently focused on</span>
				</h3>

				<ul class="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
					{#each focusAreas as area (area)}
						<li class="flex items-center font-sans text-sm text-text-primary sm:text-base">
							<span class="mr-2.5 font-mono text-accent select-none" aria-hidden="true">→</span>
							<span>{area}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Card>
</section>
