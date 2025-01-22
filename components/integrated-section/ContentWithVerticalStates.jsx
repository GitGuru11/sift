import Image from 'next/image'
import Black_Btn from '../button/Button_Black'

function ContentWithVerticalStates(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`ContentWithVerticalStates ${data.gatedComponent? 'GatedHide' : ''} ${data.background} ${data.classes} ${data.padding}`}>
			<div className="container">
				<div className="wrapper flex-row-reverse flex flex-wrap w-[calc(100%+20px)] items-center -ml-[10px] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="card_wrap w-full grid gap-[40px] pl-[76px] md:pl-0">
							{data?.states && data?.states.map((data, index) => {
								return (
									<div key={index} className="mb-[24px pl-[24px] border-l-[1px] border-black">
										<div className="count">
											<span className="h2 text-[#2E69FF] relative z-10 leading-[0.9!important]">
												{data?.number}
											</span>
											<span className="heading_44  text-[#2E69FF]  relative z-10">
												{data?.symbol}
											</span>
										</div>
										<div className="text_wrap  mt-[10px]">
											<p className="mb-[4px] text-black font-bold">
												{data?.title}
											</p>
											<div className="opacity-80 mb-0 text-black small_font tracking-[0em!important]" dangerouslySetInnerHTML={{ __html: data?.body }} />
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">
								{data?.title}
							</h2>
							<div className="mb-[16px]" dangerouslySetInnerHTML={{ __html: data?.body }} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContentWithVerticalStates
