import { readFileSync } from 'node:fs';

const messageFile = process.argv[2];

if (!messageFile) {
	console.error('Commit message file is required.');
	process.exit(1);
}

const subject = readFileSync(messageFile, 'utf8').split(/\r?\n/, 1)[0].trim();
const type = '(?:feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)';
const scope = '(?:\\([a-z0-9._/-]+\\))?';
const pattern = new RegExp(`^${type}${scope}(?:!)?: .+`);

if (!pattern.test(subject)) {
	console.error('Invalid commit message.');
	console.error('Use: type(optional-scope): message');
	console.error('Example: feat(portfolio): add project showcase');
	process.exit(1);
}
