
import { metadata } from "@/app/layout"
import AboutDetails from "./AboutDetails"
import { Suspense } from "react"
import Loading from "@/components/Shared/Loading"
export default function page(){
    metadata.title="AboutDetails"
    return (
    <Suspense fallback={<Loading/>}>
    <AboutDetails/>
    </Suspense>
    )
}