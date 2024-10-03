import Image from 'next/image'
import React from 'react'
import AboutImg from "@/assets/svg/about.svg";
import TokenImg from "@/assets/svg/token.svg";
import { AnimatedSubscribeButton } from './magicui/animated-subscribe-button';
import CapGuy from './../assets/gifs/capguy.gif';

export default function About() {
    return (
        <section className='about px-6 md:px-14 lg:px-24 py-20 space-y-20 md:space-y-40 relative' id='about'>
            <div className="bg-[#478CEC]/45 py-20 px-6 md:px-14 rounded-3xl md:rounded-[40px] flex flex-col items-center gap-10 relative z-10">
                <Image
                    sizes='100%'
                    alt='Brain'
                    src={AboutImg}
                    className='h-auto md:h-20 w-3/4 mx-auto md:w-auto'
                />
                <p className='max-w-2xl text-center text-xl md:text-3xl lg:text-[34px] leading-[1.5] md:leading-[1.5] capitalize'>
                    big ego, huge gains & a super fat head.


                    Solana Summer is over, ETH Winter is here.
                </p>

                <AnimatedSubscribeButton
                    buttonColor='#2173E6'
                    buttonTextColor='#ffffff'
                    initialText={'CA: wen?'}
                    changeText={'Copied'}
                    subscribeStatus={false}
                    className='border-[4px] border-white uppercase rounded-3xl font-madimi min-w-[250px] md:py-6 py-5'
                />

            </div>
            <div className="bg-[#478CEC]/45 px-6 rounded-3xl md:rounded-[40px] grid md:grid-cols-2 items-end gap-10 relative z-10" id='token'>
                <div className="flex items-end">
                    <Image
                        sizes='100%'
                        alt='Gif'
                        src={CapGuy}
                        className='h-full w-full object-contain object-bottom'
                    />
                </div>
                <div className="pt-20 pb-14 pr-5">
                    <Image
                        sizes='100%'
                        alt='Brain'
                        src={TokenImg}
                        className='h-auto md:h-14 w-3/4 md:w-auto'
                    />
                    <h1 className='text-7xl lg::text-[135px] font-madimi font-normal leading-[1.2] text-white'>
                        100% <br />
                        FKN <br />
                        FAIR!
                    </h1>
                </div>
            </div>
            <div className="bg-gradient-to-t from-[#236FE5] to-black/0 h-[20vh] inset-x-0 bottom-0 absolute z-0"></div>
        </section>
    )
}
