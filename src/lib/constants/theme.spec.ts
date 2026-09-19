import { describe, it, expect } from 'vitest';
import { THEME_COLORS, SHADOWS, RADII } from './theme';

describe('Theme Constants — Deep Forest & Warm Cream', () => {
	it('defines all required core surfaces from context/design.md', () => {
		expect(THEME_COLORS.surfaces.background).toBe('#07110D');
		expect(THEME_COLORS.surfaces.canvasSecondary).toBe('#0A1712');
		expect(THEME_COLORS.surfaces.surfacePrimary).toBe('#0D1B15');
		expect(THEME_COLORS.surfaces.surfaceElevated).toBe('#11231B');
		expect(THEME_COLORS.surfaces.border).toBe('#26382F');
		expect(THEME_COLORS.surfaces.divider).toBe('#1B2B24');
	});

	it('defines editorial typography tokens with Warm Cream', () => {
		expect(THEME_COLORS.text.primary).toBe('#F0EBDD');
		expect(THEME_COLORS.text.secondary).toBe('#B8B9AE');
		expect(THEME_COLORS.text.muted).toBe('#7E8A82');
		expect(THEME_COLORS.text.code).toBe('#D0D0C4');
	});

	it('defines restrained Soft Sage accent and operational colors', () => {
		expect(THEME_COLORS.accent.primary).toBe('#8BCB9B');
		expect(THEME_COLORS.accent.strong).toBe('#A6DDB0');
		expect(THEME_COLORS.status.success).toBe('#78C990');
		expect(THEME_COLORS.status.error).toBe('#C98373');
	});

	it('defines restrained radii and shadows as specified in design requirements', () => {
		expect(RADII.interactive).toBe('4px');
		expect(RADII.card).toBe('8px');
		expect(RADII.pill).toBe('9999px');
		expect(SHADOWS.card).toBe('0 1px 3px rgba(0, 0, 0, 0.35)');
	});
});
