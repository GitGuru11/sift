import React from 'react';
import styles from '../../styles/StatBoxRow.module.css';
import StatBox from './StatBox';

function StatBoxRow({ activeTab, stats }) {
	return (
		<div className={styles.statBoxRowContainer}>
			<div
				 key={activeTab}
				 className={styles.statBoxRow}
				 >
				{stats.map(stat => (
					<StatBox
					  key={stat.stat}
					  stat={stat.stat}
					  description={stat.description}
					/>
				))}
			</div>
		</div>
	);
}

export default StatBoxRow;