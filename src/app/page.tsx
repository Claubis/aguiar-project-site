import Image from "next/image";

import Banner from "./Banner/page";
import HomePage from "./HomePage/page";
import Modal from "./Modal/page";
import About from "./About/page";
import Services from "./Services/page";
import FormQuote from "./FormQuote/page";
import AboutFeedback from "./AboutFeedback/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Modal/>
      <About/>
      <Services/>
      <FormQuote/>
      <AboutFeedback/>
    </div>
    
  );
}
