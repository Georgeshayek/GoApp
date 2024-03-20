import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
const Footer=()=>{

    return(
        <div className="bg-[#fe424c]">
        <div className="container mx-auto">
            <div className="py-6 px-12 max-lg:px-2">
                <div className=" grid grid-cols-6 max-lg:grid-cols-2 text-white gap-2">
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="py-3">sitemap</h1>
                        <Link href="/" className="font-bold">about us</Link>
                        <Link href="/" className="font-bold">our work</Link>
                        <Link href="/" className="font-bold">our clients</Link>
                        <Link href="/" className="font-bold">our teams</Link>
                        <Link href="/" className="font-bold">contact us</Link>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="py-3">offices</h1>
                        <p className="font-bold">about us</p>
                        <p className="font-bold">our work</p>
                        <p className="font-bold">our clients</p>
                        <p className="font-bold">our teams</p>
                        <p className="font-bold">contact us</p>
                    </div>
                    
                    <div className="col-start-6 max-lg:col-start-1 col-span-2 flex flex-col items-end justify-start ">
                    <div>
                    <h1 className="py-3">inquires</h1>
                    <p className="font-bold">briefme@localhost</p>
                    </div>
                    </div>
                    <div className="row-start-2 max-lg:row-start-3 col-start-1 col-span-1 max-lg:col-span-2 flex items-center justify-start">
                    <Link href="/"><Image src="/logo.png" alt=" Logo" width={150} height={50}/></Link>
                    <Link href="/"><FaInstagram className="w-8 h-8"/> </Link>
                    <Link href="/"><CiLinkedin className="w-9 h-9"/></Link>
                    </div>
                    <div className="row-start-2  max-lg:row-start-4  max-lg:col-start-1 col-start-5 col-span-2  flex items-start justify-end ">
                    <p className="">privacy policies | terms & conditions </p>
                    </div>
                </div>
            </div>

        </div>

        </div>
    )
}
export default Footer