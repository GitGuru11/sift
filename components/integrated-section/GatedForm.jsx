import React, {useEffect } from 'react';
import style from '../../styles/popups/popups.module.css';
import { useRouter } from 'next/router';
import MarketoForm from '../../components/MarketoForm';

export default function GatedForm(props) {
	let data = props.items;
	const bgColor = `bg-darkBlue`;
	const router = useRouter();
	const aliId = router.query?.aliId;
	useEffect(() => {
		const thankYouMessage = document.querySelector('.thankYouMessage');
		const formWrap = document.querySelector('.formWrap');
		const GatedHide = document.querySelector('.GatedHide');
		const FormPopup = document.querySelector('.FormPopup');
		if (aliId && aliId !== '') {
			formWrap?.classList.add('hidden');
			GatedHide.classList.add('ShowSection');
			FormPopup.classList.add('OverayHidden');
			thankYouMessage.classList.remove('hidden');
			document.body.classList.add('ShowSection');
		} else {
			formWrap?.classList.remove('hidden');
			thankYouMessage.classList.add('hidden');
		}
	}, [aliId]);

	return (
		<section id={data.id ? data.id : ''}  className={`FormPopup Popup ${style.fullWithPattern} ${style.popupPatterns} left-0 top-0 z-[99] overflow-y-scroll bg-black pt-[100px] pb-[100px] md:py-[40px] ${data.background} ${data.classes} ${data.padding}`}>
			<div className="container">
				<div className={`popupWrap w-full relative mx-auto  z-10 max-w-[1165px]`}>
					<div className="intro-block text-center">
						{data?.title && <h2 className="mb-[20px]">{data?.title}</h2>}
						{data?.subtitle && <p>{data?.subtitle}</p>}
					</div>
					<div className={`imgWithContent p-[40px] bg-white max-w-[600px] m-auto rounded-lg`}>
						{data?.formId && <div className="formWrap">
							<MarketoForm formId={data?.formId} className="mktFrom" />
						</div>}
						<div className={`thankYouMessage`}>
							<h3 className='!text-black'>{data?.thankYouMessage}</h3>
						</div>
						<div className={`${bgColor == 'bg-black mt-[20px] ' ? 'text-white mt-[20px] ': ' text-black '}`}></div>
					</div>
				</div>
			</div>

		</section>
	);
}

