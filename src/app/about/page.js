import { Suspense } from "react"
import { metadata } from "../layout"
import About from "./About"
import Loading from "@/components/Shared/Loading"
export default function page(){
    metadata.title="About"
    return (
    <Suspense fallback={<Loading white={true}/>}>
    <About/>
    </Suspense>
    )
}