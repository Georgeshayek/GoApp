"use client"

import { useReducer,useState } from "react"
const InitialNameError={
    value:"",
    status:false,
    message:"cant leave empty field"
}
const InitialEmailError={
    value:"",
    status:false,
    message:"cant leave empty field"
}
const InitialInfoError={
    value:"",
    status:false,
    message:"cant leave empty fields"
}
function reducer(state, action) {
    switch (action.type) {
      case 'update':
        return { ...state, value:action.payload.value,status:state.value.length>=3&&state.value.length<=8?true:false,message:state.status?"":" the field must be around 3 or 8 lettes"   };
        
      default:
        return{...state};
    }
}
function reducer1(state, action) {
    switch (action.type) {
      case 'update':
        return { ...state, value:action.payload.value,status:action.payload.value.includes('@')&&action.payload.value.includes('.')?true:false,message:state.status?"":" the field must contain @ or ."   };
        
      default:
        return{...state};
    }
}
function reducer2(state, action) {
    switch (action.type) {
      case 'update':
        return { ...state, value:action.payload.value,status:state.value.length>=5&&state.value.length<=40?true:false,message:state.status?"":" the field must be around 5 to 40 lettes"   };
        
      default:
        return{...state};
    }
}
const ContactUs=()=>{
    const [state,dispatch]=useReducer(reducer,InitialNameError)
    const [stateEmail,dispatchEmail]=useReducer(reducer1,InitialEmailError)
    const [stateTextArea,dispatchTA]=useReducer(reducer2,InitialInfoError)
    const [error,setError]=useState(false)
    const onNameChange=e=>{
        dispatch({
            type:'update',
            payload:{value:e.target.value}
        })
    }
    const onEmailChange=e=>{
        dispatchEmail({
            type:'update',
            payload:{value:e.target.value}
        })
    }
    const onTextAreaChange=e=>{
        dispatchTA({
            type:'update',
            payload:{value:e.target.value}
        })
    }
    const onSubmit=(e)=>{
        console.log(state.value)
        console.log(state.status)
        e.preventDefault()
        if(!state.status||!stateEmail.status||!stateTextArea.status)
            setError(true)
        else
            setError(false)

    }
    return(
        <div className=" container mx-auto">
                <div className="">
                    <h1 class="text-5 text-center"> Contact us</h1>
                    <form onSubmit={onSubmit} className=" flex flex-col  items-center justify-between" >
                       
                        <div className="py-4">
                    <input placeholder="name" onChange={onNameChange} className=" py-4 px-6 rounded-xl bg-slate-500"/>
                    {error&&!state.status&&<p className="text-red-500 text-[10px] ">{state.message}</p>}
                    </div>
                    <div className="py-4">
                    <input placeholder="email" onChange={onEmailChange} className=" py-4 px-6 rounded-xl  bg-slate-500"/>
                    {error&&!stateEmail.status&&<p className="text-red-500 text-[10px] ">{stateEmail.message}</p>}
                    </div>
                    <div className="py-4">
                    <textarea onChange={onTextAreaChange} placeholder="textarea" className=" py-4 px-8 rounded-xl  bg-slate-500"  />
                    {error&&!stateTextArea.status&&<p className="text-red-500 text-[10px] ">{stateTextArea.message}</p>}

                    </div>
                    <button className="bg-red-500 text-white">Submit</button>
                    </form>
                </div>
        </div>
    )
}
export default ContactUs