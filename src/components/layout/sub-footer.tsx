import React, { FC } from 'react';
import Typography from '../design/typography';

const Subfooter: FC = () => {
	return (
		<div
			className='
					mr-auto ml-auto max-w-7xl 
					pb-[63px] sm:pb-[74px]
					max-sm:pl-[24px] max-sm:pr-[24px]  
					max-xl:pl-[46px] max-xl:pr-[46px]
				bg-BLACK
			'
		>
			<Typography variant='body4' className='text-WHITE'>
				{'footer.legalText1'}
			</Typography>
			<Typography variant='body4' className='text-WHITE'>
				{'footer.legalText2'}
			</Typography>
			<Typography variant='body4' className='text-WHITE'>
				{'footer.legalText3'}
			</Typography>
			<Typography variant='body4' className='text-WHITE'>
				{'footer.legalText4'}
			</Typography>
		</div>
	);
};

export default Subfooter;
