import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Intro from '../../FullWidthIntro';

export default function IntroWithLogo({id}) {
    const introDetail = {
        PreNormalText: 'Logo Clear Space',
        bg: 'black',
        blurb:
            '',
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