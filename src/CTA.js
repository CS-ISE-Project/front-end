import ConnexioButton from "./ConnexionButton";
import SinscrireButton from "./SinscrireButton";

const CTA = () => {
    let userNb = 221846 ;
    return ( 
        <section className="md:px-8">
            <p className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-4xl text-3xl mb-4 text-center font-normal md:mb-10 text-[#515151]">Rejoignez les {userNb} utilisateur maintenant</p>
            <div className="flex flex-col md:flex-row  items-center justify-center md:my-10 lg:my-15 md:gap-4 ">
                <div className="md:order-2"><ConnexioButton></ConnexioButton></div>   
                <div className="md:order-1"><SinscrireButton></SinscrireButton></div>
            </div>
        </section>
     );
}
 
export default CTA;