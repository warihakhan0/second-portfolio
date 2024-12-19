import Hero from "./components/hero";
import Expertise from "./components/expertise";
import About from "./About/page";
import Portfolio from "./Portfolio/page";
import Testimonial from "./Testimonails/page";
import Contact from "./Contact/page";
export default function Home() {
  return (
   <div>
    <Hero />
    <Expertise />
    <About />
    <Portfolio />
    <Testimonial />
    <Contact />
   </div>
  );
}
