const { default: Image } = require("next/image")

const Images=(props)=>{
    return(
        <div className=" py-2">
            <Image width={350} height={200} className="rounded-xl" src={props.image} alt="image"/>
            <h1 className="text-[#ffffff] py-1 font-bold">{props.title}</h1>
            <p className="text-gray-300">{props.description}</p>
        </div>
    )
}
export default Images
