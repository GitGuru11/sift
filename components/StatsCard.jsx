import Image from 'next/image';
import styles from "../styles/StatsCard.module.css";
import Arrow_Btn from './button/Arrow_Btn';
import Link from 'next/link';

const StatsCard = ({ imageUrl, stats, title, content, lists, url, linkText, isFirstCard }) => {

	const cardClasses = `rounded-[10px] ${isFirstCard ? `${styles.firstCard} border-blue gap-x-5 h-full first-card` : 'border-transparent wide-screen:gap-6 gap-4 desktop:gap-4 tablet:gap-7 wide-screen:basis-[calc(33.33%-24px)] basis-[calc(33.33%-16px)] desktop:basis-[calc(33%-12px)]  lg:basis-full'}`;

	return (
		<div
			className={`${styles.card} overflow-hidden bg-black border-[2px] border-white rounded-[16px]  pt-[20px] laptop-landscape:pt-[10px] outline outline-transparent outline-1 flex relative hover:outline-white hover:shadow-white-shadow transition-all  ${cardClasses}`}
		>
			<Link
				href="/"
				className="absolute left-0 right-0 top-0 bottom-0 z-10"
				aria-label="first link"
			></Link>
			<div className="shrink-0 grow-0">
				{imageUrl && (
					<div className="wide-screen:w-[130px] w-[80px] desktop:w-[64px] lg:w-[70px] lg:max-h-64 relative ">
						<Image
							className="w-full h-full"
							src={imageUrl}
							alt={title}
							width={200}
							height={200}
						/>
						<span className="text-black font-bold leading-none absolute top-[10%] left-[50%] translate-x-[-45%] wide-screen:text-6xl text-[40px] xl:text-[27px] sm:text-[24px] ">
							{stats}
						</span>
					</div>
				)}
			</div>
			<div className="pt-[10px] laptop-landscape:pt-[5px] pb-8 pr-3 basis-[70%] self-center">
				{title && <h4 className="text-white">{title}</h4>}
				{content && <p className="text-white mt-[7px]">{content}</p>}
				{lists && (
					<ul className="mt-4 pb-2 list-disc">
						{lists.map((item, index) => (
							<li className="text-white" key={index}>
								{item}
							</li>
						))}
					</ul>
				)}
				{url && (
					<div className="mt-4">
						<Arrow_Btn text={linkText} redirection={url} />
					</div>
				)}
			</div>
		</div>
	);
}

export default StatsCard;