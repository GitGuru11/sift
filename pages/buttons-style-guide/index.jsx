import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Styles from './../../styles/buttons/btnPink.module.css';
import ExternalLink_btn from '../../components/button/ExternalLink_btn';
import Black_arrowBtn from '../../components/button/Black_arrowBtn';
import Circle_arrow_btn from '../../components/button/Black_arrowBtn';
import Button_Black from '../../components/button/Button_Black';
import Button_BlackText from '../../components/button/Button_BlackText';
import Button_Pink from '../../components/button/Button_Pink';
import Button_PinkBtn from '../../components/button/Button_PinkBtn';
import Button_Transparent from '../../components/button/Button_Transparent';
import Button_White from '../../components/button/Button_White';
import VideoButton from '../../components/button/VideoButton';
import Arrow_Btn from '../../components/button/Arrow_Btn';
import Arrow_textBtn from '../../components/button/Arrow_textBtn';
import Default_btn from '../../components/button/Default_btn';

export default function ButtonStyleGuide() {
    return (
        <Layout>
            <NextSeo title="Style Guide - Sift" description="Sift - Button Styles" />
            <section className={`btn-outer`}>
                <div className="container">
                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn text-white" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn btn-pink" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn btn-white" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn video-btn" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="default-btn video-btn btn-pink" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="arrow_text-btn" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="arrow_text-btn  btn-white" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="arrow_text-btn  external-link" text="Arrow Btn White" redirection="/" />
                    </div>

                    <div className="btn mt-[23px]">
                        <Arrow_textBtn className="arrow_text-btn  external-link btn-white" text="Arrow Btn White" redirection="/" />
                    </div>

                    {/* <div className="btn mt-[23px]">
                        <Default_btn text="Default Btn" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Default_btn className="btn-pink" text="Default Btn Pink" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Default_btn className="btn-white" text="Default Btn White" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Default_btn className="video-btn" text="Default Btn Video" link="/" />
                    </div>
                    <div className="btn mt-[23px] mb-[100px]">
                        <Default_btn className="btn-pink video-btn" text="Default Btn Pink video" link="/" />
                    </div> */}

                    {/* old buttons */}
                    {/* <h4>old buttons</h4>
                    <div className="btn mt-[23px]">
                        <Arrow_Btn text="Arrow_Btn" redirection="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <ExternalLink_btn text="ExternalLink_btn" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Black_arrowBtn text="Black_arrowBtn" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Circle_arrow_btn text="Circle_arrow_btn" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_Black text="Button_Black" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_BlackText text="Button_BlackText" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_Pink text="Button_Pink" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_PinkBtn text="Button_PinkBtn" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_Transparent text="Button_Transparent" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <Button_White text="Button_White" link="/" />
                    </div>
                    <div className="btn mt-[23px]">
                        <VideoButton text="VideoButton" link="/" />
                    </div> */}

                </div>
            </section>
        </Layout>
    );
}