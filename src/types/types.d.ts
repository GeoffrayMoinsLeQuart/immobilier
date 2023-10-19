declare global {
	interface Window {
		Trustpilot?: any;
	}
}

export type VariantTypography =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'small'
	| 'body1'
	| 'stupid'
	| 'body2'
	| 'body3'
	| 'body4'
	| 'button';

export interface optionsSelectProps {
	value: number | string;
	type: string;
}
