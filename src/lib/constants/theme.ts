/**
 * Theme color tokens and operational colors from context/design.md
 * Design system: "VIGNESH.DEV — Personal Engineering Workspace"
 * Palette: Deep Forest / Charcoal / Warm Cream
 */

export const THEME_COLORS = {
	surfaces: {
		background: '#07110D',
		canvasSecondary: '#0A1712',
		surfacePrimary: '#0D1B15',
		surfaceElevated: '#11231B',
		border: '#26382F',
		divider: '#1B2B24'
	},
	text: {
		primary: '#F0EBDD',
		secondary: '#B8B9AE',
		muted: '#7E8A82',
		code: '#D0D0C4'
	},
	accent: {
		primary: '#8BCB9B',
		strong: '#A6DDB0'
	},
	status: {
		healthy: '#78C990',
		warning: '#8BCB9B',
		error: '#C98373',
		idle: '#7E8A82',
		success: '#78C990'
	},
	httpMethods: {
		get: {
			text: '#8BCB9B',
			bg: '#11231B'
		},
		post: {
			text: '#78C990',
			bg: '#11231B'
		}
	}
} as const;

export const SHADOWS = {
	card: '0 1px 3px rgba(0, 0, 0, 0.35)',
	cardHover: '0 2px 6px -1px rgba(0, 0, 0, 0.45)',
	header: '0 1px 8px rgba(0, 0, 0, 0.5)'
} as const;

export const RADII = {
	interactive: '4px',
	card: '8px',
	pill: '9999px'
} as const;
