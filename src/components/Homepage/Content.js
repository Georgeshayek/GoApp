const { default: ImageTitle, default: Images } = require("./ImagesTitle")

const Content=()=>{
    const arr=[{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },
    {
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    },{
        image:"/pepsi.jpeg",
        title:"Pepsi and coke",
        description:"Pepsi and coca cola Expo 2022 "
    }

]
return(
    <div className="container mx-auto">
        <div className="px-20 py-8">
            <div className="flex justify-center items-center">

        <div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:place-content-center  place-content-start gap-6">
            {arr.map((mov,i)=>{
                return(<Images key={i} image={mov.image}  title={mov.title} description={mov.description}/>)
                
            })}
</div>
</div>
        </div>
    </div>
    </div>
)
}
export default Content