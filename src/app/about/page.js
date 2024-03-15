"use client"
import AboutSwiper from "@/components/About/swipers";
import axios from "@/utils/axios";
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
const  About=async()=>{
    const data=await getData()
    const arr=data.props.data.data
    const dataToSend=arr.map(mov=>{return{ id:mov.id,title:mov.title,image:mov.image,description:mov.description}})
    return(
    <div className="bg-white py-4 max-lg:px-4">
    {dataToSend && <AboutSwiper data= {dataToSend}/>}
    </div>)
}
export default About