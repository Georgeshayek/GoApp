"use client"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Hero=()=>{
    const container = useRef();
    const button =useRef();
    const img=useRef();
const { contextSafe } = useGSAP({scope: container}); 
const onclick=contextSafe(()=>{
    gsap.fromTo(button.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})
    gsap.fromTo(img.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})

}) 
    return(
        <div ref={container} className="container mx-auto relative">
        <Image ref={img} src="/Hero.png" width={800}
  height={800} className=" mx-auto  max-lg:max-h-[300px] max-lg:max-w-[300px]"  alt="Hero Image "/>
        <div ref={button} onClick={onclick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-2 ">
        <h1 className="text-[50px] mb-4 max-lg:text-[1rem]">here's a teeny-weeny
glimpse of our work.
what’s coming later is</h1>
        </div>
        </div>
    )
}
export default Hero