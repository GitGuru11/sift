import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Btn_Black from './button/Button_Black';
import Style from "../styles/logo-nav-tab.module.css";
import IntroWithCta from "./IntroWithCta"
import Black_ArrowBtn from "./button/Black_arrowBtn";
const Data = [
    {
        logo: '/logos/doordash.svg',
        src: "/",
        img: "/tab-image.svg",
        content: {
            quotationsImg: "/logos/quotation-mark.svg",
            title: "Our customers have a clear need for a solution that allows them to scale their risk decisioning efforts, and they naturally seek our counsel on the best path forward. Working with Sift has been a fluid and straightforward process.”",
            name: "Gabriel Le Roux",
            occupation: "CMO at Primer",
        },
        imgWithContent: {
            img: "/girl1.png",
            count: [
                {
                    num: "+85",
                    discription: "AI-Powered Fraud Decisioning..",
                },
                {
                    num: "5x",
                    discription: "AI-Powered Fraud Decisioning..",
                },
            ]
        }
    }
];
export default function QuoteCard() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`quote-card bg-black img-text-tab ${Style.imgTextTab} ${Style.logoTab} no-padding-top`}>
            <div className="container">
                <div className="tab-wrap lg:mt-0 ">
                    <div className="tab-content ">
                        <div className="flex flex-wrap rounded-[24px] overflow-hidden">
                            <div className="content-wrap w-[49%] lg:w-full text-white bg-yello py-[48px] laptop-landscape:pb-[30px] px-[41px] xl-up:pr-[53px] lg:p-[25px]">
                                <div className="quotation laptop-landscape:w-[40px] laptop-landscape:h-[40px] w-[64px] h-[64px]">
                                    <Image className="w-full h-full" width={64} height={64} alt="quotationsImg" src={Data[activeTab].content.quotationsImg} />
                                </div>
                                <span className="!text-black block tabHeading font-[600] mt-4 mb-[25px]">{Data[activeTab].content.title}</span>

                                <span className="h4 block text-black mb-[3px] fontInter">{Data[activeTab].content.name}</span>
                                <span className="text-black text-[18px]">
                                    {Data[activeTab].content.occupation}
                                </span>
                            </div>
                            <div className={`w-[51%] sm-up:bg-pink lg:w-full mx-auto ${Style.imgWrap}`}>
                                <div className={`relative h-[458px] sm:h-[250px] sm:bg-pink laptop-landscape:h-[360px] wide-screen:h-[604px] translate-y-[-50%] top-2/4`}>
                                    <div className="absolute w-[275px] xl:w-[220px] h-auto top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-[1] ml-[5px]">
                                        <Image src='/primer.png' alt="doordash" width={350} height={150} />
                                    </div>
                                    <div className={` absolute object-cover h-full ${Style.bgImgWrap}`}>
                                        <Image className={`w-full h-full object-contain`} width={632} height={453} alt="image" src='/gabriel.png' quality={75} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
