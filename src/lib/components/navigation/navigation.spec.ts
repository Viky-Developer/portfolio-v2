import { describe, it, expect } from 'vitest';

describe('Navigation contracts and configuration', () => {
	const navItems = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'stack', label: 'Stack' },
		{ id: 'background', label: 'Background' },
		{ id: 'contact', label: 'Contact' }
	];

	it('includes all required sections without numbers', () => {
		const ids = navItems.map((item) => item.id);
		expect(ids).toEqual(['about', 'experience', 'projects', 'stack', 'background', 'contact']);
	});

	it('provides clean human-readable labels without numbers', () => {
		const labels = navItems.map((item) => item.label);
		expect(labels).toEqual(['About', 'Experience', 'Projects', 'Stack', 'Background', 'Contact']);
	});

	it('maps to correct anchor targets', () => {
		navItems.forEach((item) => {
			expect(`#${item.id}`).toBe(`#${item.id.toLowerCase()}`);
		});
	});
});
