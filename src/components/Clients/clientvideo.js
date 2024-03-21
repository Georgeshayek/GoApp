"use client"
import { useState,useEffect,useRef } from "react"
import ModalVideo from 'react-modal-video';
import '../../app/globals.css'
import Image from "next/image";
import "react-modal-video/scss/modal-video.scss";

const ClientVideo=()=>{
    const [isOpen,setOpen]=useState(false)
    const handler=()=>{
        setOpen(false)
    }

     useEffect(() => {
    // Function to disable scrollbar when the overlay is open
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    // Function to enable scrollbar when the overlay is closed
    const enableBodyScroll = () => {
      document.body.style.overflow = 'auto';
    };

    // Check if the overlay is open and call the appropriate function to disable/enable scrollbar
    if (isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    // Check if the iframe is available
   

    // Cleanup function to enable scrollbar when the component unmounts
    return () => {
      enableBodyScroll();
    };
  }, [isOpen]);
    return(
<>  
    <ModalVideo
    channel="youtube"
    youtube={{ mute: 0, autoplay: 1 }}
    isOpen={isOpen}
    videoId="IdejM6wCkxA"
    onClose={() => setOpen(false)}
   
        />

<div className="flex justify-center items-center py-8">
      <Image src="/Dubai.png" width={500} height={400} className={` max-lg:px-4 relative ${isOpen?"brightness-50":""}`}/> 
       <button className="absolute  text-white" onClick={() => setOpen(true)}>
    VIEW DEMO
  </button>
  </div>
</>    
    )
}
export default ClientVideo