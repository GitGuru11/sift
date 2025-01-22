import React from 'react';
import Link from 'next/link';
import Arrow_Btn from '../button/Arrow_Btn';
import Image from 'next/image';
import styles from '../../styles/card-with-grid.module.css';

const CardWithGrid = (props) => {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`relative CardWithGrid bg-black pt-[70px] laptop-landscape:pt-0 ${data.background} ${data.padding} ${data.classes}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div
					className="grid grid-cols-2 xl:grid-cols-1 -mx-[10px] xl:m-0  relative z-20"
					data-aos="fade-up"
					data-aos-delay="500">
					<div className="mx-[10px] xl:mx-0 xl:mb-[20px]">
						<div className={`${styles.card} bg-black h-full flex border-[2px] border-blue rounded-[16px] flex-wrap hover:shadow-white-shadow hover:border-white outline outline-transparent outline-1 hover:outline-white transition-all relative`}>
							{data?.cards && data?.cards[0]?.link && (
								<Link
									href={data?.cards[0]?.link}
									aria-label="first link"
									className="absolute left-0 top-0 w-full h-full z-10"
								></Link>
							)}
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
									{data?.cards && data?.cards[0]?.number && data?.cards[0]?.symbol && (
										<h2 className="text-white absolute left-1/2 top-[45%] -translate-y-2/4 -translate-x-2/4  inline  z-10 wide-screen:text-[65px]">

											{data?.cards[0]?.number}
											{data?.cards[0]?.symbol}
										</h2>
									)}
								</div>
							</div>
							<div className={`${styles.textWrap} ${styles.textContainer} w-[calc(100%_-_130px)] xl:w-[calc(100%_-_104px)] px-[24px] xl:px-[16px] py-[40px]`}>
								{data?.cards && data?.cards[0]?.title && (<h3 className="text-white mb-5">{data?.cards[0]?.title}</h3>)}
								{data?.cards && data?.cards[0]?.body && (<div dangerouslySetInnerHTML={{ __html: data?.cards[0]?.body }}></div>)}
								{data?.cards && data?.cards[0]?.linkText && data?.cards[0]?.link && (
									<Arrow_Btn
										text={data?.cards[0]?.linkText}
										redirection={data?.cards[0]?.link}
									/>
								)}
							</div>
						</div>
					</div>
					<div className="mx-[10px] xl:mx-0">
						<div className="grid grid-cols-2 md:block  h-full gap-x-[20px] gap-y-[20px]">
							{data.cards && data.cards.slice(1).map((card, i) => (
								<div
									key={i}
									className={`${styles.card} xl:mb-[20px] overflow-hidden bg-black w-full border-[2px] border-white rounded-[16px] pl-2 flex flex-wrap text-white outline outline-transparent outline-1 hover:outline-white hover:shadow-white-shadow transition-all relative`}
								>
									{card?.link && (
										<Link
											href={card?.link}
											aria-label="first link"
											className="absolute left-0 top-0 w-full h-full z-10"
										></Link>
									)}
									<div className="w-3/12 pt-[20px] xl:w-[58px]">
										<div className="relative w-[74px] h-[75px] xl:w-[58px] xl:h-[58px] bg-amber-400 rounded-full my-auto text-right">
											<div className="shadow absolute top-[-20px] -left-2 h-[200px] xl:top-[-35px]">
												<Image
													src="/shadow-yellow.svg"
													width={200}
													height={200}
													alt="shadow-yellow"
													className='h-[200px]'
												/>
											</div>
											{(card?.number || card?.symbol) && (
												<span className="text-black absolute left-1/2 top-[45%] -translate-y-2/4 -translate-x-2/4  inline  z-10 text-[26px] tablet:text-[20px] desktop:text-[20px] md:text-[18px] font-bold leading-[38.40px]">
													{card?.number}
													{card?.symbol}
												</span>
											)}
										</div>
									</div>
									<div className={`${styles.textContainer} pl-[24px] pr-[16px] xl:px-[10px] py-[40px] w-9/12`}>
										{card?.title && (<h4 className="font-semibold ">{card?.title}</h4>)}
										{card?.body && (<div dangerouslySetInnerHTML={{ __html: card?.body }} />)}
										<div className="mt-3">
											{card?.linkText && card?.link && (
												<Arrow_Btn
													text={card?.linkText}
													redirection={card?.link}
												/>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardWithGrid;
