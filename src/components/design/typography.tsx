import React, { ElementType } from 'react';
import { VariantTypography } from '@/types/types';

interface Props {
	variant: VariantTypography;
	children: React.ReactNode;
	className?: string;
	as?: ElementType;
}

const tags: Record<VariantTypography, ElementType> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	body1: 'p',
	body2: 'p',
	body3: 'p',
	body4: 'p',
	stupid: 'p',
	button: 'p',
	small: 'span'
};

const sizes: Record<VariantTypography, string> = {
	h1: 'font-h1 text-WHITE',
	h2: 'font-h2',
	h3: 'font-h3',
	h4: 'text-2xl font-bold sm:text-1xl',
	h5: 'text-xl font-bold sm:text-lg',
	body1: 'font-body1',
	body2: 'font-body2',
	body3: 'font-body3',
	body4: 'font-body4',
	stupid: 'font-stupid',
	button: 'font-button',
	small: 'text-sm sm:text-xs'
};

const Typography = ({ variant, children, className, as }: Props) => {
	const sizeClasses = sizes[variant];
	const Tag = as || tags[variant];

	return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

export default Typography;
