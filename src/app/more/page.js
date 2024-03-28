"use client"
import React, { useRef, useState, useEffect } from 'react';
import Hero from "@/components/Homepage/Hero";
import NavbarMore from "@/components/More/navbarMore";
import FirstComponent from "@/components/More/firstComponent";
import SecondComponent from "@/components/More/secondComponent";
import ThirdComponent from "@/components/More/thirdComponent";
import FourthComponent from "@/components/More/fourthComponent";
import gsap from 'gsap';

const More = () => {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when at least 50% of the component is visible
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        };

        const firstObserver = new IntersectionObserver(observerCallback, observerOptions);
        const secondObserver = new IntersectionObserver(observerCallback, observerOptions);
        const thirdObserver = new IntersectionObserver(observerCallback, observerOptions);
        const fourthObserver = new IntersectionObserver(observerCallback, observerOptions);

        if (firstRef.current) firstObserver.observe(firstRef.current);
        if (secondRef.current) secondObserver.observe(secondRef.current);
        if (thirdRef.current) thirdObserver.observe(thirdRef.current);
        if (fourthRef.current) fourthObserver.observe(fourthRef.current);

        // Cleanup function
        return () => {
            firstObserver.disconnect();
            secondObserver.disconnect();
            thirdObserver.disconnect();
            fourthObserver.disconnect();
        };
    }, []);

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
            <div className="container mx-auto relative">
                <Hero />
                <div className="sticky top-0 z-50">
                    <NavbarMore activeLink={activeLink} scrollToRef={scrollToRef} />
                </div>
                <div id="firstComponent" ref={firstRef}>
                    <FirstComponent />
                </div>
                <div id="secondComponent" ref={secondRef}>
                    <SecondComponent />
                </div>
                <div id="thirdComponent" ref={thirdRef}>
                    <ThirdComponent />
                </div>
                <div id="fourthComponent" ref={fourthRef}>
                    <FourthComponent />
                </div>
            </div>
        </>
    );
};

export default More;
