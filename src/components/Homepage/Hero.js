"use client"
import Image from "next/image"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Hero=()=>{
    const container = useRef();
    const para=useRef(); 
    useEffect(()=>{
        const el=container.current;
        
        gsap.fromTo(el,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2,scrollTrigger:{trigger:el}})
    },[])
// const onclick=contextSafe(()=>{
//     gsap.fromTo(button.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})
//     gsap.fromTo(img.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})

// }) 
    return(
        <div ref={container} className="container mx-auto relative">
        <Image  src="/Hero.png" width={800}
  height={800} className=" mx-auto  max-lg:max-h-[300px] max-lg:max-w-[300px]"  alt="Hero Image "/>
        <div ref={para}  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-2 ">
        <h1 className="text-[50px] mb-4 max-lg:text-[1rem]">here's a teeny-weeny
glimpse of our work.
what’s coming later is</h1>
        </div>
        </div>
    )
}
export default Hero