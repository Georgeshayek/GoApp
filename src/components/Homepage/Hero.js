"use client"
import Image from "next/image"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Hero=()=>{
    const ref = useRef([]);
    ref.current=[]; 
    useEffect(()=>{
        ref.current.forEach((el)=> gsap.fromTo(el,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2,scrollTrigger:{trigger:el}}))
    
        
    },[])
// const onclick=contextSafe(()=>{
//     gsap.fromTo(button.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})
//     gsap.fromTo(img.current,{opacity:0,rotation:0},{opacity:1,rotation:360,duration:2})
    const addToRefs=(el)=>{ 
    if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }
// }) 
    return(
        <div className="container mx-auto relative">
        <Image ref={addToRefs}   src="/Hero.png" width={800}
  height={800} className=" mx-auto  max-lg:max-h-[300px] max-lg:max-w-[300px]"  alt="Hero Image "/>
        <div ref={addToRefs}  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-2 ">
        <h1 className="text-[50px] mb-4 max-lg:text-[1rem]">here's a teeny-weeny
glimpse of our work.
what’s coming later is</h1>
        </div>
        </div>
    )
}
export default Hero