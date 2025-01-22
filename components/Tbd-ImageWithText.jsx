import React from 'react'
import Image from 'next/image';
import BtnBlack from './button/Button_Black';
import Black_Btn from './button/Button_Black'

const usecaseData = {
	
	title: 'AI-Powered Fraud Decisioning..',
	blurb:'AI-Powered Fraud Decisioning..',
}

const platformData1 = {
	
	title: 'Headline about partner portal',
	blurb: 'AI-Powered Fraud Decisioning..',
	btntext: 'learn more',
    btnlink: '/homepage',
    image:'/certification.png',
}
const platformData2 = {
	
	title: 'Headline about Sifters Community',
	blurb: 'AI-Powered Fraud Decisioning..',
	btntext: 'learn more',
    btnlink: '/homepage',
    image:'/sifters-community.png',
}

const platformData3 = {
	
	title: 'Headline about professional services',
	blurb: 'AI-Powered Fraud Decisioning..',
	btntext: 'LEARN MORE',
    btnlink: '/homepage',
    image: '/professional-services.png',
}

function ImageWithContent(props) {

	var data

	if (props.page == 'usecase') {
		data = usecaseData
	} else if (props.page == 'platform1') {
		data = platformData1
	}else if (props.page == 'platform2') {
		data = platformData2
	}else if (props.page == 'platform3') {
		data = platformData3
	}
	
	
	

	return (
		(props.reverse == 'false' ? (
			<section className={`image-with-content bg-white ${props.page == 'platform1'?'no-padding-bottom':'no-padding-top'}`}>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+20px)] py[140px] items-center -ml-[10px] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="img-wrap pr-[76px] md:pr-0 md:max-w-[440px]  laptop-landscape:max-w-[550px] ">
							<Image
                                src={data.image }
								alt="img"
								width={700}
								height={700}
								quality={50}
							/>
						</div>
					</div>
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0]">
						<div className="content_wrap xl-up:pt-[10px]">
							<h2 className="mb-[16px]">{data.title}</h2>
							<p>{data.blurb}</p>
							{data.hasOwnProperty('btntext') ? (
								<div className="mt-[27px]">
									<BtnBlack text={data.btntext} link={data.btnlink} />
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
		) : (
			<section className="image-with-content bg-white" id='integrations'>
			<div className="container">
				<div className="wrapper flex-row-reverse flex flex-wrap w-[calc(100%+20px)] items-center -ml-[10px] ">
					<div className="col-two w-[calc(48%-20px)] md:w-full mx-[10px]">
						<div className="img-wrap xl-up:pl-[56px]  md:max-w-[470px] md:mb-[20px] laptop-landscape:max-w-[550px]  xl-up:pb-[44px]">
							<Image
								src={data.image }
								alt="img"
								width={700}
								height={700}
								quality={50}
							/>
						</div>
					</div>
					<div className="col-two w-[calc(52%-20px)] md:w-full mx-[10px]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">{data.title}</h2>
							<p>{data.blurb}</p>
                            <div className="btn mt-[31px]">
                                <Black_Btn link={data.btnlink} text={data.btntext}/>
                            </div>
							<div className="quotation-block pt-[40px] mt-[30px] pb-[40px] sm:pt-[20px] sm:mt-[20px] border-t-[1px] border-black">
								<div className="flex sm:flex-wrap ">
									<div className="w-[40px] h-[40px] relative">
										<Image
											className="w-full h-full object-cover"
											src="/logos/quotation-mark-blue.png"
											alt="top"
											width="40"
											height="40"
										/>
									</div>
									<div className="w-[calc(100%-40px)] sm:w-full sm:pl-0 sm:mt-[10px] pl-[16px] text-black">
										<h4>
											Est tation latine aliquip id, mea ad tale illud
											definitiones. Periculis omitur necessitus eum .”
										</h4>
									</div>
								</div>
								<div className="flex items-center pt-[18px] pl-[56px] sm:pl-0" >
									<div className="w-[28%] desktop:w-[50%] lg:w-[50%]  sm:w-[50%] relative">
										<p className="text-black small_font font-bold">
											Connie Robertson
										</p>
										<p className="text-black small_font font-normal">
											CMO at Doordash
										</p>
									</div>
									<div className="max-[110px] pl-[40px] sm:pl-0">
										<Image
											src="/logos/doordash.svg"
											alt="top"
											width="187"
											height="23"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		))
	);
}

export default ImageWithContent
