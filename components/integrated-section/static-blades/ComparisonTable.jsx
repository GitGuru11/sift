import React from 'react';
import CTStyles from '../../../styles/ComparisonTable.module.css';

export default function ComparisonTable() {
	return (
		<>
			<div className="sift-comparison-table bg-skyblue">
				<div className="container">
					<div className={CTStyles.table_section}>
						<div className="big-table-wrapper">
							<div className={`${CTStyles.big_table}`}>
								<table>
									<thead>
										<tr>
											<td className={`${CTStyles.td_r1_c1}`}>
												<h3>Feature or functionality</h3>
											</td>
											<td className={`${CTStyles.td_r1_c2}`}>
												<h3 className="sr-only">Sift</h3>
											</td>
											<td className={`${CTStyles.td_r1_c3}`}>
												<h3>Accertify</h3>
											</td>
											<td className={`${CTStyles.td_r1_c4}`}>
												<h3>Why it matters for businesses</h3>
											</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className={CTStyles.c1}>
												<p>
													Global consortium embedded into decision engine fueled
													by 1T events annually representing all Sift customers.
												</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Sift customers are automatically opted-in to a global
													consortium. This diverse dataset, which includes
													content abuse and insights across our entire customer
													base, significantly improves decision accuracy and
													expands risk coverage.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>
													Custom ML model refreshed monthly as part of standard
													offering without additional fee
												</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Custom models that are routinely refreshed mean our
													service consistently adapts to your business, leading
													to greater decision accuracy.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>Continuous scoring</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Real-time score updates provide increased accuracy by
													continuously accounting for customer behavior
													throughout the session lifecycle.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>Independent AI decision engine</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Executing AI models and rules separately and
													sequentially ensures that stale rules don&rsquo;t
													impact the model.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>Dispute Management</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.yes_accertify}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Integrating dispute management with your payment fraud
													solution provides a holistic view into your fraud
													program performance.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>
													Actionable link analysis from a visualization page
												</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Streamlined fraud detection helps teams easily
													identify and act on fraud rings with our link analysis
													visualization page, known as Networks.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>Managed Services</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.yes_accertify}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Managed services give businesses access to specialized
													expertise and continuous monitoring capabilities, with
													support for regulatory compliance, risk mitigation,
													and scalability.
												</p>
											</td>
										</tr>
										<tr className={`${CTStyles.row_9}`}>
											<td className={`${CTStyles.td_r9_c1} ${CTStyles.c1}`}>
												<p>
													Sift’s publicly-accessible fraud benchmarking
													resource, FIBR
												</p>
											</td>
											<td className={`${CTStyles.td_r9_c2} ${CTStyles.yes}`}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={`${CTStyles.td_r9_c4} ${CTStyles.c4}`}>
												<p>
													The FIBR portal showcases industry- and geo-level
													fraud metrics from Sift’s Global Data consortium. It
													provides fraud teams with trends and benchmarks they
													can use to inform risk strategy and operations.
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className={`${CTStyles.mobile_tables}`}>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>
											Global consortium embedded into decision engine fueled by
											1T events annually representing all Sift customers.
										</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Deriving real-time insights from 1T annual events—rather
											than billions—creates more diverse datasets that
											significantly improve decision accuracy, expand risk
											coverage, and help fine-tune global and custom
											ML&nbsp;models.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>
											Custom ML model refreshed monthly as part of standard
											offering without additional fee
										</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Custom models that are routinely refreshed mean our
											service consistently adapts to your business, leading to
											greater decision accuracy.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Continuous scoring</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Real-time score updates provide increased accuracy by
											continuously accounting for customer behavior throughout
											the session lifecycle.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Independent AI decision engine</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Executing AI models and rules separately and sequentially
											ensures that stale rules don&rsquo;t impact the model.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Dispute Management</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div
													className={`${CTStyles.symbol} ${CTStyles.symbol_yes}`}
												></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Integrating dispute management with your payment fraud
											solution provides a holistic view into your fraud program
											performance.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Actionable link analysis from a visualization page</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Streamlined fraud detection helps teams easily identify
											and act on fraud rings with our link analysis
											visualization page, known as Networks.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Managed Services</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div
													className={`${CTStyles.symbol} ${CTStyles.symbol_yes}`}
												></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Managed services give businesses access to specialized
											expertise and continuous monitoring capabilities, with
											support for regulatory compliance, risk mitigation, and
											scalability.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>
											Sift’s publicly-accessible fraud benchmarking resource,
											FIBR
										</h2>
									</div>
									<div className={CTStyles.middle}>
										<div className={CTStyles.middle_wrapper}>
											<div className={CTStyles.sift_side}>
												<div className={CTStyles.name}>
													<span className="sr-only">Sift</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
											<div className={CTStyles.accertify_side}>
												<div className={CTStyles.name}>
													<span>Accertify</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											The FIBR portal showcases industry- and geo-level fraud
											metrics from Sift’s Global Data consortium. It provides
											fraud teams with trends and benchmarks they can use to
											inform risk strategy and operations.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
