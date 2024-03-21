"use client"
const { default: Image } = require("next/image")
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Images=(props)=>{
    const container = useRef();
    const button =useRef();
    const div =useRef();
    const { contextSafe } = useGSAP({scope: container}); // we can just pass in a conf

    const onClickGood3= contextSafe(() => {
        gsap.fromTo(div.current, {scaleY: 0,transformOrigin:"0% 50%"},{scaleY:1,rotation:-360, transformOrigin:"50% bottom",duration: 2});
    });
    return(
        <div ref={container} onClick={onClickGood3}>
        <div ref={div} className=" py-2">
            <Image  width={600} height={300}    sizes='100vw' className="rounded-xl   max-h-[300px] object-cover " src={props.image}  alt="image"/>
            <h1 className="text-[#ffffff] py-1 font-bold">{props.title}</h1>
            <p className="text-gray-300">{props.description}</p>
        </div>
        </div>
    )
}
export default Images
