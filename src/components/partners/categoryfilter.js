"use client"

const { default: Image } = require("next/image");
const { useState } = require("react")

const CategoryFilter=()=>{
    const data=[
        {
            imgurl:"/Tech.jpg",
            title:"lorem ipsum Tech1",
            category:"tech"

        },
        {
            imgurl:"/Tech1.jpg",
            title:"lorem ipsum Tech2",
            category:"tech"

        },
        {
            imgurl:"/Tech2.jpg",
            title:"lorem ipsum Tech2",
            category:"tech"

        },
        {
            imgurl:"/Tech3.jpg",
            title:"lorem ipsum Tech3",
            category:"tech"

        },
        {
            imgurl:"/art.jpg",
            title:"lorem ipsum art",
            category:"art"

        },
        {
            imgurl:"/art1.jpg",
            title:"lorem ipsum art1",
            category:"art"

        },
        {
            imgurl:"/art2.jpg",
            title:"lorem ipsum art2",
            category:"art"

        },
        {
            imgurl:"/art3.jpg",
            title:"lorem ipsum art3",
            category:"art"

        }
        
    ]
    const [arr,setArr]=useState(data);
    const [option,setOption]=useState('all category')
    const onOptionHandler=(s)=>{
        setOption(s)
        onClickHandler(s)
    }
    const onClickHandler=(s)=>{
        if(s==="all category")
        {
            setArr(data)
        }
        else{
            setArr(data.filter(mov=> mov.category==s))
        }
    }
    return(
        <>
        <div className="px-4 py-6">
            <div className=" flex max-lg:flex-col justify-between items-center py-8 px-4">
                <div onClick={onOptionHandler.bind(null,"all category")} className="flex flex-col justify-center w-full items-center max-lg:py-3">
                    <h1 className={`${option=="all category"?"font-bold text-xl":""}`}>All Category</h1>
                    <div className={`${option=="all category"?"bg-white w-full ease-in duration-300":"bg-gray-500 w-10"}  h-1`}></div>
                </div>
                <div onClick={onOptionHandler.bind(null,"tech")} className="flex flex-col w-full justify-center items-center  max-lg:py-3">
                    <h1 className={`${option=="tech"?"font-bold text-xl":""}`}>Tech</h1>
                    <div className={`${option=="tech"?"bg-white w-full ease-in duration-300":"bg-gray-500 w-10"}  h-1`}></div>
                </div>
                <div onClick={onOptionHandler.bind(null,"art")} className="flex flex-col w-full justify-center items-center  max-lg:py-3">
                    <h1 className={`${option=="art"?"font-bold text-xl":""}`}>Art</h1>
                    <div className={`${option=="art"?"bg-white w-full ease-in duration-300":"bg-gray-500 w-10"}  h-1`}></div>
                </div>
            </div>

            <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-2">
            {arr.map(mov=>(
                <div className="flex flex-col col-span-1 justify-center py-3 items-center">
                    <Image src={mov.imgurl} alt="img" width={400} height={300}/>
                     <h1 className="font-bold">{mov.title}</h1>
                </div>

            )
            )
            }
            </div>
        </div>
        
        </>
    )



}
export default CategoryFilter;