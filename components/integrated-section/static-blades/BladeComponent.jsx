import React from 'react';
import ColorLogoTab from './ColorLogoTab';
import Iconography from './Iconography';
import Typography from './Typography';
import Visualizations from './Visualizations';
import IntroWithLogo from './IntroWithLogo';
import IntroWithColors from './IntroWithColors';
import ComparisonTable from './ComparisonTable';
import KountTable from './KountTable';

function BladeComponent(props) {
	let data = props.items;
	const fnStaticComponent = () => {
		switch (data.blades) {
			case 'colorlogotab':
				return <ColorLogoTab />;
			case 'comparisontable':
				return <ComparisonTable />;
			case 'kounttable':
				return <KountTable />;
			case 'iconography':
				return <Iconography />;
			case 'typography':
				return <Typography />;
			case 'introwithcolors':
				return <IntroWithColors />;
			case 'visualizations':
				return <Visualizations />;
			case 'introwithlogo':
				return <IntroWithLogo />;
			default:
				return <h1>No Component match</h1>;
		}
	};

	return <>{fnStaticComponent()}</>;
}

export default BladeComponent;
