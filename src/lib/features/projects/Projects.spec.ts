import { describe, it, expect } from 'vitest';

describe('Projects Section Specifications & Contracts', () => {
	const projectsContract = {
		index: '04',
		title: 'Projects',
		projects: [
			{
				id: 'url-shortener',
				name: 'url-shortener',
				visibility: 'public',
				technologies: ['Go', 'Redis', 'PostgreSQL', 'RabbitMQ', 'REST API', 'Docker'],
				metric: '< 10ms',
				features: [
					'Base62 encoding',
					'Redis caching',
					'RabbitMQ async analytics',
					'Rate limiting',
					'Link expiration'
				],
				hasInteractiveConsole: true
			}
		],
		apiConsoleContract: {
			method: 'POST',
			endpoint: '/api/v1/urls',
			responseStatus: '201 CREATED',
			targetLatency: '< 10ms'
		}
	};

	it('defines section index 04 and Projects title matching design.md', () => {
		expect(projectsContract.index).toBe('04');
		expect(projectsContract.title).toBe('Projects');
	});

	it('includes the flagship url-shortener project with full stack and sub-10ms metric', () => {
		const urlShortener = projectsContract.projects.find((p) => p.id === 'url-shortener');
		expect(urlShortener).toBeDefined();
		expect(urlShortener?.name).toBe('url-shortener');
		expect(urlShortener?.visibility).toBe('public');
		expect(urlShortener?.technologies).toContain('Go');
		expect(urlShortener?.technologies).toContain('Redis');
		expect(urlShortener?.technologies).toContain('PostgreSQL');
		expect(urlShortener?.technologies).toContain('RabbitMQ');
		expect(urlShortener?.technologies).toContain('Docker');
		expect(urlShortener?.metric).toBe('< 10ms');
		expect(urlShortener?.features).toContain('Base62 encoding');
		expect(urlShortener?.features).toContain('RabbitMQ async analytics');
		expect(urlShortener?.hasInteractiveConsole).toBe(true);
	});

	it('defines the API console request and trace contract', () => {
		expect(projectsContract.apiConsoleContract.method).toBe('POST');
		expect(projectsContract.apiConsoleContract.endpoint).toBe('/api/v1/urls');
		expect(projectsContract.apiConsoleContract.responseStatus).toBe('201 CREATED');
	});
});
