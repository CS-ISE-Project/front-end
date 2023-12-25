import CTA from "./CTA";
import About from "./About";
import Hero from "./Hero";

const MiddleSection = () => {
    return (
        <div className="my-10 md:my-20">
            <Hero></Hero>
            <About></About>
            <CTA></CTA>
        </div>
      );
}
 
export default MiddleSection;