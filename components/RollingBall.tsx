"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo from "@/assets/logo.jpg"
import Link from "next/link";
import { Book, BookOpenText } from "lucide-react";

const RollingBall = () => {
    const [showText, setShowText] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: false });
    // const { rel, inVie } = useInView({ triggerOnce: false });

    // Reset text visibility when the component enters the viewport again
    useEffect(() => {
        if (inView) {
            setShowText(false);
        }
    }, [inView]);

    return (
        <>
            <div ref={ref} className="pt-[90px] flex relative flex-col items-center justify-center min-h-screen bg-blue-900 overflow-hidden py-[10px]">
                {/* Text that will be revealed */}
                <AnimatePresence>
                    <motion.h1
                        className={` text-2xl font-bold relative z-10 transition-colors duration-500 ${showText ? "text-black" : "text-green-700"
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className=" w-[95%] lg:w-[65%] mx-auto">
                            <span className=" w-[95%] lg:w-[65%] mx-auto text-xl lg:text-4xl">Time to learn</span>
                            <span className=' mb-4 flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-fit rounded-xl'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-3'
                                />
                                About GoReward CTO
                            </span>
                            <span className=" text-xl font-medium mb-4">

                                Behind the scenes of GoReward, the viral Web3 memecoin with utility and attitude,
                                is CTO Luna Okoro — a blockchain builder with a meme-loving heart and a security-first brain. <br /> <br />


                                With a background in Solidity, DeFi integrations, and degenerate-proof smart contract architecture,
                                Luna ensures every $GORE drop, stake, and burn runs flawlessly — trustless, fast, and secure.<br /> <br />

                                Luna’s approach blends crypto-native culture with clean, scalable code,
                                architecting systems that hold up to real volume, community chaos, and the wild swings of the memecoin frontier. <br /> <br />

                                Because in Web3, the only thing better than going viral —
                                is doing it on-chain, without breaking.
                            </span>
                            <Link
                                target="blank"
                                href={"https://t.me/GorbaganaRewards"}
                                className=" flex items-center justify-center w-fit text-sm mt-4 lg:text-lg p-2 border border-green-500 rounded-2xl font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'"
                            >
                                <BookOpenText className=" mr-2" /> Learn More
                            </Link>
                        </div>
                    </motion.h1>
                </AnimatePresence>

                {/* Rolling Ball (overlay effect) */}
                {inView && (
                    <div>
                        <motion.div
                            key={inView ? "rolling" : "reset"} // Forces re-mount on re-entry
                            className=" hidden lg:block w-[50vh] h-[50vh] logo-bg bg-black rounded-full absolute top-0 lg:top-1/4 left-0"
                            initial={{ x: "-100vw", rotate: 0 }}
                            animate={{ x: "100vw", rotate: 720 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            onAnimationComplete={() => setShowText(true)}
                        />
                        <motion.div
                            key={inView ? "rolling-lg" : "reset"} // Forces re-mount on re-entry
                            className=" lg:hidden w-[50vh] h-[50vh] logo-bg bg-black rounded-full absolute top-0 lg:top-1/4 left-0"
                            initial={{ y: "-100vh", rotate: 0 }}
                            animate={{ y: "200vh", rotate: 720 }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            onAnimationComplete={() => setShowText(true)}
                        />
                    </div>
                )}
            </div>
            {/*  */}
        </>
    );
};

export default RollingBall;
