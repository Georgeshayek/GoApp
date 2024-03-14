const { default: Image } = require("next/image")

const ImageTextHover=()=>{
    return(<>
        <div className="container mx-auto py-8 ">
            <div className="flex justify-center items-center">
                <div className="relative group ease-in  duration-300"> 
                    <Image src="/Dubai.png" width={700} height={350} className=" max-lg:max-w-[250px] ease-in  duration-300 grayscale group-hover:grayscale-0" alt="dubai"/>
                    <div className="absolute text-center top-[50%] max-lg:-right-[20%] -right-[30%]">
                            <h1 className="text-[1.5rem] max-lg:text-[10px] ease-in  duration-300  group-hover:block group-hover:font-bold"> I am very happy that you are here </h1>
                            <p className="  hidden ease-in  duration-300 max-lg:text-[6px]  group-hover:block text-red-500"> welcome to Dubai</p>
                    </div>
               
                </div>

            </div>


        </div>
    
    </>)
}
export default ImageTextHover