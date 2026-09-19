import { describe, it, expect } from 'vitest';
import { contactChannels, contactDetails, terminalQuickCommands } from './contactData';

describe('Contact Section Specifications & Contracts', () => {
	it('defines all required contact channels matching design.md', () => {
		const channelIds = contactChannels.map((c) => c.id);
		expect(channelIds).toContain('github');
		expect(channelIds).toContain('linkedin');
		expect(channelIds).toContain('email');
	});

	it('configures valid email contact information and mailto link', () => {
		const emailChannel = contactChannels.find((c) => c.id === 'email');
		expect(emailChannel).toBeDefined();
		expect(emailChannel?.value).toBe('vickyseeman2017@gmail.com');
		expect(emailChannel?.href).toBe('mailto:vickyseeman2017@gmail.com');
		expect(emailChannel?.isExternal).toBe(false);
		expect(emailChannel?.isPrimaryAction).toBe(true);
	});

	it('configures valid LinkedIn profile link with external target', () => {
		const linkedinChannel = contactChannels.find((c) => c.id === 'linkedin');
		expect(linkedinChannel).toBeDefined();
		expect(linkedinChannel?.value).toContain('linkedin.com/in/vignesh8474');
		expect(linkedinChannel?.href).toBe('https://linkedin.com/in/vignesh8474');
		expect(linkedinChannel?.isExternal).toBe(true);
	});

	it('configures valid GitHub profile link with external target', () => {
		const githubChannel = contactChannels.find((c) => c.id === 'github');
		expect(githubChannel).toBeDefined();
		expect(githubChannel?.value).toContain('github.com/Viky-Developer');
		expect(githubChannel?.href).toBe('https://github.com/Viky-Developer');
		expect(githubChannel?.isExternal).toBe(true);
	});

	it('defines terminal session host and identity information', () => {
		expect(contactDetails.handle).toBe('vignesh');
		expect(contactDetails.host).toBe('portfolio');
		expect(contactDetails.name).toBe('Vignesh');
		expect(contactDetails.role).toBe('Backend Software Engineer');
	});

	it('provides quick terminal commands for interactive discovery', () => {
		expect(terminalQuickCommands).toContain('whoami');
		expect(terminalQuickCommands).toContain('stack');
		expect(terminalQuickCommands).toContain('contact');
		expect(terminalQuickCommands).toContain('help');
		expect(terminalQuickCommands).toContain('clear');
	});
});
