
"use client";
import React from "react";
import ReactPlayer from "react-player";
import { useRef,useEffect } from "react";

import gsap from "gsap";
const VideoPlayer=()=>{
    const videoRef=useRef()
    const divRef=useRef()
    useEffect(()=>{
        const div=divRef.current
        const video=videoRef.current

        gsap.to(video,{scrollTrigger:{
            trigger:div,
            start: 'top center',
            onEnter: () => {
                video.play();
              },
              onLeaveBack: () => {
                video.pause();
              },
        }})
    },[])
    return(
        <div ref={divRef} className="flex flex-col justify-center py-10 items-center">
        <video ref={videoRef} width="640" height="480" controls  muted  >
      <source src="fountain.mp4" type="video/mp4"  />
    </video>
      </div>
    )


}
export default VideoPlayer