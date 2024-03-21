"use client"
import { useState } from "react"
import ModalVideo from 'react-modal-video';
import '../../app/globals.css'
import Image from "next/image";

const ClientVideo=()=>{
    const [isOpen,setOpen]=useState(false)

    return(

        <div className="relative"> 
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 ${isOpen ? 'block' : 'hidden'}`} />
    <div className="container mx-auto">

    <ModalVideo
    channel="youtube"
    youtube={{ mute: 0, autoplay: 1 }}
    isOpen={isOpen}
    videoId="IdejM6wCkxA"
    onClose={() => setOpen(false)}
    classNames={{
        modalVideo: 'custom-modal-video',
        modalVideoClose: 'custom-modal-video-close',
        modalVideoBody: 'custom-modal-video-body',
        modalVideoInner: 'custom-modal-video-inner',
        modalVideoIframeWrap: 'custom-modal-video-iframe-wrap',
        modalVideoCloseBtn: 'custom-modal-video-close-btn'
      }}  />

<div className="flex justify-center items-center py-8">
      <Image src="/Dubai.png" width={500} height={400} className={`relative ${isOpen?"brightness-50":""}`}/> 
       <button className="absolute  text-white" onClick={() => setOpen(true)}>
    VIEW DEMO
  </button>
  </div>
  </div>
    </div>
    )
}
export default ClientVideo