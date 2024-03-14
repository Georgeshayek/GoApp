import ImageTextHover from "@/components/Contact/ImagetextHover"
import ImageTextRev from "@/components/Contact/ImagettextRev"

const Contact=()=>{
    return(
        <div className=" text-white py-4  lg:px-4">
            <h1>ContactPage</h1>
            <ImageTextRev imageUrl="/furnut.jpg" title="WE INSTITUTIONALIZE, PROTECT, AND GROW YOUR WEALTH" reverse={false}/>
            <ImageTextRev imageUrl="/furnut.jpg" title="WE INSTITUTIONALIZE, PROTECT, AND GROW YOUR WEALTH" reverse={true}/>
            <ImageTextHover/>
        </div>
    )
}
export default Contact