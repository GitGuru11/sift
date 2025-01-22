import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Btn_Pink from '../../components/button/Button_Pink';
import Link from 'next/link';
import styles from './index.module.css';
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import FileViewer from '../../pages/pdf-viewer/components/Viewer';
import Stats from '../../pages/resources/sections/Statics';
import AwardCards from '../resources/sections/AwardCards';

export default function Index() {
	const bgColor = `bg-darkBlue`;
	return (
		<Layout>
			<div className={`resourceDatailIntro banner bg-white pt-[100px] pb-[64px] lg:pb-[40px] ${styles.resourceDatailIntro}`}>
				<div className="container">
					<h1>
						Sift named a <span> Leader </span>  in 2023 Forrester Wave™ for Digital Fraud
						Management
					</h1>
				</div>
			</div>
			<section className={`NonGatedResource bg-[#fff] resourceDetail pt-0 ${styles.resourceDetail} overflow-x-clip`}>
				<div className="container">
					<div>
						<div className="w-[499px] xxl-up:w-[50%] pr-[60px] laptop:w-[48%] xl:w-[100%] xl:mt-[30px]">
							<p>
								AI-Powered Fraud Decisioning..
							</p>
							<Image
								src="/resources/monitor-image.png"
								width={500}
								height={454}
								alt="Image"
							/>
							<div className={`contentWithList p-0 ${styles.contentWithList}`}>
								<p>
									AI-Powered Fraud Decisioning..
								</p>
								<ul>
									<li>
										<p>
											AI-Powered Fraud Decisioning..
										</p>
									</li>
									<li>
										<p>
											AI-Powered Fraud Decisioning..
										</p>
									</li>
									<li>
										<p>
											AI-Powered Fraud Decisioning..
										</p>
									</li>
								</ul>
							</div>
							<Stats />
							<AwardCards />
							{/* <div className={`logos p-0 ${styles.logos}`}>
								<h3>
									<span>
										#1
									</span>{' '}
									Leader in Digital Trust and Safety
								</h3>
								<div>
									{logos.map((item, i) => {
										return (
											<Link
												href="/"
												key={i}
											>
												<Image
													src={item.img}
													alt="image"
													width={100}
													height={134}
												/>
											</Link>
										);
									})}
								</div>
								<Btn_Pink text='Download Now' link="/" />
							</div> */}
						</div>

						<div className="sticky top-[120px] right-0 xxl-up:w-[50%] laptop:w-[48%] desktop:p-[40px] xl:relative xl:w-[100%] xl:order-[-1] xl:top-0 xl:p-[0!important]">
							<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${styles.boxWrap}`}>
								<h3 className='!text-white'>Overview AI-Powered Fraud Decisioning..</h3>
								<p className='!text-white'>AI-Powered Fraud Decisioning..</p>
								<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
									<Btn_Pink text='Download Now' link="/" />

								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<FileViewer pdfUrl="/one-pager-marketplaces.pdf"/>
			<ThreeColumnGrid />
		</Layout>
	);
}
