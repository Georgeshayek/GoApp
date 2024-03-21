"use client"
const { default: ImageTitle, default: Images } = require("./ImagesTitle")
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Content=(props)=>{
    const container = useRef();
    const button =useRef();

const { contextSafe } = useGSAP({scope: container}); // we can just pass in a conf
    const onClickGood = contextSafe(() => {
        gsap.to(".good", {rotation: 180});
    });
    const onClickGood1 = contextSafe(() => {
        gsap.to(button.current, {rotation: 180});
    });
    const onClickGood2= contextSafe(() => {
        gsap.fromTo(button.current, {opacity: 0},{opacity:1,rotation:360, duration: 2});
    });
    
return(
    <div className="container mx-auto">
        <div ref={container} className="px-20 py-8">
        
        <button onClick={onClickGood} onFocus={onClickGood1} className="good py-4 px-4 bg-red-500">Read me</button>
        <button ref={button} onClick={onClickGood2}  className="good py-4 px-4 bg-red-500">Read me</button>
        <div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:place-content-center  place-content-start gap-6">
            {props.data.map((mov,i)=>{
                return(
                <Images  key={i} image={mov.image}  title={mov.title} description={mov.description}/>             
                )
            })}
</div>
</div>
        </div>
    </div>
)
}
export default Content