"use client"
import { useParams } from "next/navigation"
import axios from "@/utils/axios";
import Image from "next/image";
async function getData() {
  let data;
  await axios
    .get("/projects", {
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
const AboutDetails= async ()=>{
    const params=useParams();
    const {id}=params;
    const data=await getData()
    console.log(data)
    const arr=data.props.data.data
    const dataToUse=arr.find(mov=>mov.id==id)
    console.log(dataToUse)
    return(<>
    <div className="container mx-auto">
        <div className="py-4 px-6">
        <div className="flex items-center justify-center">
    <Image  src={dataToUse.image} width={600} height={300} className="object-cover rounded-xl" alt="About"/>
    </div>
        <div>
    <h1 className="text-[#f9f9f9] text-center py-4">{dataToUse.title}</h1>
    </div>
    <div className="grid grid-cols-4 place-content-center gap-4 px-12 ">
        <div className=" col-start-1 col-span-2"><p className="text-white font-semibold ">{dataToUse.text}</p></div>
        <div className="col-start-3 col-span-2 place-self-center text-white">
            <p className="font-semibold">CLIENT: {dataToUse.client}</p>
            <p className="font-semibold">DIRECTOR: {dataToUse.directors}</p>
            <p className="font-semibold">DP: {dataToUse.client}</p>
            <p className="font-semibold">AGENCY: {dataToUse.agency}</p>
        </div>
        </div>
    
    </div>
    </div>
    </>)

}

export default AboutDetails