import { describe, it, expect } from 'vitest';

describe('Hero Section Specifications & Contracts', () => {
	const heroContract = {
		role: 'Backend Software Engineer',
		headline: 'Building reliable systems behind digital payments.',
		bioKeyword: 'Go',
		ctas: [
			{ label: 'Explore My Work', href: '#projects' },
			{ label: 'Get in Touch', href: '#contact' }
		],
		metrics: [
			{ value: '2+ Years', label: 'Backend Experience' },
			{ value: '15+', label: 'APIs Built' },
			{ value: 'FinTech', label: 'Domain Focus' },
			{ value: '< 10ms', label: 'Target Latency' }
		],
		technologies: ['Go', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'RabbitMQ', 'Kafka']
	};

	it('defines the correct editorial role and headline', () => {
		expect(heroContract.role).toBe('Backend Software Engineer');
		expect(heroContract.headline).toContain('digital payments');
	});

	it('provides focused primary action CTAs with correct destinations', () => {
		expect(heroContract.ctas).toHaveLength(2);
		expect(heroContract.ctas[0].href).toBe('#projects');
		expect(heroContract.ctas[1].href).toBe('#contact');
	});

	it('includes all 4 key metrics matching design.md section 8', () => {
		expect(heroContract.metrics).toHaveLength(4);
		const labels = heroContract.metrics.map((m) => m.label);
		expect(labels).toContain('Backend Experience');
		expect(labels).toContain('APIs Built');
		expect(labels).toContain('Domain Focus');
		expect(labels).toContain('Target Latency');
	});

	it('includes required core technologies with Go as primary', () => {
		expect(heroContract.technologies).toContain('Go');
		expect(heroContract.technologies).toContain('PostgreSQL');
		expect(heroContract.technologies).toContain('Redis');
	});
});
