import Image from "next/image"

const ImageTextRev=(props)=>{

    return(
        <>
        <div className="container mx-auto">
        <div className={`flex ${props.reverse? "flex-row-reverse":""}  max-lg:px-2 lg:px-20 py-8`}>
            <Image src={props.imageUrl} width={800} height={300} className=" max-lg:max-w-[250px]"alt="furnuture"/>
              <div className="relative flex items-center lg:px-24 max-lg:px-4">
                <h1 className={ `absolute text-[2rem] lg:w-[360px] max-lg:w-32 max-lg:text-[11px] ${props.reverse?"-left-16":"-left-6"}`}>{props.title} </h1>
            </div>
            </div>
        </div>
        </>
    )

}

export default ImageTextRev