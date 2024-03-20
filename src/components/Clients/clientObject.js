const { default: Image } = require("next/image")

const ClientObject=()=>{
return(
    <div className="flex flex-col justify-center items-center">
        <div className="flex p-2  items-center border rounded-full border-white" >
            <Image src="/person.jpeg" width={120} height={160} className=" h-[120px] rounded-full object-cover"/>
        </div>
        <div className="flex  items-start justify-center ml-[100px] ">
        <div className="w-1 h-14 bg-white" >
        </div>
        <div className=" flex flex-col items-start pl-4">
            <p>Georges</p>
            <p>Hello world</p>
        </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
    </div>
)

}
export default ClientObject