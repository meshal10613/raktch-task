import Image from "next/image";
import Banner from "./Components/Banner";
import Partners from "./Components/Partners";
import Service from "./Components/Service";
import TopDestination from "./Components/TopDestination";
import TravelPoint from "./Components/TravelPoint";

export default function Home() {
  return (
    <>
      <div className="px-[1%] md:px-[5%] my-5 2xl:px-[7%]">
        <Banner/>
        <Partners/>
        <Service/>
        <TopDestination/>
      </div>
      <TravelPoint/>
    </>
  );
}