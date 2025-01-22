import Link from 'next/link';
import React from 'react';
import Arrow_Btn from './button/Arrow_Btn';
import Image from 'next/image';
import styles from '../styles/card-with-grid.module.css';

const cardData = [
	{
		number: '5x',
		title: 'Secure your growth',
		linkText: 'LEARN MORE',
	},
	{
		number: '100',
		title: 'Trusted leader',
		linkText: 'LEARN MORE',
	},
	{
		number: '87',
		title: 'Strength in numbers',
		linkText: 'LEARN MORE',
	},
	{
		number: '90%',
		title: 'Better machine learning',
		linkText: 'LEARN MORE',
	},
];
const CardWithGrid = () => {
	return (
		<section className="relative card-with-grid bg-black padding-top-m laptop-landscape:pt-0">
			<div className="container">
				
				<div
					className="grid grid-cols-2 xl:grid-cols-1 -mx-[10px] xl:m-0  relative z-20"
					data-aos="fade-up"
					data-aos-delay="500"
				>
					<div className="mx-[10px] xl:mx-0 xl:mb-[20px]">
						<div
							className={`${styles.card} bg-black h-full flex border-[2px] border-blue rounded-[16px] flex-wrap hover:shadow-white-shadow hover:border-white outline outline-transparent outline-1 hover:outline-white transition-all relative`}
						>
							<Link
								href="/"
								aria-label="first link"
								className="absolute left-0 top-0 w-full h-full z-10"
							></Link>
							<div className="w-[130px] xl:w-[104px] pt-[22px] overflow-hidden">
								<div className="relative w-[124.03px] h-[124.03px] xl:w-[104px] xl:h-[104px] bg-blue rounded-full  my-auto  text-right">
									<div className="shadow absolute top-0 -left-2 xl:left-0 h-[150px] xl:w-full">
										<Image
											alt="shadow-blue"
											src="/shadow-blue.svg"
											width={200}
											height={200}
										/>
									</div>
									<h2 className="text-white absolute left-1/2 top-[45%] -translate-y-2/4 -translate-x-2/4  inline  z-10 wide-screen:text-[65px]">
										5x
									</h2>
								</div>
							</div>
							<div className={`${styles.textContainer} w-[calc(100%_-_130px)] xl:w-[calc(100%_-_104px)] px-[24px] xl:px-[16px] py-[40px]`}>
								<h3 className="text-white">
									Optimize Your Entire Customer Lifecycle
								</h3>
								<p className="text-white my-[16px] font-normal">
									AI-Powered Fraud Decisioning..
								</p>
								<ul className="list-disc text-white pl-4 mb-6 text-base font-normal leading-normal">
									<li>AI-Powered Fraud Decisioning..</li>
									<li>AI-Powered Fraud Decisioning..</li>
								</ul>
								<Arrow_Btn text={`Learn More`} redirection={`/`} />
							</div>
						</div>
					</div>
					<div className="mx-[10px] xl:mx-0">
						<div className="grid grid-cols-2 md:block  h-full gap-x-[20px] gap-y-[20px]">
							{cardData.map((item, i) => {
								return (
									<div
										key={i}
										className={`${styles.card} xl:mb-[20px] overflow-hidden bg-black w-full border-[2px] border-white rounded-[16px] pl-2 flex flex-wrap text-white outline outline-transparent outline-1 hover:outline-white hover:shadow-white-shadow transition-all relative`}
									>
										<Link
											href="/"
											aria-label="first link"
											className="absolute left-0 top-0 w-full h-full z-10"
										></Link>
										<div className="w-3/12 pt-[20px] xl:w-[58px]">
											<div className="relative w-[74px] h-[75px] xl:w-[58px] xl:h-[58px] bg-amber-400 rounded-full my-auto text-right">
												<div className="shadow absolute top-0 -left-2 h-[150px]">
													<Image
														src="/shadow-yellow.svg"
														width={200}
														height={200}
														alt="shadow-yellow"
													/>
												</div>
												<span className="text-black absolute left-1/2 top-[45%] -translate-y-2/4 -translate-x-2/4  inline  z-10 text-[32px] tablet:text-[20px] desktop:text-[20px] md:text-[18px] font-bold leading-[38.40px]">
													{' '}
													{item.number}
												</span>
											</div>
										</div>
										<div className={`${styles.textContainer} pl-[24px] pr-[16px] xl:px-[10px] py-[40px] w-9/12`}>
											<h4 className="font-semibold ">{item.title}</h4>
											<div className="mt-3">
												<Arrow_Btn text={item.linkText} redirection={`/`} />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardWithGrid;