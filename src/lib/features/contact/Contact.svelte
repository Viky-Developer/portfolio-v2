<script lang="ts">
	import {
		SectionHeader,
		CodePanel,
		Button,
		StatusBadge,
		MailIcon,
		LinkedinIcon,
		GithubIcon,
		ExternalLinkIcon,
		CopyIcon,
		CheckIcon,
		TerminalIcon
	} from '$lib';
	import {
		contactChannels,
		contactDetails,
		terminalQuickCommands,
		type TerminalCommandResponse
	} from './contactData';

	let copied = $state(false);
	let commandInput = $state('');
	let commandHistory = $state<TerminalCommandResponse[]>([]);
	let isInputFocused = $state(false);

	const emailAddress = 'vickyseeman2017@gmail.com';

	async function copyEmailToClipboard() {
		try {
			await navigator.clipboard.writeText(emailAddress);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2200);
		} catch {
			// Fallback if clipboard API is restricted
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2200);
		}
	}

	function executeCommand(rawCmd: string) {
		const cmd = rawCmd.trim();
		if (!cmd) return;

		const lower = cmd.toLowerCase();

		if (lower === 'clear') {
			commandHistory = [];
			commandInput = '';
			return;
		}

		let output: string;
		let type: TerminalCommandResponse['type'] = 'info';

		switch (lower) {
			case 'help':
				output =
					'Available commands:\n  contact   - Display all contact channels and direct links\n  whoami    - Print engineering identity and profile\n  stack     - List core technical stack and runtime focus\n  email     - Display email address\n  clear     - Clear terminal session history';
				break;
			case 'whoami':
				output = `${contactDetails.name} — ${contactDetails.role}\nFocus: ${contactDetails.focus}\nDomain: Payment Disbursements & Collections Orchestration\nLocation: ${contactDetails.location}\nAvailability: ${contactDetails.availability}`;
				type = 'success';
				break;
			case 'contact':
				output = `GitHub:   https://github.com/Viky-Developer\nLinkedIn: https://linkedin.com/in/vignesh8474\nEmail:    ${emailAddress}`;
				type = 'success';
				break;
			case 'stack':
				output =
					'Backend: Go (Gin, Microservices, Clean Architecture)\nProtocols: gRPC, REST APIs\nDatabases: PostgreSQL, Aurora, DynamoDB, MongoDB, Redis, Valkey\nCloud: AWS (EC2, S3, KMS, RDS, Lambda, SQS, SNS, CloudWatch)\nMessaging: RabbitMQ\nSecurity: AES-256, PCI-DSS, Tokenization, AWS KMS\nFrontend: TypeScript, Svelte / SvelteKit, React, Tailwind CSS';
				break;
			case 'email':
				output = `Email: ${emailAddress} (Direct copy available above)`;
				type = 'success';
				break;
			default:
				if (lower.startsWith('echo ')) {
					output = cmd.slice(5);
				} else {
					output = `bash: command not found: ${cmd}. Type "help" to view available commands.`;
					type = 'error';
				}
				break;
		}

		commandHistory = [...commandHistory, { command: cmd, output, type }];
		commandInput = '';
	}

	function handleCommandSubmit(e: SubmitEvent) {
		e.preventDefault();
		executeCommand(commandInput);
	}
</script>

<section id="contact" class="w-full min-w-0 scroll-mt-24 space-y-6" aria-labelledby="contact-title">
	<!-- Section Header: Full-width matching Section 01 - Section 06 -->
	<SectionHeader
		title="Contact"
		description="Have a backend problem worth solving? Let's connect - open for opportunities involving Go, distributed systems, and payment infrastructure."
	/>

	<!-- Terminal-styled Interface per design.md -->
	<CodePanel title="CONTACT / bash" class="w-full">
		{#snippet headerRight()}
			<div class="flex items-center gap-2">
				<StatusBadge status="healthy" pulse={true} size="sm" label="Available" />
				<span class="hidden font-mono text-[11px] text-text-muted sm:inline">
					{contactDetails.handle}@{contactDetails.host}
				</span>
			</div>
		{/snippet}

		<div class="space-y-4 font-mono">
			<!-- Initial Contact Command Line -->
			<div class="flex items-center gap-2 text-xs sm:text-sm">
				<span class="font-semibold text-accent select-none">
					{contactDetails.handle}@{contactDetails.host}:~$
				</span>
				<span class="text-text-primary">contact</span>
			</div>

			<!-- Monospace Contact Channels Table per design.md -->
			<div
				class="grid grid-cols-1 gap-y-2.5 rounded-sm border border-border/40 bg-surface-primary/30 p-3 text-xs sm:grid-cols-[100px_1fr] sm:gap-x-4 sm:p-4 sm:text-sm"
			>
				{#each contactChannels as channel (channel.id)}
					<div class="font-semibold text-text-muted select-none sm:font-normal">
						{channel.label}
					</div>
					<div class="min-w-0 font-mono text-text-secondary select-all">
						<span class="truncate">{channel.displayValue}</span>
					</div>
				{/each}
			</div>

			<!-- Normal Clickable Action Buttons (Critical UX Rule: Always Visible) -->
			<div class="flex flex-wrap items-center gap-3 pt-2">
				<!-- Email Action -->
				<Button href="mailto:{emailAddress}" variant="secondary" size="md">
					<MailIcon size={16} />
					<span>Email Me</span>
				</Button>

				<!-- Copy Email Shortcut -->
				<Button
					type="button"
					variant="secondary"
					size="md"
					onclick={copyEmailToClipboard}
					aria-label="Copy email address to clipboard"
				>
					{#if copied}
						<CheckIcon size={16} class="text-accent" />
						<span class="text-accent">Copied!</span>
					{:else}
						<CopyIcon size={16} />
						<span>Copy Email</span>
					{/if}
				</Button>

				<!-- LinkedIn -->
				<Button
					href="https://linkedin.com/in/vignesh8474"
					target="_blank"
					rel="noreferrer noopener"
					variant="secondary"
					size="md"
				>
					<LinkedinIcon size={16} />
					<span>LinkedIn</span>
					<ExternalLinkIcon size={13} class="opacity-60" />
				</Button>

				<!-- GitHub -->
				<Button
					href="https://github.com/Viky-Developer"
					target="_blank"
					rel="noreferrer noopener"
					variant="secondary"
					size="md"
				>
					<GithubIcon size={16} />
					<span>GitHub</span>
					<ExternalLinkIcon size={13} class="opacity-60" />
				</Button>
			</div>

			<!-- Command Execution History (if interactive terminal used) -->
			{#if commandHistory.length > 0}
				<div class="space-y-3 border-t border-divider/60 pt-4 text-xs sm:text-sm">
					{#each commandHistory as item, index (index)}
						<div class="space-y-1">
							<div class="flex items-center gap-2">
								<span class="font-semibold text-accent select-none">
									{contactDetails.handle}@{contactDetails.host}:~$
								</span>
								<span class="text-text-primary">{item.command}</span>
							</div>
							<div
								class="pl-2 font-mono whitespace-pre-wrap sm:pl-4 {item.type === 'error'
									? 'text-status-error'
									: item.type === 'success'
										? 'text-accent'
										: 'text-text-secondary'}"
							>
								{item.output}
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Interactive Terminal Prompt (with Soft Sage cursor per design.md) -->
			<div class="border-t border-divider/60 pt-3">
				<form onsubmit={handleCommandSubmit} class="flex items-center gap-2 text-xs sm:text-sm">
					<label
						for="terminal-input"
						class="flex shrink-0 items-center gap-1 font-semibold text-accent select-none"
					>
						<span>{contactDetails.handle}@{contactDetails.host}:~$</span>
					</label>

					<div class="relative flex min-w-0 flex-1 items-center">
						<input
							id="terminal-input"
							type="text"
							bind:value={commandInput}
							onfocus={() => (isInputFocused = true)}
							onblur={() => (isInputFocused = false)}
							placeholder={isInputFocused ? '' : 'Type "help" or click below...'}
							class="w-full min-w-0 bg-transparent text-text-primary caret-accent outline-hidden placeholder:text-text-muted/40"
							autocomplete="off"
							spellcheck="false"
							aria-label="Terminal command input"
						/>
						<!-- Soft Sage Blinking Block Cursor -->
						{#if !commandInput}
							<span
								class="inline-block h-4 w-2 shrink-0 animate-pulse bg-accent align-middle"
								aria-hidden="true"
							></span>
						{/if}
					</div>
				</form>

				<!-- Quick Command Chips for Fast Mobile/Touch Discovery -->
				<div class="mt-2.5 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
					<span class="text-text-muted/70 select-none">Try:</span>
					{#each terminalQuickCommands as cmd (cmd)}
						<button
							type="button"
							onclick={() => executeCommand(cmd)}
							class="cursor-pointer rounded-sm border border-border/60 bg-surface-primary/60 px-2 py-0.5 text-text-muted transition-colors duration-150 hover:border-accent/40 hover:text-accent active:bg-surface-elevated"
						>
							{cmd}
						</button>
					{/each}
				</div>
			</div>
		</div>

		{#snippet footer()}
			<div class="flex items-center gap-2">
				<TerminalIcon size={13} class="text-accent" />
				<span>bash 5.2</span>
				<span class="text-text-muted/60">·</span>
				<span>utf-8</span>
			</div>
			<div class="text-[11px] text-text-muted">
				<span>status: </span>
				<span class="text-accent">accepting inquiries</span>
			</div>
		{/snippet}
	</CodePanel>
</section>
