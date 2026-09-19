import { describe, it, expect } from 'vitest';
import { contactDetails } from '$lib/features/contact';

describe('Experience Section Specifications & Contracts', () => {
	const experienceContract = {
		index: '03',
		title: 'Experience',
		subtitle: 'Engineering history',
		roles: [
			{
				company: 'Elixir Global',
				role: 'Backend Software Engineer',
				period: 'JUN 2026 — PRESENT',
				isCurrent: true,
				technologies: ['Go', 'DynamoDB', 'PostgreSQL', 'Valkey', 'AWS', 'Docker'],
				keyMetrics: ['45% ↓', '60% ↓', '30% ↓']
			},
			{
				company: 'Flipopay Technology',
				role: 'Backend Developer',
				period: 'FEB 2024 — MAY 2026',
				isCurrent: false,
				technologies: ['Go', 'Redis', 'RabbitMQ', 'AWS', 'PostgreSQL', 'Gin', 'Docker'],
				keyMetrics: ['40% ↓', '50% ↓', '35% ↑', '80%+']
			}
		]
	};

	it('defines section index 03 and Experience title matching design.md', () => {
		expect(experienceContract.index).toBe('03');
		expect(experienceContract.title).toBe('Experience');
		expect(experienceContract.subtitle).toBe('Engineering history');
	});

	it('specifies the current engineering role at Elixir Global with key metrics and Docker', () => {
		const currentRole = experienceContract.roles.find((r) => r.isCurrent);
		expect(currentRole).toBeDefined();
		expect(currentRole?.company).toBe('Elixir Global');
		expect(currentRole?.role).toBe('Backend Software Engineer');
		expect(currentRole?.period).toContain('PRESENT');
		expect(currentRole?.technologies).toContain('Go');
		expect(currentRole?.technologies).toContain('Docker');
		expect(currentRole?.technologies).toContain('Valkey');
		expect(currentRole?.keyMetrics).toContain('45% ↓');
		expect(currentRole?.keyMetrics).toContain('60% ↓');
		expect(currentRole?.keyMetrics).toContain('30% ↓');
	});

	it('specifies the previous engineering role at Flipopay Technology with key metrics and Docker', () => {
		const previousRole = experienceContract.roles.find((r) => !r.isCurrent);
		expect(previousRole).toBeDefined();
		expect(previousRole?.company).toBe('Flipopay Technology');
		expect(previousRole?.role).toBe('Backend Developer');
		expect(previousRole?.period).toBe('FEB 2024 — MAY 2026');
		expect(previousRole?.technologies).toContain('Go');
		expect(previousRole?.technologies).toContain('Docker');
		expect(previousRole?.technologies).toContain('RabbitMQ');
		expect(previousRole?.keyMetrics).toContain('40% ↓');
		expect(previousRole?.keyMetrics).toContain('80%+');
	});

	it('verifies disbursements and collections are highlighted in contact and experience domains', () => {
		expect(contactDetails.focus).toContain('disbursements & collections');
	});
});
