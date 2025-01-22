import React, { useState, useEffect } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Layout from '../components/Layout';
import style from '../styles/popups/popups.module.css';
import { useRouter } from 'next/router';
import MarketoForm from '../components/MarketoForm';

export default function FormPopup() {
	const bgColor = `bg-darkBlue`;
	const router = useRouter();
	const aliId = router.query?.aliId;
	useEffect(() => {
		const thankYouMessage = document.querySelector('.thankYouMessage');
		const formWrap = document.querySelector('.formWrap');
		if (aliId && aliId !== '') {
			formWrap.classList.add('hidden');
			thankYouMessage.classList.remove('hidden');
		} else {
			formWrap.classList.remove('hidden');
			thankYouMessage.classList.add('hidden');
		}
	}, [aliId]);

	return (
		<section className={`FormPopup Popup ${style.fullWithPattern} ${style.popupPatterns} left-0 top-0 z-[99] overflow-y-scroll bg-black pt-[100px] pb-[100px] md:pt-[200px] md:pb-[200px] md:py-[40px]`}>
			<div className="container">
				<div className={`popupWrap w-full relative mx-auto  z-10 max-w-[1165px]`}>
					<div className={`imgWithContent p-[40px] bg-white max-w-[600px] m-auto rounded-lg`}>
						<div className="formWrap">
							<MarketoForm formId="1817" formData="" className="mktFrom" />
						</div>
						<div className={`thankYouMessage`}>
							<h3 className='!text-black'>Thank you, we will be in contact soon.</h3>
						</div>
						<div className={`${bgColor == 'bg-black mt-[20px] ' ? 'text-white mt-[20px] ': ' text-black '}`}></div>
					</div>
				</div>
			</div>

		</section>
	);
}

