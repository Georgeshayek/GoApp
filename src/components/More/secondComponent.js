const { default: Image } = require("next/image")

const SecondComponent=()=>{
    const data =[
        {
        imageurl:"/art.jpg",
        title:"art is beautiful"
           },
       {
        imageurl:"/sport.jpg",
        title:"sport is good for you"
       },
       {
        imageurl:"/music.jpg",
        title:"music is for relaxing"
        }
    ]
    return(
        <div className="py-8 px-4 text-white">
            <h1 className=" text-center text-3xl font-bold">Container with images</h1>
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
export default SecondComponent