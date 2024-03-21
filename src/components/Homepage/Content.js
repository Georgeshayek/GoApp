"use client"
const { default: ImageTitle, default: Images } = require("./ImagesTitle")

const Content=(props)=>{
    
    
return(
    <div className="container mx-auto">
        <div  className="px-20 py-8">
        
    
        
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