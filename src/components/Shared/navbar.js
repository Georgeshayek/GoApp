"use client"
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { usePathname } from 'next/navigation'
const Navbar=()=>{
    const path=usePathname();
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };

    return (
        
        <nav className="py-6 px-12" >
            <div className="container mx-auto">
            <div className="flex justify-between items-center relative">
                <div >
                    <Link href="/"><Image src="/logo.png" alt=" Logo" width={100} height={50}/></Link>
                </div>
                <button id="burger-btn" className="  block text-white lg:hidden" onClick={toggleShow}>&#9776;</button>
                <ul className={`flex justify-center  max-lg:flex-col ${!show ? 'max-lg:hidden' : 'max-lg:block'} max-lg:absolute max-lg:top-[60px] max-lg:left-0 max-lg:bg-[#333] max-lg:p-1 max-lg:w-[100%] px-[40px] max-lg:z-50`}>                
				<li className="max-lg:text-center  lg:inline-block lg:mr-[10px]"><Link className={`py-10 px-[10px] text-white hover:underline hover:decoration-orange-500 ${path==="/"?"underline decoration-blue-500":""}`} href="/">Home</Link></li>
				<li className=" max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px] text-white hover:underline hover:decoration-orange-500 ${path==="/about"?"underline decoration-blue-500":""}`} href="/about">About</Link></li>
				<li className="max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px] text-white hover:underline hover:decoration-orange-500 ${path==="/contact"?"underline decoration-blue-500":""}`} href="/contact">Contact</Link></li>
                <li className="max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px] text-white hover:underline hover:decoration-orange-500 ${path==="/clients"?"underline decoration-blue-500":""}`} href="/contact">Clients</Link></li>
                <li className="max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px] text-white hover:underline hover:decoration-orange-500 ${path==="/partner"?"underline decoration-blue-500":""}`} href="/contact">Partners</Link></li>

        	</ul>
            
        </div>
        </div>

		</nav>
    )
}
export default Navbar;