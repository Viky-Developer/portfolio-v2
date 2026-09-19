<script lang="ts">
	import { SectionHeader, Card, Tag, StatusBadge } from '$lib';

	interface Education {
		degree: string;
		field: string;
		institution: string;
		location: string;
		period: string;
		cgpa: string;
		coursework: string[];
	}

	interface Certification {
		title: string;
		issuer: string;
		status: string;
		description: string;
		skills: string[];
	}

	const education: Education = {
		degree: 'Bachelor of Engineering',
		field: 'Computer Science & Engineering',
		institution: 'S. A. Engineering College',
		location: 'Chennai, India',
		period: '2019 — 2023',
		cgpa: '8.12',
		coursework: [
			'Database Management Systems',
			'Operating Systems',
			'Computer Networks',
			'Object-Oriented Design'
		]
	};

	const certification: Certification = {
		title: 'Docker & Kubernetes',
		issuer: 'Udemy',
		status: 'verified',
		description:
			'Production container workflows, multi-stage Docker builds, container networking, Kubernetes pod orchestration, and deployment configurations.',
		skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'Microservices Deployment']
	};
</script>

<section id="background" class="scroll-mt-24 space-y-8" aria-labelledby="background-title">
	<!-- Section Header: Clean title matching Option B -->
	<SectionHeader
		title="Background"
		description="Academic foundation, engineering education, and industry certifications."
	/>

	<!-- Dual Cards: Education & Certification (Documentation reference-page style) -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<!-- Education Card -->
		<Card hoverable={true} padding="normal" class="flex flex-col justify-between">
			<div class="space-y-5">
				<!-- Header Bar -->
				<div class="flex items-center justify-between border-b border-divider pb-3.5">
					<div class="flex items-center gap-2">
						<span class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
							Education
						</span>
					</div>
					<span class="font-mono text-xs text-text-muted">{education.period}</span>
				</div>

				<!-- Degree & Institution Details -->
				<div class="space-y-1.5">
					<h3 class="font-sans text-base font-semibold text-text-primary sm:text-lg">
						{education.degree}
					</h3>
					<p class="font-sans text-sm font-medium text-accent">
						{education.field}
					</p>
					<div class="flex items-center gap-2 pt-1 font-mono text-xs text-text-muted">
						<span>{education.institution}</span>
						<span>•</span>
						<span>{education.location}</span>
					</div>
				</div>

				<!-- Key Coursework -->
				<div class="space-y-2 border-t border-divider pt-3.5">
					<span class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase">
						Foundational Coursework
					</span>
					<div class="flex flex-wrap gap-1.5 pt-0.5">
						{#each education.coursework as subject (subject)}
							<Tag variant="default" size="sm">{subject}</Tag>
						{/each}
					</div>
				</div>
			</div>

			<!-- Footer Metric: CGPA -->
			<div
				class="mt-6 flex items-center justify-between border-t border-divider pt-4 font-mono text-xs"
			>
				<span class="text-text-muted uppercase">Cumulative GPA</span>
				<div class="flex items-center gap-1.5">
					<span class="text-text-muted">CGPA:</span>
					<span class="font-semibold text-accent">{education.cgpa}</span>
					<span class="text-text-muted">/ 10.0</span>
				</div>
			</div>
		</Card>

		<!-- Certification Card -->
		<Card hoverable={true} padding="normal" class="flex flex-col justify-between">
			<div class="space-y-5">
				<!-- Header Bar -->
				<div class="flex items-center justify-between border-b border-divider pb-3.5">
					<div class="flex items-center gap-2">
						<span class="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
							Certification
						</span>
					</div>
					<StatusBadge status="healthy" label="Verified" />
				</div>

				<!-- Certification Details -->
				<div class="space-y-1.5">
					<h3 class="font-sans text-base font-semibold text-text-primary sm:text-lg">
						{certification.title}
					</h3>
					<p class="font-mono text-xs font-medium text-text-muted">
						Issuer: <span class="text-text-primary">{certification.issuer}</span>
					</p>
					<p class="pt-1 font-sans text-xs leading-relaxed text-text-secondary sm:text-sm">
						{certification.description}
					</p>
				</div>

				<!-- Core Competencies / Skills Covered -->
				<div class="space-y-2 border-t border-divider pt-3.5">
					<span class="font-mono text-[11px] font-medium tracking-wider text-text-muted uppercase">
						Competencies Covered
					</span>
					<div class="flex flex-wrap gap-1.5 pt-0.5">
						{#each certification.skills as skill (skill)}
							<Tag
								variant={skill === 'Docker' || skill === 'Kubernetes' ? 'highlight' : 'default'}
								size="sm"
							>
								{skill}
							</Tag>
						{/each}
					</div>
				</div>
			</div>

			<!-- Footer Credential Status -->
			<div
				class="mt-6 flex items-center justify-between border-t border-divider pt-4 font-mono text-xs"
			>
				<span class="text-text-muted uppercase">Credential Status</span>
				<div class="flex items-center gap-1.5">
					<span class="bg-status-active inline-block h-1.5 w-1.5 rounded-full"></span>
					<span class="text-status-active font-semibold">Completed</span>
				</div>
			</div>
		</Card>
	</div>
</section>
