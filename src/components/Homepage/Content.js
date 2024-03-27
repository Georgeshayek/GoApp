"use client"

import Link from "next/link"

const { default: ImageTitle, default: Images } = require("./ImagesTitle")

const Content=(props)=>{
    
    
return(
    <div className="container mx-auto">
        <div  className="px-20 py-8">
            <div>
        <Link className="text-white" href={"/partners?id=1"}>first accordion</Link>
        </div>
        <div>
        <Link className="text-white" href={"/partners?id=2"}>second accordion</Link>
        </div>
        <div>
        <Link className="text-white" href={"/partners?id=3"}>third accordion</Link>
        </div>
        
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:place-content-center  place-content-start gap-6">
            {props.data.map((mov,i)=>{
                return(
                <Images   key={i} image={mov.image}  title={mov.title} description={mov.description}/>             
                )
            })}

</div>
        </div>
    </div>
)
}
export default Content