import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image"
const AboutItem=(props)=>{
    
    return(<>
    <div className="max-lg:px-4 py-8">
    <Image  src={props.image} width={600} height={300} className="max-h-[230px] object-cover" alt="About"/>
    <div className="py-2 flex max-lg:text-center flex-col justify-between min-h-[50px]">
        <h1 className={`pb-2  ${props.active?"text-black font-bold":"text-gray-500"}`}>{props.title}</h1>
        <p className={`${props.active?"text-black font-semibold py-2":"text-gray-500"}`}> {props.description?props.description:"lorem ipsum date gsduiojss"}</p>
         </div>
    <button className={`max-lg:mx-auto border border-transparent flex justify-center items-center px-4 ${props.active?"border-b-blue-500 font-semibold":"border-b-gray-500 text-gray-500"}`}><p className="pr-6">Know more</p><FaArrowRight className={`w-4 h-4 ${props.active?"text-blue-500":"text-gray-500"}`}/></button>
    </div>
    </>)
}
export default AboutItem