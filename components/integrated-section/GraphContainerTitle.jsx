import React from 'react'
import Image from "next/image";
import styles from '../../styles/GraphContainer.module.css'
import MarketoForm from '../../components/MarketoForm';
function GraphContainerTitle({items, activeTab}) {

	const tabDetails = [
			{
				title: "Compare your fraud metrics against industry benchmarks from Sift's Global Network",
				description: "Find out how your fraud operations stack up against the competition. Select your industry and/or geography to compare your company's payment fraud rates to those of similar businesses in the Sift network* over the trailing five quarters."
			},
			{
				title: "Compare your fraud metrics against industry benchmarks from Sift's Global Network",
				description: "Find out how your fraud operations stack up against the competition. Select your industry and/or geography to compare your company's chargeback fraud rates to those of similar businesses in the Sift network* over the trailing five quarters."
			},
			{
				title: "Compare your fraud metrics against industry benchmarks from Sift's Global Network",
				description: "Find out how your fraud operations stack up against the competition. Select your industry and/or geography to compare your company's ATO fraud rates to those of similar businesses in the Sift network* over the trailing five quarters."
			}
		];

	let data = items;
	return (
		<div className={styles.container}>
			<h3>{tabDetails[activeTab].title}</h3>
			<p className='!mt-[25px]'>{tabDetails[activeTab].description}</p>
		</div>
	);
}

export default GraphContainerTitle;