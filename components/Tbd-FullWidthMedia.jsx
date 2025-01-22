import Image from 'next/image';
import React from 'react';
import Intro from './FullWidthIntro';

const introDetail = {
	PostNormalText: 'leadership headline AI-Powered Fraud Decisioning..',
	HighLightedText: 'MARKET ',
	bg: 'black',
	blurb:
		'AI-Powered Fraud Decisioning..',
};

function FullWidthMedia() {
	return (
		<section className="FullWidthMedia bg-black no-padding-bottom">
			<div className="container">
				<Intro {...introDetail} />
				<div className="img-wrap xl-up:mt-[80px]">
					<Image src="/sifters.png" alt="img" width={1500} height={700} />
				</div>
			</div>
		</section>
	);
}

export default FullWidthMedia;
