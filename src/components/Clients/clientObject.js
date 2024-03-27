"use client"
import { useRef,useEffect } from "react"
import gsap from "gsap"
const { default: Image } = require("next/image")

const ClientObject=()=>{
    const divImage=useRef(null)
    const divCadre=useRef(null)
    const divPara=useRef(null)
    const divRef = useRef(null);
    const divBall = useRef(null);

    useEffect(()=>{
        const image=divImage.current
        const div=divRef.current
        const cadre=divCadre.current
        const ball=divBall.current
        
        gsap.fromTo(cadre,{scaleX:0},{scaleX:1,ease:"power2.out",duration:1})
        gsap.fromTo(image,{scaleX:0},{scaleX:1,ease:"power2.out",delay:1.5,duration:1})
        gsap.fromTo(div,{scaleY:0},{scaleY:1,ease:'power2.out',delay:3,duration:1})
        gsap.fromTo(ball,{scaleX:0},{scaleX:1,ease:"power2.out",delay:4.5,duration:0.75})

       
    },[])
return(
    <div className="px-16 max-lg:py-4">
    <div className="flex relative flex-col justify-center items-center">
        <div ref={divCadre} className="flex  p-2 items-center border rounded-full border-white" >
            <Image src="/person.jpeg" ref={divImage} width={120} height={160} className=" h-[120px] rounded-full object-cover"/>
        </div>
        <div ref={divRef} className="w-1 h-16 bg-white" >
        
        </div>
        
        
        <div ref={divBall}className="w-2 h-2 rounded-full bg-white"></div>
        <div  className="absolute bottom-4 left-20 w-20  text-[14px] ">
        <p>Georges</p>
        <p>Hello world</p>
    </div>
    </div>
    
    </div>
)

}
export default ClientObject