<script lang="ts">
	import { Card, Tag } from '$lib';
	import { stackCategories } from './stackData';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each stackCategories as category (category.id)}
		<Card hoverable={true} padding="normal" class="flex flex-col justify-between">
			<div class="space-y-3">
				<!-- Category Header -->
				<div class="border-b border-divider pb-2.5">
					<div class="flex items-center justify-between">
						<h3 class="font-mono text-sm font-semibold tracking-tight text-text-primary">
							{category.title}
						</h3>
						<span class="font-mono text-[11px] text-text-muted">
							{category.items.length} items
						</span>
					</div>
					<p class="pt-1 font-sans text-xs leading-relaxed text-text-muted">
						{category.description}
					</p>
				</div>

				<!-- Technology Tags -->
				<div class="flex flex-wrap gap-1.5 pt-1">
					{#each category.items as item (item.name)}
						<Tag variant={item.isPrimary ? 'highlight' : 'default'} size="sm">
							{item.name}
						</Tag>
					{/each}
				</div>
			</div>
		</Card>
	{/each}
</div>
