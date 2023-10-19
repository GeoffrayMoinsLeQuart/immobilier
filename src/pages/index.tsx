import HeadInfos from '@/components/layout/head';
import React, { FC } from 'react';

const Home: FC = () => {
	return (
		<>
			<HeadInfos
				title={'metaInfos.metaTitle'}
				description={'metaInfos.metaDesciption'}
				content={'metaInfos.metaTitle'}
			/>
		</>
	);
};

export default Home;
