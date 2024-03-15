import Image from "next/image"

const ImageTextRev=(props)=>{

    return(
        <>
        <div className="container mx-auto">
        <div className={`lg:relative flex ${props.reverse? "lg:flex-row-reverse ":""} max-lg:flex-col max-lg:items-center max-lg:justify-center  max-lg:px-2 lg:px-20 py-8`}>
            <Image src={props.imageUrl} width={800} height={300} className=" max-lg:max-w-[250px]"alt="furnuture"/>
                <h1 className={ `lg:absolute top-[40%] max-lg:py-3 ${props.reverse?"lg:left-[10%]":"lg:left-[60%]"} text-[2rem] lg:max-w-[360px]  max-lg:text-[11px] ${props.reverse?"-left-16":"-left-6"}`}>{props.title} </h1>
            
            </div>
        </div>
        </>
    )

}

export default ImageTextRev