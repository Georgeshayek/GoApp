const { default: Image } = require("next/image")

const ClientObject=()=>{
return(
    <div className="px-16 max-lg:py-4">
    <div className="flex relative flex-col justify-center items-center">
        <div className="flex  p-2 items-center border rounded-full border-white" >
            <Image src="/person.jpeg" width={120} height={160} className=" h-[120px] rounded-full object-cover"/>
        </div>
        <div className="w-1 h-16 bg-white" >
        
        </div>
        
        
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="absolute bottom-4 left-20 w-20  text-[14px] ">
        <p>Georges</p>
        <p>Hello world</p>
    </div>
    </div>
    
    </div>
)

}
export default ClientObject