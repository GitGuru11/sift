import Link from 'next/link'


function Arrow_textBtn(props) {
    const hasDefaultBtn = true;

    return (
        <>
            <Link
                aria-label="first link"
                className={`${props.className} group uppercase`}
                href={props.redirection}
            >
                {props.text}
                <span className="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-4px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden">
                </span>
            </Link>
        </>
    );
}

export default Arrow_textBtn
