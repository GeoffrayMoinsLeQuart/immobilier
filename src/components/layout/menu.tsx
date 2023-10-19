import React, { FC } from 'react';
import NavLink from '../design/navlinks';
import Image from 'next/image';

const Menu: FC = () => {
	return (
		<>
			<span className='max-xl:hidden flex justify-center items-center gap-8'>
				<NavLink href='/faq'>header.faq</NavLink>
				<NavLink href='/profil'>
					<Image src='/icons/profil.png' width={20} height={20} alt='Snow' className='' />
				</NavLink>
			</span>
		</>
	);
};

export default Menu;
