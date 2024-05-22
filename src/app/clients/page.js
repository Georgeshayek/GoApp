import ClientObject from "@/components/Clients/clientObject"

import ClientVideo from "@/components/Clients/clientvideo";
import VideoPlayer from "@/components/Clients/videoPlayer";
import Loading from "@/components/Shared/Loading";
import { Suspense } from "react";
export const metadata = {
    title: "Clients",

}  

const Clients=()=>{
    return(<>

        <Suspense fallback={<Loading white={true}/>}>
            <div className=" text-white py-4 	 lg:px-4">
                <div className="flex justify-center px-0 py-4 max-lg:flex-col items-center">
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                </div>
                <div className="flex justify-center px-0 py-4 max-lg:flex-col items-center">
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                <ClientObject/>
                </div>
        </div>
       <ClientVideo/>
       <VideoPlayer/>
       </Suspense>
</>
    )
}
export default Clients