import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../../../resources/gated-resources/index.module.css';
import MarketoForm from '../../../../components/MarketoForm';
import Cookies from 'universal-cookie';
import EventRegistrationSectionRenderer from './EventRegistrationRenderer';
import { useRouter } from 'next/router';
const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});

const cookies = new Cookies();
export default function EventRegistration(props) {
	const postData = props.data;
	const [showForm, setShowForm] = useState(!cookies.get('formSubmitted'));
	const eventSections = postData?.eventsregistrationsections?.sections || [];
	const bgColor = `bg-darkBlue`;
	const handleFormSubmit = () => {
		cookies.set('formSubmitted', true, { path: '/' });
		setShowForm(false);
	};
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
		<>
			<section className={`gatedResourceDetail bg-white  banner min-h-[1000px] md:pt-[100px] ${styles.gatedResourceDetail}`}>
				<div className="container">
					<div className="flex items-start flex-wrap lg-up:mt-[30px]">
						<div className={`w-[522px] xxl-up:w-[50%]  laptop:w-[48%] xl:w-[100%] xl:mt-[30px] lg:mt-[0!important] ${styles.content}`}>
							{postData?.title && <h1 className='h2' dangerouslySetInnerHTML={{ __html: postData?.title }}></h1>}
							<div className={`event ${styles.event}`}>
								<ul>
									{postData?.eventbuilder?.cardGridOptions?.location && <li>
										<div>
											<Image
												src="/resources/location.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>{postData?.eventbuilder?.cardGridOptions?.location}</p>
										</div>
									</li>}
									{postData?.eventbuilder?.cardGridOptions?.time && <li>
										<div>
											<Image
												src="/resources/clock.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>{postData?.eventbuilder?.cardGridOptions?.time}</p>
										</div>
									</li>}
									{postData?.eventbuilder?.cardGridOptions?.date && <li>
										<div>
											<Image
												src="/resources/calendar-check-fill.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>{postData?.eventbuilder?.cardGridOptions?.date}</p>
										</div>
									</li>} 
								</ul>
							</div>

							{/* New Blades */}
							{eventSections.map((section, index) => (
								<EventRegistrationSectionRenderer key={index} resType={postData.__typename} type={section.__typename} data={section} />
							))}
						</div>
						<div className={`boxWrap eventegistration bg-blue ${bgColor} absolute w-[551px] text-white right-0  lg:relative xl:relative xl:mt-[40px] lg:mt-[20px!important] desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:max-w-[620px] xl:w-[100%!important] ${styles.boxWrap}`}>
							<div className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[80px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px] md:p-[25px!important] md:py-[30px!important]`}>
							
									<div className={`formWrap ${postData?.slug ? 'mkto-' + postData.slug : ''}`}>
									{postData?.eventsregistrationsections?.formInfo?.formHeading && 
									<h3 className='!text-white'>
										{postData?.eventsregistrationsections?.formInfo?.formHeading}
									</h3>}
									{postData?.eventsregistrationsections?.formInfo?.subtitle && 
									<p className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.eventsregistrationsections?.formInfo?.subtitle }}></p>}
									{postData?.eventsregistrationsections?.formInfo?.formId ?
										<MarketoForm formId={postData?.eventsregistrationsections?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
										:<MarketoForm formId="1817" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
									}
									</div>
							
								<div className={`thankYouMessage mt-[60px] md:mt-[0]`}>
									{/* <>
										<h3 className='!text-white'>{postData?.eventsregistrationsections?.formInfo?.thankYouMessage}</h3>
									</> */}
									<h3 className='!text-white'>Thank you, we will be in contact soon.</h3>
								</div>
								<div className={`${bgColor == 'bg-black mt-[20px] '
									? 'text-white mt-[20px] '
									: ' text-black '
									}`}>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
