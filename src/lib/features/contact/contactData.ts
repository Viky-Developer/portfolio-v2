export interface ContactChannel {
	id: string;
	label: string;
	value: string;
	displayValue: string;
	href: string;
	isExternal: boolean;
	icon: 'mail' | 'linkedin' | 'github';
	isPrimaryAction?: boolean;
}

export interface TerminalCommandResponse {
	command: string;
	output: string;
	type?: 'info' | 'success' | 'warning' | 'error';
}

export const contactChannels: ContactChannel[] = [
	{
		id: 'github',
		label: 'github',
		value: 'github.com/Viky-Developer',
		displayValue: 'github.com/Viky-Developer',
		href: 'https://github.com/Viky-Developer',
		isExternal: true,
		icon: 'github'
	},
	{
		id: 'linkedin',
		label: 'linkedin',
		value: 'linkedin.com/in/vignesh8474',
		displayValue: 'linkedin.com/in/vignesh8474',
		href: 'https://linkedin.com/in/vignesh8474',
		isExternal: true,
		icon: 'linkedin'
	},
	{
		id: 'email',
		label: 'email',
		value: 'vickyseeman2017@gmail.com',
		displayValue: 'vickyseeman2017@gmail.com',
		href: 'mailto:vickyseeman2017@gmail.com',
		isExternal: false,
		icon: 'mail',
		isPrimaryAction: true
	}
];

export const contactDetails = {
	name: 'Vignesh',
	handle: 'vignesh',
	host: 'portfolio',
	role: 'Backend Software Engineer',
	focus:
		'Go, distributed systems, payment orchestration (disbursements & collections), and cloud infrastructure.',
	location: 'Chennai, India',
	availability: 'Open to backend engineering & payment infrastructure roles'
};

export const terminalQuickCommands = ['whoami', 'stack', 'contact', 'help', 'clear'];
