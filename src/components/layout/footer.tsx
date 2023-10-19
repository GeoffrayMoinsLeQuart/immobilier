import React, { FC, ReactNode } from 'react';
import Typography from '../design/typography';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../design/containers';

type ColumnFooterProps = {
	content?: string[];
	content2?: string[];
	title?: string;
	image?: boolean;
	children?: ReactNode;
};

type LinkFooterProps = {
	link: string;
	href: string;
	className: string;
};

const LinkFooter: FC<LinkFooterProps> = ({ link, href, className }) => {
	return (
		<Link href={href} target='_blank'>
			<Typography variant='body4' className={`mb-[8px] ${className}`}>
				{link}
			</Typography>
		</Link>
	);
};

const ColumnFooter: FC<ColumnFooterProps> = ({ content, image = false, title, content2, children }) => {
	return (
		<div className='flex flex-col mb-[12px] mt-[12px] sm:mb-[20px] sm:mt-[20px] lg:mb-[36px] lg:mt-[24px] items-start'>
			{image ? (
				<Link rel='canonical' href='/' aria-label='Home'>
					<figure style={{ margin: 0 }}>
						<picture>
							<Image
								src={'/images/logo-white.png'}
								alt={'Logo'}
								width={150}
								height={150}
								className='mb-[16px] max-sm:hidden'
							/>
							<Image
								src={'/images/logo-white.png'}
								alt={'Logo'}
								width={90}
								height={90}
								className='mb-[16px] mt-[4px] sm:hidden'
							/>
						</picture>
					</figure>
				</Link>
			) : (
				<Typography variant='button' className={`text-WHITE ${children ? '' : 'mb-[16px]'}`}>
					{title}
				</Typography>
			)}
			{children && children}

			{!content2 &&
				content &&
				content.map((cont: string, index: number) => (
					<LinkFooter key={index} link={cont} href='https://www.google.com/' className='text-WHITE' />
				))}

			{content2 &&
				content &&
				content.map((cont: string, index: number) => (
					<div key={index}>
						<LinkFooter link={cont} href='https://www.google.com/' className='sm:hidden text-WHITE' />
						<LinkFooter
							link={content2[index] && content2[index]}
							href='https://www.google.com/'
							className='sm:hidden text-WHITE'
						/>
					</div>
				))}

			{content2 &&
				content &&
				content.map((cont: string, index: number) => (
					<div key={index} className='max-sm:hidden grid grid-cols-2'>
						<LinkFooter link={cont} href='https://www.google.com/' className='text-WHITE min-w-[150px]' />
						<LinkFooter
							link={content2[index] && content2[index]}
							href='https://www.google.com/'
							className='text-WHITE'
						/>
					</div>
				))}
		</div>
	);
};

const classOutsideContainer = `container bg-NIGHT min-w-full mb-[16px]`;
const classInnerContainer = `bg-NIGHT flex flex-row max-sm:flex-wrap gap-4 xs:gap-8 max-xs:justify-evenly xs:justify-between`;

const Footer: FC = () => {
	const tOverwrite = (key: string): string => key ?? '';

	return (
		<Container variant='outer' className={classOutsideContainer}>
			<Container variant='inner' className={classInnerContainer}>
				<ColumnFooter
					image
					content={[
						'Contact@wgf.com',
						'+44 1267655737732',
						'footer.contactOptions',
						'footer.privacyPolicy',
						'footer.cookies'
					]}
				/>
				<ColumnFooter
					title={tOverwrite('footer.aboutUs')}
					content={[
						'footer.evaluationProcess',
						'footer.bettingObjectives',
						'footer.whyBfChallenge',
						'footer.scalingPlan'
					]}
					content2={['footer.partnership', 'footer.affiliationProgram', 'footer.termsConditions']}
				/>
				<ColumnFooter title={tOverwrite('footer.community')}></ColumnFooter>
				{/* <ColumnFooter title={tOverwrite('footer.aboutUs')}></ColumnFooter> */}
			</Container>
		</Container>
	);
};

export default Footer;
