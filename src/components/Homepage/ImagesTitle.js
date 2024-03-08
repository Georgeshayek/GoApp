const { default: Image } = require("next/image")

const Images=(props)=>{
    return(
        <div className=" py-2">
            <Image  width={600} height={200}    sizes='1000vw' className="rounded-xl object-fit w-full" src={props.image}  alt="image"/>
            <h1 className="text-[#ffffff] py-1 font-bold">{props.title}</h1>
            <p className="text-gray-300">{props.description}</p>
        </div>
    )
}
export default Images
