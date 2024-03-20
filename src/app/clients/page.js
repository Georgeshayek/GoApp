import ClientObject from "@/components/Clients/clientObject"

export const metadata = {
    title: "Clients",

}  
const Clients=()=>{
    return(
        <div className=" text-white py-4 	 lg:px-4">
            <div className="flex justify-center max-lg:flex-col items-center">
            <ClientObject/>
            <ClientObject/>
            <ClientObject/>
            <ClientObject/>
            </div>
        </div>
    )
}
export default Clients