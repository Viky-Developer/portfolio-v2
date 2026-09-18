import { describe, it, expect } from 'vitest';
import { THEME_COLORS, SHADOWS, RADII } from './theme';

describe('Theme Constants', () => {
	it('defines all required core surfaces from context/design.md', () => {
		expect(THEME_COLORS.surfaces.background).toBe('#f9f9f9');
		expect(THEME_COLORS.surfaces.surface).toBe('#f9f9f9');
		expect(THEME_COLORS.surfaces.surfaceLowest).toBe('#ffffff');
		expect(THEME_COLORS.surfaces.surfaceLow).toBe('#f3f3f3');
		expect(THEME_COLORS.surfaces.surfaceContainer).toBe('#eeeeee');
		expect(THEME_COLORS.surfaces.surfaceHigh).toBe('#e8e8e8');
		expect(THEME_COLORS.surfaces.surfaceHighest).toBe('#e2e2e2');
		expect(THEME_COLORS.surfaces.codeSurface).toBe('#171717');
		expect(THEME_COLORS.surfaces.border).toBe('#e2e4e8');
	});

	it('defines text and action colors with correct contrast tokens', () => {
		expect(THEME_COLORS.text.primary).toBe('#1a1c1c');
		expect(THEME_COLORS.text.strong).toBe('#191919');
		expect(THEME_COLORS.text.muted).toBe('#444748');
		expect(THEME_COLORS.text.subtle).toBe('#747878');
		expect(THEME_COLORS.text.accent).toBe('#0060ac');
		expect(THEME_COLORS.text.accentHover).toBe('#004883');
		expect(THEME_COLORS.text.focus).toBe('#4a90e2');
		expect(THEME_COLORS.text.onDark).toBe('#ffffff');
	});

	it('defines operational status colors correctly', () => {
		expect(THEME_COLORS.status.healthy).toBe('#10b981');
		expect(THEME_COLORS.status.warning).toBe('#f59e0b');
		expect(THEME_COLORS.status.error).toBe('#ef4444');
		expect(THEME_COLORS.status.idle).toBe('#94a3b8');
	});

	it('defines shadows and radii as specified in design requirements', () => {
		expect(RADII.interactive).toBe('4px');
		expect(RADII.card).toBe('8px');
		expect(RADII.pill).toBe('9999px');
		expect(SHADOWS.card).toBe('0 1px 3px rgba(0, 0, 0, 0.05)');
	});
});
