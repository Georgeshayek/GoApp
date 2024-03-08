import Content from "@/components/Homepage/Content";
import Hero from "@/components/Homepage/Hero";
import Footer from "@/components/Shared/footer";
import Navbar from "@/components/Shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#000]">
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
    </>
  );
}
