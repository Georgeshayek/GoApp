import ContactUs from "@/components/Contact/Contactus"
import ImageTextHover from "@/components/Contact/ImagetextHover"
import ImageTextRev from "@/components/Contact/ImagettextRev"
export const metadata = {
    title: "Contact",

}  
const Contact=()=>{
    return(
        <div className=" text-white py-4  lg:px-4">
            <ImageTextRev imageUrl="/furnut.jpg" title="WE INSTITUTIONALIZE, PROTECT, AND GROW YOUR WEALTH" reverse={false}/>
            <ImageTextRev imageUrl="/furnut.jpg" title="WE INSTITUTIONALIZE, PROTECT, AND GROW YOUR WEALTH" reverse={true}/>
            <ImageTextHover/>
            <ContactUs/>
        </div>
    )
}
export default Contact