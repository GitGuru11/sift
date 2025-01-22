import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Intro from './FullWidthIntro';

export default function ColorLogoTab({ id }) {
	const [activeTab, setActiveTab] = useState(0);
	const introDetail = {
		PreNormalText: 'Headline about logo usage',
		bg: 'black',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
	const TabData = [
		{
			color: 'white',
			logo: '/BrandCenter/BgWhiteLogo.svg',
		},
		{
			color: 'black',
			logo: '/BrandCenter/BgBlackLogo.svg',
		},
		{
			color: 'blue',
			logo: '/BrandCenter/BgBlueLogo.svg',
		},
		{
			color: 'darkBlue',
			logo: '/BrandCenter/BgBlueLogo.svg',
		},
	];

	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<section className="ColorLogoTab bg-[#000]" id={id}>
			<div className="container">
				<Intro {...introDetail} />
				<div className="tabWrap">
					<div className="tabLinks flex ">
						{TabData.map((bg, index) => {
							return (
								<div
									key={index}
									className={`w-[64px] h-[64px] sm:w-[45px] sm:h-[45px] cursor-pointer outline outline-white outline-[1px] rounded-[50%] transition-all delay-200 hover:outline-pink overflow-hidden mr-[24px] last:mr-0 ${
										bg.color == 'white' && 'bg-white'
									} ${bg.color == 'black' && 'bg-blak'} ${
										bg.color == 'blue' && 'bg-blue'
									}  ${bg.color == 'darkBlue' && 'bg-darkBlue'}
                                    ${
                                        index === activeTab
                                            ? 'outline-[3px] outline-[#FF3B84!important] hover:outline-pink'
                                            : ''
                                    } `}
									onClick={() => handleTabClick(index)}
								></div>
							);
						})}
					</div>
					<div className="w-[100%] flex flex-wrap mt-[40px]">
						<div className="w-[76%] xl:w-[66%] md:w-[100%!important] phablet:h-[260px!important] sm:h-[225px!important]">
							<div className="border-white border-[1px] p-[20px] md:w-[100%!important] w-[calc(100%-24px)] justify-between h-[100%] rounded-[24px] overflow-hidden">
								<div
									className={`w-[100%] h-[100%] flex items-center outline outline-white outline-[1px] rounded-[16px] overflow-hidden mr-[24px] last:mr-0 ${
										TabData[activeTab].color === 'white' && 'bg-white'
									} ${TabData[activeTab].color === 'black' && 'bg-black'} ${
										TabData[activeTab].color === 'blue' && 'bg-blue'
									}  ${
										TabData[activeTab].color === 'darkBlue' && 'bg-darkBlue'
									}`}
								>
									{' '}
									<div className=" w-[436px] h-[155px] mx-auto xl:w-[250px] xl:h-[75px] sm:w-[150px!important] sm:h-[45px!important]">
										<Image
											src={TabData[activeTab].logo}
											width={500}
											height={500}
											alt="Image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-[24%] xl:w-[34%] md:flex-wrap md:w-[calc(100%+24px)!important] md:-ml-[12px] xs:ml-[0!important] md:flex md:mt-[30px] xl:pb-[10px]">
							{TabData.filter((_, index) => index !== activeTab).map(
								(bg, index) => (
									<div
										key={index}
										className={`w-[100%] phablet:w-[calc(33.33%-24px)] xs:w-[calc(100%-24px)] sm:w-[calc(50%-24px)] md:mx-[12px] flex items-center h-[150px] xl:h-[120px] md:h-[80px!important] outline outline-white outline-[1px] rounded-[16px] overflow-hidden mr-[24px] mb-[24px] last:mb-0 last:mr-0 ${
											bg.color === 'white' && 'bg-white'
										} ${bg.color === 'black' && 'bg-black'} ${
											bg.color === 'blue' && 'bg-blue'
										}  ${bg.color === 'darkBlue' && 'bg-darkBlue'}`}
									>
										{' '}
										<div className=" w-fit h-fit mx-auto xl:w-[120px] xl:h-[45px] md:h-[31px!important] md:w-[90px!important] ">
											<Image
												src={bg.logo}
												width={160}
												height={29}
												alt="Image"
											/>
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
