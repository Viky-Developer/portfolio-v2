/**
 * Theme color tokens and operational colors from context/design.md
 * Design system: "Engineered Precision"
 */

export const THEME_COLORS = {
	surfaces: {
		background: '#f9f9f9',
		surface: '#f9f9f9',
		surfaceLowest: '#ffffff',
		surfaceLow: '#f3f3f3',
		surfaceContainer: '#eeeeee',
		surfaceHigh: '#e8e8e8',
		surfaceHighest: '#e2e2e2',
		codeSurface: '#171717',
		border: '#e2e4e8'
	},
	text: {
		primary: '#1a1c1c',
		strong: '#191919',
		muted: '#444748',
		subtle: '#747878',
		accent: '#0060ac',
		accentHover: '#004883',
		focus: '#4a90e2',
		onDark: '#ffffff'
	},
	status: {
		healthy: '#10b981',
		warning: '#f59e0b',
		error: '#ef4444',
		idle: '#94a3b8'
	},
	httpMethods: {
		get: {
			text: '#0060ac',
			bg: '#ebf5ff'
		},
		post: {
			text: '#047857',
			bg: '#ecfdf5'
		}
	}
} as const;

export const SHADOWS = {
	card: '0 1px 3px rgba(0, 0, 0, 0.05)',
	cardHover: '0 2px 4px -1px rgba(30, 41, 59, 0.04), 0 1px 2px -1px rgba(30, 41, 59, 0.02)',
	header: '0 1px 8px rgba(0, 0, 0, 0.04)'
} as const;

export const RADII = {
	interactive: '4px',
	card: '8px',
	pill: '9999px'
} as const;
