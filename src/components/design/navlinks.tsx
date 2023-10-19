import { FC } from 'react';
import Link from 'next/link';
import Typography from './typography';

type NavLinkProps = {
	children: React.ReactNode;
	href: string;
	className?: string;
	onClick?: () => void;
};

const NavLink: FC<NavLinkProps> = ({ href, className, children, onClick }) => {
	return (
		<Link href={href} className={` inline-block rounded-lg px-[2px] py-[1px]  ${className}`} onClick={onClick}>
			<Typography variant='h3' className='text-GREEN'>
				{children}
			</Typography>
		</Link>
	);
};
export default NavLink;
