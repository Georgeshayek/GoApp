import Image from "next/image"
const FourthComponent=()=>{
    const data =[
        {
        imageurl:"/art1.jpg",
        title:"art is nice"
           },
       {
        imageurl:"/sport1.jpg",
        title:"sport is great for you"
       },
       {
        imageurl:"/music1.jpg",
        title:"music is for fun"
        }
    ]
    return(
        <div className="py-8 px-4 text-white">
            <h1 className=" text-center text-3xl font-bold">Relaxing images </h1>
            <div className="flex max-lg:flex-col justify-between items-center">
                {
                    data.map(mov=>(<div className="py-4 flex flex-col justify-center items-center">
                        <Image src={mov.imageurl} alt="image" width={400} height={350} className="min-h-[300px] rounded-xl py-3 " />
                        <h1 className="font-bold">{mov.title}</h1>
                    </div>))
                }
            </div>
        </div>
    )
}
export default FourthComponent