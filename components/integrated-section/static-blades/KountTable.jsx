import React from 'react';
import CTStyles from '../../../styles/ComparisonTable.module.css';

export default function KountTable() {
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
												<h3>Kount</h3>
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
													Global data consortium fueled by 1 trillion annual
													events
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
													Deriving real-time insights from 1T annual events**
													creates diverse datasets that significantly improve
													decision accuracy, expand risk coverage, and fine-tune
													global and custom ML models.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>Coverage for spam & content abuse (content fraud)</p>
											</td>
											<td className={CTStyles.yes}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													Real-time protection against content fraud attacks
													ensures you won’t outgrow the solution as your
													business scales—and you won’t be hit by scams and spam
													you can’t fight.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>
													Actionable,{' '}
													<u style={{ textDecoration: 'underline' }}>visual</u>{' '}
													link analysis{' '}
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
													Analysts can identify and make individual or bulk
													decisions on related risky events{' '}
													<span style={{ fontWeight: 600 }}>directly</span> from
													the link analysis page, rather than having to export
													data to analyze separately. This drives efficiency and
													provides transparency into connected events.
												</p>
											</td>
										</tr>
										<tr>
											<td className={CTStyles.c1}>
												<p>
													Straightforward, user-first decision explainability
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
													Our Console is designed for frontline analysts, who
													need to fully understand decisioning to successfully
													fight fraud and service customers. Sift guides users
													towards explicit actions with clear, comprehensive
													explanations of how decisions are made.
												</p>
											</td>
										</tr>
										<tr className={`${CTStyles.row_9}`}>
											<td className={`${CTStyles.td_r9_c1} ${CTStyles.c1}`}>
												<p>
													Sift-run online customer community of users and
													dedicated product experts
												</p>
											</td>
											<td className={`${CTStyles.td_r9_c2} ${CTStyles.yes}`}>
												<p className="sr-only">Yes</p>
											</td>
											<td className={CTStyles.no}>
												<p className="sr-only">No</p>
											</td>
											<td className={CTStyles.c4}>
												<p>
													An exclusive customer community means that Sift users
													aren’t alone in the fight against fraud, with
													real-time access to internal product experts and
													peer-tested best practices.
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
											Global data consortium fueled by 1 trillion annual events
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
													<span>Kount</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Deriving real-time insights from 1T annual events**
											creates diverse datasets that significantly improve
											decision accuracy, expand risk coverage, and fine-tune
											global and custom ML models.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Coverage for spam & content abuse (content fraud)</h2>
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
													<span>Kount</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Real-time protection against content fraud attacks ensures
											you won’t outgrow the solution as your business scales—and
											you won’t be hit by scams and spam you can’t fight.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>
											Actionable,{' '}
											<u style={{ textDecoration: 'underline' }}>visual</u> link
											analysis{' '}
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
													<span>Kount</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Analysts can identify and make individual or bulk
											decisions on related risky events{' '}
											<span style={{ fontWeight: 600 }}>directly</span> from the
											link analysis page, rather than having to export data to
											analyze separately. This drives efficiency and provides
											transparency into connected events.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>Straightforward, user-first decision explainability</h2>
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
													<span>Kount</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											Our Console is designed for frontline analysts, who need
											to fully understand decisioning to successfully fight
											fraud and service customers. Sift guides users towards
											explicit actions with clear, comprehensive explanations of
											how decisions are made.
										</p>
									</div>
								</div>
								<div className={CTStyles.mt}>
									<div className={CTStyles.top}>
										<h3>Feature or functionality</h3>
										<h2>
											Sift-run online customer community of users and dedicated
											product experts
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
													<span>Kount</span>
												</div>
												<div className={CTStyles.symbol}></div>
											</div>
										</div>
									</div>
									<div className={CTStyles.bottom}>
										<h3>Why it matters for&nbsp;businesses</h3>
										<p>
											An exclusive customer community means that Sift users
											aren’t alone in the fight against fraud, with real-time
											access to internal product experts and peer-tested best
											practices.
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
