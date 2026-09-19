export interface StackCategory {
	id: string;
	title: string;
	description: string;
	items: {
		name: string;
		isPrimary?: boolean;
	}[];
}

export const stackCategories: StackCategory[] = [
	{
		id: 'backend',
		title: 'Backend & Architecture',
		description: 'Core runtime, high-concurrency frameworks, and distributed patterns',
		items: [
			{ name: 'Go', isPrimary: true },
			{ name: 'Gin', isPrimary: false },
			{ name: 'Microservices', isPrimary: false },
			{ name: 'Distributed Systems', isPrimary: false },
			{ name: 'Event-Driven Architecture', isPrimary: false },
			{ name: 'REST APIs', isPrimary: false },
			{ name: 'Clean Architecture', isPrimary: false },
			{ name: 'CQRS', isPrimary: false }
		]
	},
	{
		id: 'data',
		title: 'Data & In-Memory Stores',
		description: 'Relational databases, document stores, and distributed cache tiers',
		items: [
			{ name: 'PostgreSQL', isPrimary: false },
			{ name: 'Amazon Aurora', isPrimary: false },
			{ name: 'DynamoDB', isPrimary: false },
			{ name: 'MongoDB', isPrimary: false },
			{ name: 'Redis', isPrimary: false },
			{ name: 'Valkey', isPrimary: false }
		]
	},
	{
		id: 'cloud',
		title: 'Cloud Infrastructure (AWS)',
		description: 'Production services orchestrated for resilience and high throughput',
		items: [
			{ name: 'AWS (Provider)', isPrimary: true },
			{ name: 'EC2', isPrimary: false },
			{ name: 'S3', isPrimary: false },
			{ name: 'KMS', isPrimary: false },
			{ name: 'RDS', isPrimary: false },
			{ name: 'DynamoDB', isPrimary: false },
			{ name: 'Lambda', isPrimary: false },
			{ name: 'SQS', isPrimary: false },
			{ name: 'SNS', isPrimary: false },
			{ name: 'CloudWatch', isPrimary: false }
		]
	},
	{
		id: 'infrastructure',
		title: 'Infrastructure & DevOps',
		description: 'Containerization, IaC, CI/CD pipelines, and telemetry systems',
		items: [
			{ name: 'Docker', isPrimary: false },
			{ name: 'Kubernetes (Basics)', isPrimary: false },
			{ name: 'Terraform', isPrimary: false },
			{ name: 'GitHub Actions', isPrimary: false },
			{ name: 'GitLab CI', isPrimary: false },
			{ name: 'Grafana', isPrimary: false }
		]
	},
	{
		id: 'messaging',
		title: 'Messaging & Queues',
		description: 'Asynchronous event streaming and decoupled task brokers',
		items: [{ name: 'RabbitMQ', isPrimary: true }]
	},
	{
		id: 'security',
		title: 'Security & Auth',
		description: 'Access control policies, token validation, and encryption at rest',
		items: [
			{ name: 'RBAC', isPrimary: false },
			{ name: 'MFA', isPrimary: false },
			{ name: 'AES-256', isPrimary: false },
			{ name: 'AWS KMS', isPrimary: false },
			{ name: 'JWT', isPrimary: false }
		]
	},
	{
		id: 'languages',
		title: 'Programming Languages',
		description: 'Systems languages, scripting, and enterprise backend platforms',
		items: [
			{ name: 'Go', isPrimary: true },
			{ name: 'Java', isPrimary: false },
			{ name: 'SQL', isPrimary: false },
			{ name: 'JavaScript', isPrimary: false },
			{ name: 'Lua', isPrimary: false }
		]
	},
	{
		id: 'practices',
		title: 'Engineering Practices',
		description: 'Methodologies ensuring high code quality and test reliability',
		items: [{ name: 'TDD', isPrimary: false }]
	}
];

export const stackYamlContent = `# stack.yaml — Production environment & engineering capabilities
backend:
  - Go (Primary)
  - Gin
  - Microservices
  - Distributed Systems
  - Event-Driven Architecture
  - REST APIs
  - Clean Architecture
  - CQRS

data:
  - PostgreSQL
  - Amazon Aurora
  - DynamoDB
  - MongoDB
  - Redis
  - Valkey

cloud:
  - AWS (Provider)
  - EC2
  - S3
  - KMS
  - RDS
  - DynamoDB
  - Lambda
  - SQS
  - SNS
  - CloudWatch

infrastructure:
  - Docker
  - Kubernetes (Basics)
  - Terraform
  - GitHub Actions
  - GitLab CI
  - Grafana

messaging:
  - RabbitMQ

security:
  - RBAC
  - MFA
  - AES-256
  - AWS KMS
  - JWT

languages:
  - Go
  - Java
  - SQL
  - JavaScript
  - Lua

practices:
  - TDD
`;
