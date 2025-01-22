import React from 'react'
import Image from 'next/image';
import BtnBlack from './button/Button_Black';

const usecaseData = {
	
	title: 'AI-Powered Fraud Decisioning..',
	blurb:'AI-Powered Fraud Decisioning..',
}

const platformData1 = {
	
	title: 'Headline about partner portal',
	blurb: 'AI-Powered Fraud Decisioning..',
	btntext: 'learn more',
	btnlink:'/homepage'
}
const platformData2 = {
	
	title: 'Headline about Sifters Community',
	blurb: 'AI-Powered Fraud Decisioning..',
	btntext: 'learn more',
	btnlink:'/homepage',
}

function ImageWithContent(props) {

	var data

	if (props.page == 'usecase') {
		data = usecaseData
	} else if (props.page == 'platform1') {
		data = platformData1
	}else if (props.page == 'platform2') {
		data = platformData2
	}
	

	return (
		<section className={`image-with-content bg-white no-padding`}>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+20px)] py[140px] items-center -ml-[10px] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="img-wrap pr-[76px] md:pr-0">
							<Image
								src="/solution_use_case_graphic_two.png"
								alt="img"
								width={700}
								height={700}
								quality={75}
							/>
						</div>
					</div>
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">{data.title}</h2>
							<p>{data.blurb}</p>
							{data.hasOwnProperty('btntext') ? (
								<div className="mt-5">
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
	);
}

export default ImageWithContent
