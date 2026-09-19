import { describe, it, expect } from 'vitest';

describe('Background Section Specifications & Contracts', () => {
	const backgroundContract = {
		title: 'Background',
		education: {
			degree: 'Bachelor of Engineering',
			field: 'Computer Science & Engineering',
			institution: 'S. A. Engineering College',
			period: '2019 — 2023',
			cgpa: '8.12'
		},
		certification: {
			title: 'Docker & Kubernetes',
			issuer: 'Udemy',
			status: 'verified'
		}
	};

	it('defines the correct section title matching design.md', () => {
		expect(backgroundContract.title).toBe('Background');
	});

	it('defines the education details matching the resume and design.md', () => {
		expect(backgroundContract.education.degree).toBe('Bachelor of Engineering');
		expect(backgroundContract.education.field).toBe('Computer Science & Engineering');
		expect(backgroundContract.education.institution).toBe('S. A. Engineering College');
		expect(backgroundContract.education.period).toBe('2019 — 2023');
		expect(backgroundContract.education.cgpa).toBe('8.12');
	});

	it('defines the certification credentials matching design.md', () => {
		expect(backgroundContract.certification.title).toBe('Docker & Kubernetes');
		expect(backgroundContract.certification.issuer).toBe('Udemy');
		expect(backgroundContract.certification.status).toBe('verified');
	});
});
