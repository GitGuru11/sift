import React from 'react'
import Image from "next/image";
import styles from '../../styles/GraphSection.module.css'
import GraphContainer from './GraphContainer';
import StatBoxRow from './StatBoxRow';
function FibrTab({items, activeTab}) {
	let data = items;
	const PAGES = [
			'Payment Fraud Data',
			'Chargeback Data',
			'Account Takeover Data',
		];

	const STATS = [
			{
				stats: [
					{'stat': '2.8%', 'description': 'Overall payment fraud attack rate'},
					{'stat': '2.3%', 'description': 'Current manual review rate'},
					{'stat': 'Credit card', 'description': 'Current most common fraudulent payment type'},
					{'stat': 'Points', 'description': 'Current payment type with highest fraud rate'}
				]
			},
			{
				stats: [
					{'stat': '.40%', 'description': 'Current reported general chargeback rate'},
					{'stat': ' .065%', 'description': 'Current reported fraudulent chargeback rate'}
				]
			},
			{
				stats: [
					{'stat': '3.9%', 'description': 'Current account takeover attack rate'},
					{'stat': '11%', 'description': 'Current two-factor authentication rate'}
				]
			}
		];

	return (
		<>
			<section id = {data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} footer-cta relative overflow-hidden xl-up:pt-[160px] !pb-[0]  wide-screen:pt-[240px] lg-up:pt-[125px] ${data.background} ${data.classes} ${data.padding}`}>
				<div className={styles.graphSectionTitle}>
					<h3>{PAGES[activeTab]}</h3>
				</div>
			</section>
			<section id = {data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} footer-cta relative overflow-hidden xl-up:pt-[160px] !pb-[0]  wide-screen:pt-[240px] lg-up:pt-[125px] ${data.background} ${data.classes} ${data.padding}`}>
				<StatBoxRow
					key={activeTab}
					stats={STATS[activeTab].stats}
				/>
			</section>
			<section id = {data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} footer-cta relative overflow-hidden xl-up:pt-[160px] !pb-[0]  wide-screen:pt-[240px] lg-up:pt-[125px] ${data.background} ${data.classes} ${data.padding}`}>
				<GraphContainer/>



				<div className="section-container old-graph">
					<div className="text-container">
						<h2>Interact with FIBR</h2>
						<p className="subheader">
	                        Select your industry or geography to find out how your business’s payment fraud prevention efforts compare to similar companies in the Sift network* over the trailing five quarters.
						</p>
					</div>
					<div className="controls">
						<div
							className="select-container"
							id="filter-industry-container"
						>
							<div
								className="select-container-text"
								id="filter-industry-text"
							>
								<p>
									{' '}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
									>
										<path d="M0 0h256v256H0z" style={{ fill: 'none' }} />
										<path
											d="M237.5 104.3c-.5-2.26-1.96-4.2-4-5.3l-23.8-13.2c-1.27-2.6-2.67-5.1-4.2-7.5l.4-27.2c.02-2.31-.92-4.52-2.6-6.1a112.039 112.039 0 0 0-41.1-23.7c-2.21-.69-4.62-.4-6.6.8l-23.3 14c-2.9-.1-5.7-.1-8.6 0l-23.3-14a8.095 8.095 0 0 0-6.6-.8c-15.25 4.88-29.28 13-41.1 23.8a7.913 7.913 0 0 0-2.6 6l.5 27.2c-1.6 2.4-3 4.9-4.4 7.5L22.5 99a7.675 7.675 0 0 0-4 5.3 111.41 111.41 0 0 0 0 47.4c.5 2.26 1.96 4.2 4 5.3l23.8 13.2c1.28 2.59 2.71 5.09 4.3 7.5l-.5 27.2c-.02 2.31.92 4.52 2.6 6.1a112.99 112.99 0 0 0 41.1 23.7c2.21.69 4.62.4 6.6-.8l23.3-14h8.6l23.4 14a7.28 7.28 0 0 0 4.1 1.2c.81-.04 1.62-.17 2.4-.4 15.26-4.88 29.28-13 41.1-23.8a7.913 7.913 0 0 0 2.6-6l-.4-27.2c1.5-2.4 2.9-4.9 4.3-7.5l23.8-13.2a7.914 7.914 0 0 0 3.9-5.3c3.4-15.62 3.4-31.78 0-47.4ZM172 128c0 24.3-19.7 44-44 44s-44-19.7-44-44 19.7-44 44-44 44 19.7 44 44Z"
											style={{ fill: '#071871' }}
										/>
									</svg>
									<span className="industry-text">
										Filter by industry
									</span>
								</p>
								<span className="menu-arrow" />
							</div>
							<ul className="dropdown-menu filter-industry" id="filter-industry">
								<li id="filter-industry-reset" className="showlist" value="Reset">
									Reset
								</li>
								<li className="showlist" value="All fintech">All fintech</li>
								<li className="fintech-indent showlist" value="Buy now, pay later">
									Buy now, pay later
								</li>
								<li className="fintech-indent showlist" value="Cryptocurrency">
									Cryptocurrency
								</li>
								<li className="fintech-indent showlist" value="Digital wallets">
									Digital wallets
								</li>
								<li className="fintech-indent showlist" value="Loyalty">
									Loyalty
								</li>
								<li
									className="fintech-indent Neobanks"
									value="Neo & challenger banks"
								>
									Neo &amp; challenger banks
								</li>
								<li
									className="fintech-indent showlist"
									value="Payment service providers"
								>
									Payment service providers
								</li>
								<li className="fintech-indent showlist" value="Remittances">
									Remittances
								</li>
								<li className="showlist" value="Digital goods & services">
									Digital goods &amp; services
								</li>
								<li className="showlist" value="Food ordering & delivery">
									Food ordering &amp; delivery
								</li>
								<li className="showlist" value="iGaming & online gambling">
									iGaming &amp; online gambling
								</li>
								<li className="showlist" value="Marketplaces">Marketplaces</li>
								<li className="showlist" value="Online travel & lodging">
									Online travel &amp; lodging
								</li>
								<li className="showlist" value="Retail">Retail</li>
								<li className="Ticketing" value="Ticketing">Ticketing</li>
								<li className="showlist" value="Transportation">Transportation</li>
							</ul>
						</div>
						<span className="or">OR</span>
						<div
							className="select-container"
							id="filter-geography-container"
						>
							<div
								className="select-container-text"
								id="filter-geography-text"
							>
								<p>
									{' '}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
									>
										<path d="M0 0h256v256H0z" style={{ fill: 'none' }} />
										<path
											d="m225.9 163.2.3-1c7.74-22.14 7.74-46.26 0-68.4l-.3-1C211 51.55 171.86 24.04 128 24c-43.86.04-83 27.55-97.9 68.8l-.3 1a103.647 103.647 0 0 0 0 68.4l.3 1c14.95 41.21 54.06 68.7 97.9 68.8 43.86-.04 83-27.55 97.9-68.8ZM128 45.6A108.496 108.496 0 0 1 153.5 88h-51A108.496 108.496 0 0 1 128 45.6ZM102.5 168h51a108.496 108.496 0 0 1-25.5 42.4 108.496 108.496 0 0 1-25.5-42.4Zm-4.2-16a126.233 126.233 0 0 1 0-48h59.4c3.07 15.85 3.07 32.15 0 48H98.3Zm75.7-48h38.7c4.4 15.7 4.4 32.3 0 48H174c2.67-15.89 2.67-32.11 0-48Zm32.4-16h-36a128.641 128.641 0 0 0-24.1-46.1A88.597 88.597 0 0 1 206.4 88Zm-60.1 126.1a128.641 128.641 0 0 0 24.1-46.1h36a88.597 88.597 0 0 1-60.1 46.1Z"
											style={{ fill: '#071871' }}
										/>
									</svg>
									<span className="geo-text">Filter by geography</span>
								</p>
								<span className="menu-arrow" />
							</div>
							<ul className="dropdown-menu" id="filter-geography">
								<li id="filter-geo-reset" value="Reset">
									Reset
								</li>
								<li value="AMER">United States and Canada</li>
								<li value="APAC">Asia Pacific</li>
								<li value="LATAM">Central and South America</li>
								<li value="EMEA">Europe, Middle East, and Africa</li>
							</ul>
						</div>
					</div>

					<div id="payment-fraud-attack-rate" className="panel">
						<div className="text">
							<div className="icon-container payment-fraud-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
								>
									<path d="M44.07 7.6H12.39c-1.46 0-2.64 1.18-2.64 2.64v9.99c3.45.09 6.64 1.82 8.58 4.7 1.6 2.37 2.18 5.22 1.64 8.03-.07.35-.16.69-.26 1.03h24.36c1.46 0 2.64-1.18 2.64-2.64V10.24c0-1.46-1.18-2.64-2.64-2.64ZM29.55 28.72h-2.64c-.73 0-1.32-.59-1.32-1.32s.59-1.32 1.32-1.32h2.64c.73 0 1.32.59 1.32 1.32s-.59 1.32-1.32 1.32Zm10.56 0h-5.28c-.73 0-1.32-.59-1.32-1.32s.59-1.32 1.32-1.32h5.28c.73 0 1.32.59 1.32 1.32s-.59 1.32-1.32 1.32Zm3.96-14.37H12.39v-4.11h31.68v4.11Z"></path>
									<path d="M9.14 22.76c-4.22.16-7.65 3.56-7.84 7.79a8.124 8.124 0 0 0 3.59 7.15v1.4c0 .72.59 1.31 1.31 1.31h.65c.18 0 .33-.15.33-.33v-1.94c0-.35.26-.65.61-.68.36-.02.67.25.69.61v2c0 .18.15.33.33.33h1.31c.18 0 .33-.15.33-.33v-1.94c0-.35.26-.65.61-.68.36-.02.67.25.69.61v2c0 .18.15.33.33.33h.65c.72 0 1.31-.59 1.31-1.31v-1.4c3.74-2.52 4.72-7.6 2.2-11.34a8.182 8.182 0 0 0-7.09-3.59Zm-2.62 11.1a1.63 1.63 0 1 1 0-3.26 1.63 1.63 0 0 1 0 3.26Zm5.88 0a1.63 1.63 0 1 1 0-3.26 1.63 1.63 0 0 1 0 3.26Z"></path>
									<path d="M0 0h48v48H0z" style={{ fill: 'none' }} />
								</svg>
							</div>
							<h3>Payment fraud attack rate</h3>
							<p className="text-sm">
								Average blocked payment fraud rate by&nbsp;quarter
							</p>
							<div className="graph-key payment-fraud">
								<div className="dotted-line-container">
									<hr className="dotted-line" />
									<p className="text-sm">
										Overall payment fraud attack rate
									</p>
								</div>
								<div className="solid-line-container">
									<hr className="solid-line" />
									<p className="text-sm">
										Industry or geo-specific payment fraud attack rate
									</p>
								</div>
							</div>
						</div>
						<div className="chart" id="block">
							<div
								className="tooltip"
								style={{ opacity: 0, color: 'rgb(113, 50, 214)' }}
							/>
						</div>
					</div>
	                  <div id="chargeback-rate" className="panel chargebackRate">
						<div className="text">
							<div className="icon-container chargeback-icon">
	                        <svg id="Layer_5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 90 90">
	                            <defs>
	                            <style dangerouslySetInnerHTML={{__html: "\n                                                #Layer_5 .cls-1 {\n                                                    fill: none;\n                                                }\n\n                                                #Layer_5 .cls-1, #Layer_5 .cls-2 {\n                                                    stroke-width: 0px;\n                                                }\n\n                                                #Layer_5 .cls-2 {\n                                                    fill: #2e69ff;\n                                                }\n                                                " }} />
	                            </defs>
	                            <polygon className="cls-1" points="24 29.5 15.2 52 13.1 57.4 20.9 57.4 34.9 57.4 24 29.5" />
	                            <path className="cls-1" d="M47.6,24.4c-.4-.3-.9-.6-1.5-.7h-.5c-.2-.1-.3-.1-.5-.1-.6,0-1.2.1-1.7.4-.3.1-.6.3-.8.5-.9.7-1.5,1.8-1.5,3.1s0,.4,0,.6c.3,1.9,1.9,3.3,3.9,3.3s2.7-.8,3.4-2c.3-.6.6-1.3.6-2s-.4-2-1.1-2.7c-.1-.1-.3-.3-.4-.4Z" />
	                            <polygon className="cls-1" points="55.4 65.4 77.2 65.4 66.3 37.4 55.4 65.4" />
	                            <path className="cls-2" d="M82.9,65.8c0-.2,0-.3,0-.4h0c0,0-14.1-36.1-14.1-36.1,0,0,0,0,0,0,0-.2-.2-.4-.3-.6,0,0,0,0,0-.1-.1-.2-.3-.3-.5-.5,0,0,0,0,0,0-.2-.1-.4-.2-.6-.3,0,0-.1,0-.2,0,0,0-.1,0-.2,0l-12.7-2.4c-.8-3.1-3.2-5.6-6.3-6.5v-7.5c0-1.5-1.2-2.6-2.6-2.6h0c-1.5,0-2.6,1.2-2.6,2.6v7.5c-2,.6-3.6,1.8-4.8,3.4l-13-2.5h-.2c0,0-.1,0-.2,0-.1,0-.2,0-.3,0s-.2,0-.4,0c0,0-.2,0-.3,0-.6.1-1.1.5-1.5,1,0,0,0,.2-.1.2,0,.1-.1.2-.2.3l-2.4,6.1-7.3,18.7s0,0,0,0l-1.6,4-2.8,7.1h0c0,.2,0,.4,0,.5,0,.2,0,.3,0,.5h0c0,3.4,1,6.5,2.7,9.1,1.2,1.8,2.7,3.4,4.5,4.6,2,1.4,4.3,2.3,6.8,2.8.9.2,1.8.2,2.8.2s1.4,0,2-.1h0c8.2-1,14.7-8,14.7-16.5h0c0-.3,0-.4,0-.6,0-.2,0-.3,0-.5h0c0,0-11-28.2-11-28.2l6.8,1.4c1.2,3.7,4.7,6.3,8.7,6.3s5.2-1.3,7-3.2l9.3,1.8-11.7,29.9h0c0,.2,0,.4,0,.5,0,.2,0,.3,0,.5h0c0,9.3,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.6h0c0-.3,0-.4-.1-.6h0ZM20.9,57.4h-7.7l2.1-5.4,8.8-22.5,10.9,27.9h-14,0ZM48.5,29.5c-.7,1.2-2,2-3.4,2s-3.6-1.5-3.9-3.3c0-.2,0-.4,0-.6,0-1.2.6-2.4,1.5-3.1.2-.2.5-.4.8-.5.5-.2,1.1-.4,1.7-.4s.3,0,.5,0h.5c.5.2,1,.5,1.5.8.2.1.3.2.4.4.7.7,1.1,1.6,1.1,2.7s-.2,1.4-.6,2ZM55.4,65.4l10.9-28,10.9,28h-21.8Z" />
	                        </svg>
							</div>
	                        <h3>General chargeback rate</h3>
							<p className="text-sm">
								Average general chargeback rate by quarter
							</p>
	                        <div className="graph-key chargeback-rate">
								<div className="dotted-line-container">
									<hr className="dotted-line" />
									<p className="text-sm">
										Overall general chargeback rate
									</p>
								</div>
								<div className="solid-line-container">
									<hr className="solid-line" />
									<p className="text-sm">
										Industry or geo-specific general chargeback rate
									</p>
								</div>
							</div>
						</div>
						<div className="chart" id="chargeback">
							<div
								className="tooltip"
								style={{ opacity: 0, color: 'rgb(49, 108, 255)' }}
							/>
						</div>
					</div>
					<div id="fradulent-chargeback-rate" className="panel fradulentChargebackRate">
						<div className="text">
							<div className="icon-container chargeback-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									id="b"
									viewBox="0 0 48 48"
									fill="hsl(223, 100%, 60%)"
								>
									<defs>
										<style
											dangerouslySetInnerHTML={{
												__html:
													'\n                                            .d {\n                                                stroke-width: 0\n                                            }\n                                        ',
											}}
										/>
									</defs>
									<path
										d="M0 0h48v48H0z"
										style={{ strokeWidth: 0, fill: 'none' }}
									/>
									<path
										d="M47.144 33.287c-.015-.076-.011-.152-.04-.227l-.013-.032v-.003L40.063 15.02l-.008-.013a1.29 1.29 0 0 0-.174-.302c-.016-.021-.033-.04-.05-.06a1.332 1.332 0 0 0-.24-.223l-.017-.014a1.298 1.298 0 0 0-.393-.175c-.034-.009-.066-.023-.101-.03L32.729 13a4.612 4.612 0 0 0-3.134-3.245V6.02a1.32 1.32 0 0 0-2.64 0v3.735a4.61 4.61 0 0 0-2.404 1.696l-6.59-1.248c-.03-.006-.058.005-.087.001-.053-.007-.104-.024-.158-.024-.065 0-.126.019-.189.029-.045.007-.09.009-.134.02-.3.076-.56.253-.741.504-.027.038-.047.082-.071.123-.031.055-.071.104-.095.164l-4.854 12.439a10.337 10.337 0 0 1 2.468.938l3.616-9.266L23.168 29.1h-4.581c.07.147.147.291.21.44.062.145.11.293.165.44.601 1.615.787 3.322.575 4.978a10.56 10.56 0 0 1-.297 1.452 10.54 10.54 0 0 1-.493 1.419c4.109-.509 7.303-4.004 7.327-8.242v-.019l.001-.028c0-.08-.032-.15-.046-.227-.015-.085-.012-.17-.044-.253l-5.507-14.111 3.439.68c.618 1.825 2.327 3.151 4.358 3.151 1.39 0 2.623-.63 3.471-1.604l4.658.921-5.826 14.928v.003l-.014.032c-.029.075-.025.151-.04.227-.017.085-.051.163-.051.253l.002.03v.015c.025 4.589 3.764 8.315 8.358 8.315s8.334-3.726 8.358-8.315v-.015l.002-.03c0-.09-.034-.168-.051-.253Zm-8.309-14.156L44.287 33.1H33.384l5.452-13.969Zm-10.56-2.991a1.978 1.978 0 0 1-1.948-1.666 1.92 1.92 0 0 1-.032-.314c0-.624.296-1.175.748-1.538a1.968 1.968 0 0 1 1.231-.442c.09 0 .175.015.262.026l.236.045c.273.071.52.199.734.371a1.97 1.97 0 0 1 .748 1.539c0 .368-.108.709-.283 1.005a1.973 1.973 0 0 1-1.696.975Z"
										className="d"
									/>
									<path
										d="M17.316 35.24a8.332 8.332 0 0 0-.674-5.26 7.93 7.93 0 0 0-.225-.44 8.697 8.697 0 0 0-.265-.44c-.034-.053-.061-.108-.096-.16a8.348 8.348 0 0 0-2.741-2.533 8.38 8.38 0 0 0-2.459-.958 8.353 8.353 0 0 0-2.04-.179l.01.02c-4.3.16-7.82 3.64-8.01 7.95a8.27 8.27 0 0 0 3.66 7.3v1.43c0 .74.6 1.33 1.33 1.33h.67c.18 0 .33-.15.33-.33v-1.98c0-.36.27-.66.63-.69.37-.02.68.26.71.62v2.04c0 .18.15.33.33.33h1.33c.18 0 .33-.15.33-.33v-1.98c0-.36.27-.66.63-.69.37-.02.68.26.71.62v2.04c0 .18.15.33.33.33h.67c.74 0 1.33-.6 1.33-1.33v-1.43a8.306 8.306 0 0 0 2.547-2.741 8.46 8.46 0 0 0 .964-2.539Zm-11.17 1.39c-.92 0-1.67-.75-1.67-1.67s.75-1.67 1.67-1.67 1.67.75 1.67 1.67-.75 1.66-1.67 1.67Zm6.817-.221c-.24.134-.513.218-.807.221-.92 0-1.67-.75-1.67-1.67 0-.311.091-.598.24-.848a1.669 1.669 0 0 1 1.43-.822c.92 0 1.67.75 1.67 1.67 0 .143-.024.279-.057.41a1.668 1.668 0 0 1-.806 1.038Z"
										className="d"
									/>
								</svg>
							</div>
							<h3>Reported fraudulent chargeback rate</h3>
							<p className="text-sm">
								Average reported fraudulent chargeback rate by quarter
							</p>
							<div className="graph-key chargeback-rate">
								<div className="dotted-line-container">
									<hr className="dotted-line" />
									<p className="text-sm">
										Overall fraudulent chargeback rate
									</p>
								</div>
								<div className="solid-line-container">
									<hr className="solid-line" />
									<p className="text-sm">
										Industry or geo-specific fraudulent chargeback rate
									</p>
								</div>
							</div>
						</div>
						<div className="chart" id="fraudchargeback">
							<div
								className="tooltip"
								style={{ opacity: 0, color: 'rgb(49, 108, 255)' }}
							/>
						</div>
					</div>

					<div id="manual-review-rate" className="panel manualReviewRate">
						<div className="text">
							<div className="icon-container manual-review-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
								>
									<path d="M0 0h48v48H0z" style={{ fill: 'none' }} />
									<path d="M17.56 19.94c.59.59.59 1.54 0 2.12s-6 6-6 6c-.59.59-1.54.59-2.12 0l-3-3a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0l1.94 1.94 4.94-4.94a1.49 1.49 0 0 1 2.12 0Zm-2.12-12-4.94 4.94-1.94-1.94a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l3 3c.59.59 1.54.59 2.12 0l6-6c.59-.59.59-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0Zm0 24-4.94 4.94-1.94-1.94c-.59-.59-1.54-.59-2.12 0s-.59 1.54 0 2.12l3 3c.59.59 1.54.59 2.12 0l6-6c.59-.59.59-1.54 0-2.12a1.49 1.49 0 0 0-2.12 0ZM40.5 9H24c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h16.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5Zm0 24H24c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h16.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5Zm0-12H24c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h16.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5Z"></path>
								</svg>
							</div>
							<h3>Manual review rate</h3>
							<p className="text-sm">
								Average manual review rate by&nbsp;quarter
							</p>
							<div className="graph-key manual-review">
								<div className="dotted-line-container">
									<hr className="dotted-line" />
									<p className="text-sm">Overall manual review rate</p>
								</div>
								<div className="solid-line-container">
									<hr className="solid-line" />
									<p className="text-sm">
										Industry or geo-specific manual review&nbsp;rate
									</p>
								</div>
							</div>
						</div>
						<div className="chart" id="review">
							<div
								className="tooltip"
								style={{ opacity: 0, color: 'rgb(54, 204, 190)' }}
							/>
						</div>
					</div>
				</div>


	            <div className="section-container ato invisible">
					<div className="text-container">
						<h2>Interact with FIBR</h2>
						<p className="subheader">
							Select your industry or geography to find out how your business’s account takeover fraud prevention efforts compare to similar companies in the Sift network* over the trailing five quarters.
						</p>
					</div>
	                <div className="controls">
	                    <div className="select-container" id="filter-industry-container-new">
	                        <div className="select-container-text" id="filter-industry-text-new">
								<p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
									>
										<path d="M0 0h256v256H0z" style={{ fill: 'none' }} />
										<path
											d="M237.5 104.3c-.5-2.26-1.96-4.2-4-5.3l-23.8-13.2c-1.27-2.6-2.67-5.1-4.2-7.5l.4-27.2c.02-2.31-.92-4.52-2.6-6.1a112.039 112.039 0 0 0-41.1-23.7c-2.21-.69-4.62-.4-6.6.8l-23.3 14c-2.9-.1-5.7-.1-8.6 0l-23.3-14a8.095 8.095 0 0 0-6.6-.8c-15.25 4.88-29.28 13-41.1 23.8a7.913 7.913 0 0 0-2.6 6l.5 27.2c-1.6 2.4-3 4.9-4.4 7.5L22.5 99a7.675 7.675 0 0 0-4 5.3 111.41 111.41 0 0 0 0 47.4c.5 2.26 1.96 4.2 4 5.3l23.8 13.2c1.28 2.59 2.71 5.09 4.3 7.5l-.5 27.2c-.02 2.31.92 4.52 2.6 6.1a112.99 112.99 0 0 0 41.1 23.7c2.21.69 4.62.4 6.6-.8l23.3-14h8.6l23.4 14a7.28 7.28 0 0 0 4.1 1.2c.81-.04 1.62-.17 2.4-.4 15.26-4.88 29.28-13 41.1-23.8a7.913 7.913 0 0 0 2.6-6l-.4-27.2c1.5-2.4 2.9-4.9 4.3-7.5l23.8-13.2a7.914 7.914 0 0 0 3.9-5.3c3.4-15.62 3.4-31.78 0-47.4ZM172 128c0 24.3-19.7 44-44 44s-44-19.7-44-44 19.7-44 44-44 44 19.7 44 44Z"
											style={{ fill: '#071871' }}
										/>
									</svg>
									<span className="industry-text">
										Filter by industry
									</span>
								</p>
								<span className="menu-arrow" />
							</div>
	                        <ul className="dropdown-menu-new filter-industry-new" id="filter-industry-new">
	                            <li id="filter-industry-reset-new" className="filter-industry-reset-new" value="Reset">
	                                    Reset
	                                </li>
	                            {/* <li value="" selected="true"  disabled="disabled" defaultValue>Filter by industry</li> */}
	                            <li value="All fintech">All fintech</li>
	                            <li className="fintech-indent" value="Cryptocurrency">Cryptocurrency</li>
	                            <li className="fintech-indent" value="Loyalty">Loyalty</li>
	                            <li className="fintech-indent" value="Remittances">Remittances</li>
	                            <li value="Food ordering & delivery">Food ordering & delivery</li>
	                            <li value="Marketplaces">Marketplaces</li> 
	                            <li value="Retail">Retail</li>
	                            <li value="Ticketing">Ticketing</li>
	                            <li value="Transportation">Transportation</li>
	                        </ul>
	                    </div>
	                    {/*
	                    <span className="or">OR</span>*/}
	                    <div id="filter-geography-container-new">
	                        {/*<div className="select-container-text" id="filter-geography-text-new">
								<p>
									{' '}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
									>
										<path d="M0 0h256v256H0z" style={{ fill: 'none' }} />
										<path
											d="m225.9 163.2.3-1c7.74-22.14 7.74-46.26 0-68.4l-.3-1C211 51.55 171.86 24.04 128 24c-43.86.04-83 27.55-97.9 68.8l-.3 1a103.647 103.647 0 0 0 0 68.4l.3 1c14.95 41.21 54.06 68.7 97.9 68.8 43.86-.04 83-27.55 97.9-68.8ZM128 45.6A108.496 108.496 0 0 1 153.5 88h-51A108.496 108.496 0 0 1 128 45.6ZM102.5 168h51a108.496 108.496 0 0 1-25.5 42.4 108.496 108.496 0 0 1-25.5-42.4Zm-4.2-16a126.233 126.233 0 0 1 0-48h59.4c3.07 15.85 3.07 32.15 0 48H98.3Zm75.7-48h38.7c4.4 15.7 4.4 32.3 0 48H174c2.67-15.89 2.67-32.11 0-48Zm32.4-16h-36a128.641 128.641 0 0 0-24.1-46.1A88.597 88.597 0 0 1 206.4 88Zm-60.1 126.1a128.641 128.641 0 0 0 24.1-46.1h36a88.597 88.597 0 0 1-60.1 46.1Z"
											style={{ fill: '#071871' }}
										/>
									</svg>
									<span className="geo-text">Filter by geography</span>
								</p>
								<span className="menu-arrow" />
							</div>
	                        <ul className="dropdown-menu-new filter-geography-new" id="filter-geography-new">
	                            <li id="filter-geo-reset-new" className="filter-geo-reset-new" value="Reset">Reset</li>*/}
	                            {/* <li value="" selected="true"  disabled="disabled" defaultValue>Filter by geography</li> */}
	                            {/*<li value="AMER">United States and Canada</li>
	                            <li value="EMEA">Europe, Middle East, and Africa</li>
	                            <li value="LATAM">Mexico, Central and South America</li>
	                        </ul>*/}
	                    </div>
	                </div>
	                <div className="graph-wrap">

	                <div id="fradulent-chargeback-rate-new" className="panel two-factor-auth-rate">
	                   
	                    <div className="text">
	                         <div className="icon-wrap max-w-[48px] mb-[10px]">
								<Image
	                            className="w-full h-full object-cover"
	                            src="/account_takeover_icon_purple.svg"
	                            alt="top"
	                            width="48"
	                            height="48"
	                        />
	                        </div>
	                        <h3>ATO attack rate</h3>
	                        <div className="graph-key">
	                            <div className="dotted-line-container">
	                                <hr className="dotted-line" />
	                                <p className="text-sm">Overall ATO attack rate</p>
	                            </div>
	                            <div className="solid-line-container">
	                                    <hr className="solid-line" />
	                                    <p className="text-sm">
	                                        Industry or geo-specific ATO attack rate
	                                    </p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="chart" id="attempt"></div>
	                </div>
	                <div className="panel ato-attack-rate">
	                    
	                    <div className="text">
	                        <div className="icon-wrap max-w-[48px] mb-[10px]">
								<Image
	                            className="w-full h-full object-cover"
	                            src="/2fa-icon-teal.svg"
	                            alt="top"
	                            width="48"
	                            height="48"
	                        />
	                        </div>
	                    <h3>Two-factor auth rate</h3>
	                    <div className="graph-key">
	                            <div className="dotted-line-container">
	                                <hr className="dotted-line green" />
	                                <p className="text-sm">Overall 2FA rate</p>
	                            </div>
	                            <div className="solid-line-container">
	                                    <hr className="solid-line green" />
	                                    <p className="text-sm">
	                                        Industry or geo-specific fraudulent 2FA rate
	                                    </p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="chart" id="two-factor"></div>
	                </div>
	                </div>
				</div>
			</section>
		</>
	);
}

export default FibrTab;