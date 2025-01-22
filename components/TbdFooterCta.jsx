import React from 'react'
import Btn_White from './button/Button_White';
import styles from '../styles/footerCta.module.css'
import Image from 'next/image';

function FooterCta() {
	return (
		<section
			className={`relative overflow-hidden xl-up:pt-[160px] bg-none pb-0  wide-screen:pt-[240px] lg-up:pt-[125px]`}
			id="open-positions"
		>
			<div className="container lg:p-0">
				<div
					className={`${styles.wrapper} relative flex flex-wrap  items-center rounded-tl-[24px] rounded-tr-[24px] lg:rounded-none justify-end bg-blue w-full  sm:flex-col-reverse`}
				>
					<div
						className={`${styles.col_left} w-full sm-up:w-[49%]  lg:mt-8 sm:pr-0 pr-[21px] wide-screen:pr-[110px]`}
					>
						<div
							className={`${styles.imageWrap} relative w-full tablet:w-auto lg:inline-block sm:max-w-[375px] max-w-[535px]  xxl-up:max-w-[720px]`}
						>
							<Image
								className={`${styles.img} w-full h-full tablet:w-auto lg:-mb-[6px] -mt-[104px] object-cover bottom-0 left-0  desktop:-mt-[88px] lg:mt-0 xxl-up:-mt-[138px] scale-y-[1.04]`}
								src="/footercta/footercta.webp"
								alt="img"
								loading="lazy"
								width={300}
								height={300}
								quality={100}
							/>
						</div>
					</div>

					<div
						className={`${styles.col_right}  w-full sm-up:w-[51%]  xl:py-3 lg:px-5 pr-5 xxl-up:py-[60px] lg:mb-3`}
					>
						<div className={`lg:pt-[20px] lg-up:pt-[18px] lg-up:pl-[18px]`}>
							<h2 className={`text-[white!important] `}>
								Take the <span>next step</span>
							</h2>
							<p
								className={`text-white max-w-[450px] mt-[22px] mb-[37px] xl:my-[18px]  xxl-up:max-w-[550px] `}
							>
								Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
								nam no suscipit.
							</p>

							<Btn_White text="view open positions" link="/" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FooterCta;