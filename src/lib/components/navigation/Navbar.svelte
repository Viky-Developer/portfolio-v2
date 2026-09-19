<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Button from '../ui/Button.svelte';
	import NavLink from './NavLink.svelte';
	import FileTextIcon from '../icons/FileTextIcon.svelte';
	import MenuIcon from '../icons/MenuIcon.svelte';
	import CloseIcon from '../icons/CloseIcon.svelte';

	interface NavItem {
		id: string;
		label: string;
	}

	const navItems: NavItem[] = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'stack', label: 'Stack' },
		{ id: 'background', label: 'Background' },
		{ id: 'contact', label: 'Contact' }
	];

	let isMobileMenuOpen = $state(false);
	let activeSection = $state('');

	function updateActiveSection() {
		const headerOffset = 110;
		let current = '';

		for (const item of navItems) {
			const el = document.getElementById(item.id);
			if (!el) continue;

			const rect = el.getBoundingClientRect();
			if (rect.top <= headerOffset && rect.bottom > headerOffset) {
				current = item.id;
				break;
			}
		}

		if (!current) {
			let closestDist = Infinity;
			for (const item of navItems) {
				const el = document.getElementById(item.id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top <= headerOffset) {
					const dist = Math.abs(rect.top - headerOffset);
					if (dist < closestDist) {
						closestDist = dist;
						current = item.id;
					}
				}
			}
		}

		// If user reached bottom of page, highlight the last section
		if (
			typeof window !== 'undefined' &&
			window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
		) {
			current = navItems[navItems.length - 1].id;
		}

		if (current) {
			activeSection = current;
		} else if (typeof window !== 'undefined' && window.scrollY < 120) {
			activeSection = '';
		}
	}

	function handleNavClick(id: string) {
		activeSection = id;
		closeMobileMenu();
	}

	function toggleMobileMenu() {
		updateActiveSection();
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMobileMenuOpen) {
			closeMobileMenu();
		}
	}

	function getHref(id: string): string {
		const isHome = page.url.pathname === '/';
		return isHome ? `#${id}` : `${resolve('/')}#${id}`;
	}

	onMount(() => {
		const hash = window.location.hash.replace('#', '');
		if (hash && navItems.some((item) => item.id === hash)) {
			activeSection = hash;
		} else {
			updateActiveSection();
		}

		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateActiveSection();
					ticking = false;
				});
				ticking = true;
			}
		};

		const onHashChange = () => {
			const currentHash = window.location.hash.replace('#', '');
			if (currentHash && navItems.some((item) => item.id === currentHash)) {
				activeSection = currentHash;
			} else {
				updateActiveSection();
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('hashchange', onHashChange);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('hashchange', onHashChange);
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<header
	class="fixed top-0 right-0 left-0 z-50 h-16 border-b border-border bg-background/90 shadow-header backdrop-blur-md transition-colors duration-150"
>
	<div class="mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
		<!-- Left: Identity -->
		<div class="flex shrink-0 items-center">
			<a
				href={resolve('/')}
				class="rounded-[4px] font-mono text-[14px] font-semibold tracking-wider text-text-primary transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden"
			>
				VIGNESH.DEV
			</a>
		</div>

		<!-- Center: Desktop Navigation Links -->
		<nav class="hidden md:flex md:items-center md:gap-0.5 lg:gap-1" aria-label="Main Navigation">
			{#each navItems as item (item.id)}
				<NavLink
					href={getHref(item.id)}
					label={item.label}
					active={activeSection === item.id}
					onclick={() => handleNavClick(item.id)}
				/>
			{/each}
		</nav>

		<!-- Right: Resume CTA & Mobile Menu Button -->
		<div class="flex shrink-0 items-center gap-2 sm:gap-3">
			<div class="hidden shrink-0 sm:block">
				<Button href="/resume.pdf" target="_blank" rel="noreferrer" variant="outline" size="sm">
					<FileTextIcon size={14} />
					<span>Resume ↓</span>
				</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				onclick={toggleMobileMenu}
				aria-expanded={isMobileMenuOpen}
				aria-controls="mobile-navigation"
				aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				class="flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-surface-elevated text-text-primary transition-colors duration-150 hover:border-accent/40 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden md:hidden"
			>
				{#if isMobileMenuOpen}
					<CloseIcon size={20} />
				{:else}
					<MenuIcon size={20} />
				{/if}
			</button>
		</div>
	</div>
</header>

<!-- Mobile Navigation Drawer -->
{#if isMobileMenuOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
		onclick={closeMobileMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
		tabindex="-1"
		role="button"
		aria-label="Close menu backdrop"
	></div>

	<!-- Drawer -->
	<div
		id="mobile-navigation"
		class="fixed top-16 right-0 bottom-0 z-40 flex w-72 flex-col justify-between border-l border-border bg-canvas-secondary p-6 shadow-card md:hidden"
		role="dialog"
		aria-modal="true"
		aria-label="Mobile Navigation"
	>
		<div class="space-y-6">
			<div class="font-mono text-xs tracking-wider text-text-muted uppercase">Navigation</div>

			<nav class="flex flex-col space-y-2">
				{#each navItems as item (item.id)}
					<NavLink
						href={getHref(item.id)}
						label={item.label}
						active={activeSection === item.id}
						onclick={() => handleNavClick(item.id)}
						class="w-full justify-start py-2.5 text-[15px]"
					/>
				{/each}
			</nav>
		</div>

		<!-- Drawer Footer Actions -->
		<div class="border-t border-divider pt-6">
			<Button
				href="/resume.pdf"
				target="_blank"
				rel="noreferrer"
				variant="outline"
				size="md"
				class="w-full justify-center"
			>
				<FileTextIcon size={16} />
				<span>Resume ↓</span>
			</Button>
		</div>
	</div>
{/if}
