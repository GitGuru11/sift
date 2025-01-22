import React from 'react';
import Image from 'next/image';
import Style from './presents.module.css';

export default function Presenters(props) {
	let data = props.items;
	return (
		<>
			{data?.heading && <h3>{data?.heading}</h3>}
			<div
				className={`presenters bg-blue  rounded-[16px] overflow-hidden sm:rounded-[30px] ${Style.presenters}`}
			>
				<div>
					<Image
						src="/resources/Background.png"
						width={496}
						height={320}
						alt="Image"
					/>
				</div>
				<div>
					<div>
						<div>
							<Image
								src="/kris-Nagel.jpeg"
								width={123}
								height={140}
								alt="kris-Nagel"
							/>
						</div>
						<div>
							<h6>Kris Nagel</h6>
							<p>Chief Executive Officer</p>
						</div>
					</div>
					<div>
						<div>
							<Image
								src="/Armen-Najarian.jpeg"
								width={123}
								height={140}
								alt="kris-Nagel"
							/>
						</div>
						<div>
							<h6>Armen Najarian</h6>
							<p>Chief Marketing Officer</p>
						</div>
					</div>
					<div>
						<div>
							<Image
								src="/Raviv-Levi.jpg"
								width={123}
								height={140}
								alt="kris-Nagel"
							/>
						</div>
						<div>
							<h6>Raviv Levi</h6>
							<p>Chief Product Officer</p>
						</div>
					</div>
					<div>
						<div>
							<Image
								src="/Richard-Heliar.jpeg"
								width={123}
								height={140}
								alt="kris-Nagel"
							/>
						</div>
						<div>
							<h6>Richard Heliar</h6>
							<p>VP, EMEA Sales</p>
						</div>
					</div>
					<div>
						<div>
							<Image
								src="/Brittany_Allen_square_06.jpeg"
								width={123}
								height={140}
								alt="kris-Nagel"
							/>
						</div>
						<div>
							<h6>Brittany Allen</h6>
							<p>Trust & Safety Architect</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
