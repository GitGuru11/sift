import Image from 'next/image'
import React from 'react'
import Intro from './FullWidthIntro';

    const introDetail = {
			PreNormalText: 'About working at Sift & its values',
			bg: 'black',
			blurb:
				'AI-Powered Fraud Decisioning..',
		};

  const cardsData = [
		{
			imgpath: '/star.svg',
			heading: 'Start with the customer',
			subHeading:
				'We strive to prioritize our audience’s needs, not our personal agenda. We go above and beyond to put our customers first.',
		},
		{
			imgpath: '/courage.svg',
			heading: 'Courage over comfort',
			subHeading:
				'We value vulnerability, invite candid feedback, and believe true growth happens when we leave our comfort zone.',
		},
		{
			imgpath: '/get_shift.svg',
			heading: 'Get Sift done',
			subHeading:
				'We value progress over perfection, always acting with urgency and grit because we believe that passion and perseverance are the answer to adversity.',
		},
		{
			imgpath: '/ever_better.svg',
			heading: 'Even better',
			subHeading:
				'We are continuously improving our technology, our customer service, ourselves. We view mistakes as opportunities to be ever better.',

		},
		{
			imgpath: '/winas_oneteam.svg',
			heading: 'Win as one team',
			subHeading:
				'We’re running toward the finish line, together. The sum is greater than the whole of its parts.',
		},
	];

function IconWithGrid() {
    // console.log(sectionData)
  return (
		<section className={`IconWithGrid bg-white desktop-mid:pt-0 tablet:pt-0 large-icon`} id="life-at-sift">
			<div className="container">
				<Intro {...introDetail} />
				<div className="card_wrap grid grid-cols-5 desktop:grid-cols-3 tablet:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[40px] xs:gap-[20px]">
					{cardsData.map((item, i) => {
						return (
							<div
								key={i}
								className={`cards relative bg-white rounded-[16px]`}
								data-aos="fade-up"
								data-aos-delay="500"
							>
								<div className="icon-wrap mb-[18px]">
									<Image src={item.imgpath} alt="icon" width={120} height={120} />
								</div>
								<h4 className="mb-[9px]">{item.heading}</h4>
								<p className="small_font">{item.subHeading}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default IconWithGrid
