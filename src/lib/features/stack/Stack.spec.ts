import { describe, it, expect } from 'vitest';
import { stackCategories, stackYamlContent } from './stackData';

describe('Stack Section Specifications & Contracts', () => {
	it('defines the Stack section categories matching design.md', () => {
		const categoryIds = stackCategories.map((c) => c.id);
		expect(categoryIds).toContain('backend');
		expect(categoryIds).toContain('data');
		expect(categoryIds).toContain('cloud');
		expect(categoryIds).toContain('infrastructure');
		expect(categoryIds).toContain('messaging');
		expect(categoryIds).toContain('security');
		expect(categoryIds).toContain('frontend');
		expect(categoryIds).toContain('languages');
		expect(categoryIds).toContain('practices');
	});

	it('specifies Go as primary backend language, gRPC, and microservices architecture', () => {
		const backend = stackCategories.find((c) => c.id === 'backend');
		expect(backend).toBeDefined();
		const go = backend?.items.find((i) => i.name === 'Go');
		expect(go?.isPrimary).toBe(true);

		const itemNames = backend?.items.map((i) => i.name);
		expect(itemNames).toContain('Gin');
		expect(itemNames).toContain('Microservices');
		expect(itemNames).toContain('Distributed Systems');
		expect(itemNames).toContain('Event-Driven Architecture');
		expect(itemNames).toContain('gRPC');
		expect(itemNames).toContain('REST APIs');
		expect(itemNames).toContain('Clean Architecture');
		expect(itemNames).toContain('CQRS');
	});

	it('includes core relational and distributed data stores', () => {
		const data = stackCategories.find((c) => c.id === 'data');
		expect(data).toBeDefined();
		const dataItems = data?.items.map((i) => i.name);
		expect(dataItems).toContain('PostgreSQL');
		expect(dataItems).toContain('Amazon Aurora');
		expect(dataItems).toContain('DynamoDB');
		expect(dataItems).toContain('MongoDB');
		expect(dataItems).toContain('Redis');
		expect(dataItems).toContain('Valkey');
	});

	it('specifies AWS cloud services suite', () => {
		const cloud = stackCategories.find((c) => c.id === 'cloud');
		expect(cloud).toBeDefined();
		const cloudItems = cloud?.items.map((i) => i.name);
		expect(cloudItems).toContain('AWS (Provider)');
		expect(cloudItems).toContain('EC2');
		expect(cloudItems).toContain('S3');
		expect(cloudItems).toContain('KMS');
		expect(cloudItems).toContain('RDS');
		expect(cloudItems).toContain('DynamoDB');
		expect(cloudItems).toContain('Lambda');
		expect(cloudItems).toContain('SQS');
		expect(cloudItems).toContain('SNS');
		expect(cloudItems).toContain('CloudWatch');
	});

	it('specifies DevOps and infrastructure toolchains', () => {
		const infra = stackCategories.find((c) => c.id === 'infrastructure');
		expect(infra).toBeDefined();
		const infraItems = infra?.items.map((i) => i.name);
		expect(infraItems).toContain('Docker');
		expect(infraItems).toContain('Kubernetes (Basics)');
		expect(infraItems).toContain('Terraform');
		expect(infraItems).toContain('GitHub Actions');
		expect(infraItems).toContain('GitLab CI');
		expect(infraItems).toContain('Grafana');
	});

	it('specifies RabbitMQ for messaging and key security standards', () => {
		const messaging = stackCategories.find((c) => c.id === 'messaging');
		expect(messaging?.items.map((i) => i.name)).toContain('RabbitMQ');

		const security = stackCategories.find((c) => c.id === 'security');
		const secItems = security?.items.map((i) => i.name);
		expect(secItems).toContain('RBAC');
		expect(secItems).toContain('MFA');
		expect(secItems).toContain('AES-256');
		expect(secItems).toContain('AWS KMS');
		expect(secItems).toContain('JWT');
	});

	it('specifies frontend and UI tooling capabilities', () => {
		const frontend = stackCategories.find((c) => c.id === 'frontend');
		expect(frontend).toBeDefined();
		const items = frontend?.items.map((i) => i.name);
		expect(items).toContain('TypeScript');
		expect(items).toContain('Svelte / SvelteKit');
		expect(items).toContain('React');
		expect(items).toContain('Tailwind CSS');
	});

	it('contains valid and complete stack.yaml content matching design.md', () => {
		expect(stackYamlContent).toContain('backend:');
		expect(stackYamlContent).toContain('primary: Go');
		expect(stackYamlContent).toContain('gRPC');
		expect(stackYamlContent).toContain('frontend:');
		expect(stackYamlContent).toContain('Svelte / SvelteKit');
		expect(stackYamlContent).toContain('React');
		expect(stackYamlContent).toContain('provider: AWS');
		expect(stackYamlContent).toContain('messaging:\n  - RabbitMQ');
		expect(stackYamlContent).toContain('practices:\n  - TDD');
	});
});
