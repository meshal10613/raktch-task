import Image from "next/image";
import Banner from "./Components/Banner";
import Partners from "./Components/Partners";
import Service from "./Components/Service";
import TopDestination from "./Components/TopDestination";

export default function Home() {
  return (
    <>
      <Banner/>
      <Partners/>
      <Service/>
      <TopDestination/>
    </>
  );
}