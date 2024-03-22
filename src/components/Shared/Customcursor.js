"use client"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button');

        const moveCursor = (e) => {
            gsap.set(cursor, {
                x: e.clientX,
                y: e.clientY,
            });
        };

        const enterText = () => {
            gsap.to(cursor, { backgroundColor: 'white', opacity: 0.5, borderColor: 'black' });
        };


        const leaveText = () => {
            gsap.to(cursor, { backgroundColor: 'transparent', borderColor: 'blue' });

        };

        document.addEventListener('mousemove', moveCursor);

        textElements.forEach(element => {
            element.addEventListener('mouseenter', enterText);
            element.addEventListener('mouseleave', leaveText);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);

            textElements.forEach(element => {
                element.removeEventListener('mouseenter', enterText);
                element.removeEventListener('mouseleave', leaveText);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="w-12 h-12  -ml-[1.5rem] -mt-[1.5rem] items-center fixed top-0 left-0 border-4 z-50 border-blue-500  text-black rounded-full pointer-events-none	 cursor-none"
        ></div>
    );
};

export default CustomCursor;
