import Image from "next/image"
const AboutItem=(props)=>{
    
    return(<>
    <div className=" py-8">
    <Image  src={props.image} width={600} height={300} className="max-h-[230px] object-cover" alt="About"/>
    <div className="py-2 flex flex-col justify-between min-h-[50px]">
        <h1 className={`pb-2 ${props.active?"text-black font-bold":"text-gray-500"}`}>{props.title}</h1>
        <p className={`${props.active?"text-black font-semibold py-2":"text-gray-500"}`}> {props.description?props.description:"lorem ipsum date gsduiojss"}</p>
         </div>
    <button className={`border border-transparent ${props.active?"border-b-blue-500 font-semibold":"border-b-gray-500 text-gray-500"}`}>Know more</button>
    </div>
    </>)
}
export default AboutItem