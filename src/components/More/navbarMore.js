"use client"
import Link from "next/link";
import Image from 'next/image'
import { useState,useEffect,useRef } from "react";
import { usePathname } from 'next/navigation'
import gsap from "gsap";

const NavbarMore=(props)=>{
  
    const path=usePathname();
    const [activeLink, setActiveLink] = useState('');
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };
    const handleSetActiveLink = (id) => {
        setActiveLink(id);
        props.scrollToRef(id);
        setShow(false)
    };

    return (
        <div className="container mx-auto">
        <nav className=" lg:px-12 sticky top-0 bg-gray-400" >
            
            <div className="flex justify-between max-lg:px-6 items-center relative">
                <div>
                    <Link  href="/"><Image src="/logo.png" alt=" Logo" width={100} height={50}/></Link>
                </div>
                <button id="burger-btn" className="  block text-white lg:hidden" onClick={toggleShow}>&#9776;</button>
                <ul className={`flex justify-center  max-lg:w-full  max-lg:z-50  max-lg:flex-col ${!show ? 'max-lg:hidden' : 'max-lg:block'} max-lg:absolute max-lg:top-[60px] max-lg:left-0 max-lg:bg-gray-400 max-lg:p-4 lg:px-[40px] max-lg:z-50`}>                
				<li className="max-lg:text-center max-lg:py-4  lg:inline-block lg:mr-[10px]"><button onClick={handleSetActiveLink.bind(null,'firstComponent')}  className={` bg-transparent py-5 px-[10px] text-white hover:underline  hover:decoration-orange-500 ${activeLink==="firstComponent"?"underline decoration-blue-500":""}`} >First</button></li>
				<li className=" max-lg:text-center max-lg:py-4 lg:inline-block lg:mr-[10px]"><button onClick={handleSetActiveLink.bind(null,'secondComponent')}  className={` bg-transparent py-5 px-[10px] text-white hover:underline  hover:decoration-orange-500 ${activeLink==="secondComponent"?"underline decoration-blue-500":""}`} >Second</button></li>
				<li className="max-lg:text-center max-lg:py-4 lg:inline-block lg:mr-[10px]"><button onClick={handleSetActiveLink.bind(null,'thirdComponent')}  className={` bg-transparent py-5 px-[10px] text-white  hover:underline  hover:decoration-orange-500 ${activeLink==="thirdComponent"?"underline decoration-blue-500":""}`} >Third</button></li>
                <li className="max-lg:text-center max-lg:py-4 lg:inline-block lg:mr-[10px]"><button onClick={handleSetActiveLink.bind(null,'fourthComponent')} className={` bg-transparent py-5 px-[10px] text-white  hover:underline  hover:decoration-orange-500 ${activeLink==="fourthComponent"?"underline decoration-blue-500":""}`} >Fourth</button></li>
                
        	</ul>
            
        </div>
        

		</nav>
        </div>
    )
}
export default NavbarMore;