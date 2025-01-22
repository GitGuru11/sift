import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Intro from './FullWidthIntro';

export default function IntroWithLogo({id}) {
    const introDetail = {
        PreNormalText: 'Headline about logo clear space',
        bg: 'black',
        blurb:
            'The circle defines the specific amount of space that a logo must have on all sides, no matter where it is used. The reason for clear space is to ensure that a logo maximizes visibility & impact.',
    };
	return (
        <section className="IntroWithLogo bg-[#000] pt-0" id={id}>
        <div className="container">
        <Intro {...introDetail} />
        <div className="flex xs:flex-wrap">
            <div className="mr-[48px] xs:mr-0 xs:w-full">
            <Image
                src="/BrandCenter/LogoSpace.png"
                width={594}
                height={364}
                alt="Image"
              />
            </div>
            <div className="xs:mt-[30px] xs:w-full">
            <Image
                src="/BrandCenter/Pattern.png"
                width={249}
                height={249}
                alt="Image"
              />
           </div>
        </div>
        </div>
    </section>
	);
}