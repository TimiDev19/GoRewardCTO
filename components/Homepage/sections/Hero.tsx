"use client"
import FadeInFromBottom from '@/components/FadeInFromBottom';
import { Nunito_Sans, Open_Sans, Tektur } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Logo from "@/assets/logo.jpg"
import { CopyAll } from '@mui/icons-material';
import { useState } from 'react';


const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `GorbSjEc357Zm1TiRMAQ3N35yCf1sN4NbmNnRgzS3xZc`;

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div
            id='home'
            className=''
        >
            <div className=' overflow-hidden bg-blue-900 pt-[90px] min-h-[100vh] w-screen flex flex-col items-center justify-start lg:flex-row lg:items-center lg:justify-between lg:px-[20px]'>
                <div className=' w-[95%] m-auto lg:w-[50%] h-[30%] z-[3] flex items-center justify-start text-left'>
                    <FadeInFromBottom>
                        <div className={openSans.className}>
                            <h1 className=' mb-4 flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-3'
                                />
                                GoReward CTO
                            </h1>
                            <h1 className=' font-bold text-white text-lg lg:text-4xl mb-3'>
                                <span className={tektur.className}>Welcome To GoReward CTO</span> <br /> <span className="font-extrabold">The people's</span> <span className=' text-green-500 font-extrabold'>memecoin</span>
                            </h1>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full'
                                />
                                <div className=' bg-green-500/20 w-fit py-2 px-4'>
                                    <div className={openSans.className}>
                                        <h1 className=' capitalize font-semibold text-green-500 text-sm lg:text-lg'>
                                            GoReward’s CTO turning memes into code and chaos into smart contracts.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex items-center justify-end w-full'>
                                <div className=' bg-green-500/20 text-green-500 lg:h-[100px] w-[97%] mx-auto lg:mx-0 lg:w-[75%] flex flex-col lg:flex-row items-center justify-between  p-4'>
                                    <div className={tektur.className}>
                                        <div onClick={handleCopy} className=' max-w-[90vw] lg:max-w-[30vw] flex flex-col items-center justify-center bg-transparent text-green-500 py-1 w-[95%] lg:w-fit mx-auto lg:mx-0 px-4 rounded-md'>
                                            <h1 className=" w-full truncate mr-4 cursor-pointer font-extrabold text-green-500 break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                                                {textToCopy}
                                            </h1>
                                            <h1 className=' cursor-pointer'>{copied ? (<span className="text-green-500">Text copied to clipboard!</span>) : (<span><CopyAll /> Click to copy CA</span>)}</h1>
                                            {/* {copied && <} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' lg:w-[45%] h-[50vh] flex items-center justify-center lg:h-full'>
                    <Image
                        alt=''
                        src={Logo}
                        className=' w-full lg:w-[80%] rounded-full animate-bounce'
                    />
                </div>
            </div>
            {/* <div className=' h-[20vh] lg:h-[60vh] w-screen banner1'></div> */}
        </div>
    )
}

export default Hero