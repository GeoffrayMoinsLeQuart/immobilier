import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

const Header = () => {
	return (
		<header className='sticky top-0 max-w-7xl m-auto'>
			<nav
				className='
				flex items-center justify-between 
				h-[80px] 	
				max-sm:pl-[12px] max-sm:pr-[12px] 
				max-xl:pl-[46px] max-xl:pr-[46px]'
			>
				<span className=''>
					<Link rel='canonical' href='/' aria-label='Home'>
						<figure style={{ margin: 0 }}>
							<picture>
								<Image
									src={'/images/logo.png'}
									alt={'Logo'}
									width={200}
									height={80}
									style={{ verticalAlign: 'middle', maxHeight: '2rem' }}
								/>
							</picture>
						</figure>
					</Link>
				</span>
				<Menu />
			</nav>
		</header>
	);
};
export default Header;
