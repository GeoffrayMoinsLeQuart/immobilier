import Head from 'next/head';
import React, { FC } from 'react';

interface HeadInfosProps {
	title: string;
	content: string;
	description: string;
}

const HeadInfos: FC<HeadInfosProps> = ({ title, content, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name={description} content={content} />
		</Head>
	);
};

export default HeadInfos;
