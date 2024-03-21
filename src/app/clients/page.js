"use client"
import ClientObject from "@/components/Clients/clientObject"
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import '../globals.css'
import Image from "next/image";


const Clients=()=>{
    const [isOpen,setOpen]=useState(false)
    return(<>

    <div className="relative"> 
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 ${isOpen ? 'block' : 'hidden'}`} />
            <div className=" text-white py-4 	 lg:px-4">
                <div className="flex justify-center px-0 py-4 max-lg:flex-col items-center">
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                </div>
                <div className="flex justify-center px-0 py-4 max-lg:flex-col items-center">
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                </div>
        </div>
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
          <Image src="/Dubai.png" width={500} height={400} className="relative"/> 
           <button className="absolute  text-white" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
      </div>
      </div>
        </div>
       
</>
    )
}
export default Clients