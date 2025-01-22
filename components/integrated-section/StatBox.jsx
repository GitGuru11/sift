import React from 'react'
import styles from '../../styles/StatBox.module.css'
function StatBox({stat, description}) {
	return (
		<div className={styles.statBoxContainer}>
			<div className={styles.stat}>{stat}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
}

export default StatBox;