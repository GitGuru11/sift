import React from 'react'
import styles from '../../styles/PillTab.module.css'
function PillTab({items, activeTab, setActiveTab}) {
	let data = items;
	return (
		<section id = {data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} relative overflow-hidden xl-up:pt-[160px] !pb-[0]  wide-screen:pt-[240px] lg-up:pt-[125px] ${data.background} ${data.classes} ${data.padding}`}>
			<div className={styles.pillTabContainer}>
				<ul className={styles.pillTab}>
					<li className={activeTab === 0 ? styles.activeTab : ''} onClick={()=>setActiveTab(0)}>Payment Fraud Data</li>
					<li className={activeTab === 1 ? styles.activeTab : ''} onClick={()=>setActiveTab(1)}>Chargeback Data</li>
					<li className={activeTab === 2 ? styles.activeTab : ''} onClick={()=>setActiveTab(2)}>Account Takeover Data</li>
				</ul>
			</div>
		</section>
	);
}

export default PillTab;