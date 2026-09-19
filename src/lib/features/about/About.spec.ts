import { describe, it, expect } from 'vitest';

describe('About Me Section Specifications & Contracts', () => {
	const aboutContract = {
		index: '02',
		title: 'About',
		fileMetaphor: 'ABOUT / README.md',
		headline: "Hello, I'm Vignesh.",
		location: 'Chennai',
		specialization: 'payment systems and financial technology',
		focusAreas: [
			'Go backend engineering',
			'Payment infrastructure',
			'Distributed systems',
			'Performance & reliability',
			'Cloud infrastructure'
		]
	};

	it('defines the correct section number and title matching design.md', () => {
		expect(aboutContract.index).toBe('02');
		expect(aboutContract.title).toBe('About');
		expect(aboutContract.fileMetaphor).toBe('ABOUT / README.md');
	});

	it('includes the personal greeting and engineering focus', () => {
		expect(aboutContract.headline).toBe("Hello, I'm Vignesh.");
		expect(aboutContract.location).toBe('Chennai');
		expect(aboutContract.specialization).toContain('payment systems');
	});

	it('lists all 5 core technical focus areas', () => {
		expect(aboutContract.focusAreas).toHaveLength(5);
		expect(aboutContract.focusAreas).toContain('Go backend engineering');
		expect(aboutContract.focusAreas).toContain('Payment infrastructure');
		expect(aboutContract.focusAreas).toContain('Distributed systems');
		expect(aboutContract.focusAreas).toContain('Performance & reliability');
		expect(aboutContract.focusAreas).toContain('Cloud infrastructure');
	});
});
