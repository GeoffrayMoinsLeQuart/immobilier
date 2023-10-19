import React, { ReactNode } from 'react';
import cls from 'classnames';

type Variant = 'outer' | 'inner' | 'common';

const classCommonContainer = `mr-auto ml-auto`;
const classCommonInnerContainer = `
	max-w-7xl 
	max-sm:pl-[24px] max-sm:pr-[24px] 
	max-xl:pl-[46px] max-xl:pr-[46px]
`;

interface ContainerProps {
	variant: Variant;
	children: ReactNode;
	className?: string;
	style?: React.HtmlHTMLAttributes<any>['style'];
}

const returnClass = (variant: Variant) => {
	let result: string = '';
	if (variant === 'outer') {
		return (result += classCommonContainer);
	} else if (variant === 'inner' || variant === 'common') {
		return (result += classCommonContainer + classCommonInnerContainer);
	}
};

function Container({ children, className, variant, style }: ContainerProps) {
	return (
		<div className={cls(returnClass(variant), className)} style={style}>
			{children}
		</div>
	);
}

export default Container;
