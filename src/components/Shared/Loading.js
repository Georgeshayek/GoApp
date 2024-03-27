"use client"
import { ColorRing } from 'react-loader-spinner'

const Loading=(props)=>{
    return(
        <div className={`flex justify-center items-center ${ props.white?"bg-white":"bg-black"} p-16`} >
            <ColorRing
        visible={true}
        height="140"
        width="140"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
        </div>
    )
}
export default Loading