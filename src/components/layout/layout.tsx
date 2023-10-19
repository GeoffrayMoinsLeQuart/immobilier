import React from 'react';
import Header from './header';
import Footer from './footer';
import Subfooter from './sub-footer';

type LayoutProps = {
	children: React.ReactNode;
};

const classContainerHeader = 'container bg-NIGHT min-w-full';
const classContainer = 'container bg-BLACK min-w-full';

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={classContainer} id='outer-container'>
			<div className={classContainerHeader}>
				<Header />
			</div>
			<main>{children}</main>
			<Footer />
			<Subfooter />
		</div>
	);
};

export default Layout;
