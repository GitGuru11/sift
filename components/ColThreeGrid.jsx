import StatsCard from './StatsCard.jsx';

const data = [
	{
		imageUrl: '/yellow-bg-stats.svg',
		stats: '1',
		title: 'Benefit one',
		content:
			'AI-Powered Fraud Decisioning..',
		linkText: 'LEARN MORE',
		url: '/',
	},
	{
		imageUrl: '/yellow-bg-stats.svg',
		stats: '2',
		title: 'Benefit two',
		content:
			'AI-Powered Fraud Decisioning..',
		linkText: 'LEARN MORE',
		url: '/',
	},
	{
		imageUrl: '/yellow-bg-stats.svg',
		stats: '3',
		title: 'Benefit three',
		content:
			'AI-Powered Fraud Decisioning..',
		linkText: 'LEARN MORE',
		url: '/',
	},
];

const ColThreeGrid = () => {
	return (
		<section className={`padding-medium col-three-grid relative bg-darkBlue wide-screen:pt-[100px]`}>
			<div className="container">
				<div
					className={`relative flex wide-screen:gap-9 gap-6 desktop:gap-4 z-10 flex-wrap`}
				>
					{data.map((card, index) => (
						<StatsCard key={index} {...card} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ColThreeGrid;