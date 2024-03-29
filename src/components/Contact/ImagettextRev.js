"use client"
import Image from "next/image"
import gsap from "gsap"
import { useRef,useEffect } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ImageTextRev=(props)=>{
    const imgref=useRef()
    const textref=useRef()
    const wrapper =useRef()
    useEffect(()=>{
        const image=imgref.current
        const text=textref.current
        const wrap= wrapper.current
        gsap.fromTo(image, {
            opacity: 0,
            x: `${props.reverse?"-45%":"45%"}`
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',scrollTrigger:{
                trigger:wrap,
                start:"top center",
                
            }
        });
    
        gsap.fromTo(text, {
            opacity: 0,
            x: `${props.reverse?"45%":"-45%"}`
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5 ,scrollTrigger:{
                trigger:wrap,
                start:"top center",
            }
        });

    },[])
    return(
        <>
        <div className="container mx-auto py-10">
        <div ref={wrapper} className={` lg:relative  flex ${props.reverse? "lg:flex-row-reverse ":""} max-lg:flex-col max-lg:items-center max-lg:justify-center  max-lg:px-2 lg:px-20 py-8`}>
            <Image ref={imgref} src={props.imageUrl} width={800} height={300} className=" brightness-50	 max-lg:max-w-[250px] "alt="furnuture"/>
                <h1 ref={textref} className={ `lg:absolute  top-[40%] max-lg:py-3 ${props.reverse?"lg:left-[15%]":"lg:left-[55%]"} text-[2rem] lg:max-w-[360px]  max-lg:text-[11px] ${props.reverse?"-left-16":"-left-6"}`}>{props.title} </h1>
            
            </div>
        </div>
        </>
    )

}

export default ImageTextRev