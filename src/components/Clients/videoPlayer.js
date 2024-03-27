
"use client";
import React from "react";
import ReactPlayer from "react-player";
import { useRef,useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap

import gsap from "gsap";
const VideoPlayer=()=>{
    const videoRef=useRef()
    useEffect(()=>{

        const video=videoRef.current
        gsap.to(video,{scrollTrigger:{
            trigger:video,
            start: 'top top',
            onEnter: () => {
                video.play();
              },
              onLeaveBack: () => {
                video.pause();
              },
        }})
    },[])
    return(
        <div className="flex flex-col justify-center py-10 items-center">
        <video ref={videoRef} width="640" height="480" controls >
      <source src="fountain.mp4" type="video/mp4" />
           Your browser does not support the video tag.
    </video>
      </div>
    )


}
export default VideoPlayer