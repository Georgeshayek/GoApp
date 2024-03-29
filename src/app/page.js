import Content from "@/components/Homepage/Content";
import Hero from "@/components/Homepage/Hero";
import Footer from "@/components/Shared/footer";
import Navbar from "@/components/Shared/navbar";
import Image from "next/image";
import axios from "@/utils/axios";
import CustomCursor from "@/components/Shared/Customcursor";
import { Suspense } from "react";


async function getData() {
  let data;
  await axios
    .get("/page/news", {
      headers: {
        "Accept-Language": "en", 
      },
    })
    .then((res) => {
      data = res.data;
      
    })
    .catch(console.error);


  return { props: { data } };
}

export default async function Home() {
  // const data1=await getData1()
  // metadata.title=data1.props.data.data.title

  const data = await getData()
  const arr=data.props.data.data.sections
  const dataToSend=arr.map(mov=>{
    return({image:mov.details.image,title:mov.title,description:mov.details.cta_text})
  })
  
  return (
    <>
      <Hero/>
      {dataToSend &&<Content data={dataToSend}/>}
    </>
  );
}
