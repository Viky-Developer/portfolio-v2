<script lang="ts">
	import { Hero, About, Experience, Projects, Stack, Background, Contact } from '$lib';
</script>

<svelte:head>
	<title>Vignesh S — Backend Software Engineer</title>
</svelte:head>

<main class="mx-auto w-full max-w-5xl min-w-0 space-y-12 px-4 py-6 sm:px-8 sm:py-10">
	<!-- Hero / Engineering Workspace -->
	<Hero />

	<!-- About / README.md -->
	<About />

	<!-- Experience / Git History -->
	<Experience />

	<!-- Projects / Repositories -->
	<Projects />

	<!-- Stack / stack.yaml -->
	<Stack />

	<!-- Background / Education & Certifications -->
	<Background />

	<!-- Contact / Terminal Session -->
	<Contact />

	<!-- Editorial Footer -->
	<footer
		class="mt-16 border-t border-divider pt-8 pb-12 text-center sm:flex sm:items-center sm:justify-between sm:text-left"
	>
		<p class="font-mono text-xs text-text-secondary">
			© {new Date().getFullYear()} Vignesh ·
			<span class="text-accent">Backend Software Engineer</span>
		</p>

		<div
			class="mt-4 flex items-center justify-center gap-4 font-mono text-xs text-text-muted sm:mt-0"
		>
			<a
				href="#hero"
				class="transition-colors duration-150 hover:text-accent focus-visible:text-accent focus-visible:outline-hidden"
			>
				Back to top ↑
			</a>
			<span class="text-text-muted/40" aria-hidden="true">·</span>
			<a
				href="https://github.com/Viky-Developer/portfolio-v2"
				target="_blank"
				rel="noreferrer noopener"
				class="transition-colors duration-150 hover:text-accent focus-visible:text-accent focus-visible:outline-hidden"
			>
				Source Code
			</a>
		</div>
	</footer>
</main>
