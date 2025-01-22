import Link from 'next/link';
import Style from '../../styles/buttons/btnTransparent.module.css';

const Button_Transparent = (props) => {
  // Check if props.link is defined before rendering the Link
  const linkContent = props.link ? (
		<Link
			href={props.link}
			aria-label="first link"
			className={`button ${Style.btn_transparent} desktop-laptop:mb-[10px] lg:mb-[10px] inline-flex font-bold md:py-[12px] items-center h-fit   shadow-btn  md:px-[20px] laptop-landscape:px-[20px] py-[19px] px-[24px] uppercase text-white rounded-full duration-700 hover:text-black mr-4`}
		>
			{props.text}
		</Link>
	) : null;

  return <>{linkContent}</>;
};

export default Button_Transparent;
