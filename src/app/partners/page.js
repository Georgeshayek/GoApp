import Partners from "./partner";
import { Suspense } from "react";
import Loading from "@/components/Shared/Loading";
import { metadata } from "../layout";
const PartnerPage=()=>{
    metadata.title="partners"
    return(
        <Suspense fallback={Loading}>
            <Partners/>
        </Suspense>
    )
}
export default PartnerPage