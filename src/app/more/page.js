"use client"
import Hero from "@/components/Homepage/Hero"
import NavbarMore from "@/components/More/navbarMore"
import FirstComponent from "../../components/More/firstComponent"
import SecondComponent from "@/components/More/secondComponent"
import ThirdComponent from "@/components/More/thirdComponent"
import FourthComponent from "@/components/More/fourthComponent"
import { useRef } from "react"

const More=()=>{
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);

    const scrollToRef = (id) => {
        let ref;
        switch (id) {
            case 'firstComponent':
                ref = firstRef;
                break;
            case 'secondComponent':
                ref = secondRef;
                break;
            case 'thirdComponent':
                ref = thirdRef;
                break;
            case 'fourthComponent':
                ref = fourthRef;
                break;
            default:
                break;
        }
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
        <div className=" container mx-auto relative">
        <Hero/>
        <div className="sticky top-0 z-50">
        <NavbarMore  scrollToRef={scrollToRef} />
        </div>
        <div ref={firstRef}> 
        <FirstComponent/>
        </div>
        <div ref={secondRef}>
        <SecondComponent/>
        </div>
        <div ref={thirdRef}>
        <ThirdComponent/>
        </div>
        <div ref={fourthRef}>
        <FourthComponent/>
        </div>
        </div>
        </>
        )
}
export default More