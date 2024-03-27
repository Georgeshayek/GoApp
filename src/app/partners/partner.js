"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  iconButton,
} from "@material-tailwind/react";
import { GrAdd,GrSubtract  } from "react-icons/gr";
import { useState,useEffect} from "react";
import { useSearchParams  } from "next/navigation";
const Partners=()=>{

    const [open, setOpen] = React.useState(0);
    const search=useSearchParams()
    const id  = search.get('id');
    console.log(id)

    useEffect(()=>{
        if(id)
            setOpen(parseInt(id))
    },[])
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
      <>
      
      <div className="py-16 px-4 container mx-auto text-white rounded-xl">
        <Accordion open={open === 1} className="p-4 bg-slate-500  text-white" icon={open===1?<GrSubtract/>:<GrAdd/>}>
          <AccordionHeader className="flex justify-between w-full" onClick={() => handleOpen(1) } >What is Material Tailwind?</AccordionHeader>
          <AccordionBody className={`${open === 1 ? " " : "text-transparent"}`}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} className="p-4 bg-slate-500 text-white" icon={open===2?<GrSubtract/>:<GrAdd/>}>
          <AccordionHeader className="flex justify-between" onClick={() => handleOpen(2)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody className={`${open === 2 ? "" : "text-transparent"}`}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} className="p-4 bg-slate-500 text-white" icon={open===3?<GrSubtract/>:<GrAdd/>}>
          <AccordionHeader className="flex justify-between" onClick={() => handleOpen(3)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody className={`${open === 3 ? "" : "text-transparent"}`}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        </div>
      </>
    );

}
export default Partners