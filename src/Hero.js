import ConnexioButton from './ConnexionButton';
import image from './Group1.png';
import SinscrireButton from './SinscrireButton';
const Hero = () => {
    return ( 
        <section className="flex flex-col gap-8 md:flex-row" >

            <div className='basis-2/5 md:order-2'>
               <img className='w-full'  src={image} />
            </div>

            <div className='basis-3/5 md:order-1'>
                <h1 className='2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl mb-4  max-md:text-center font-normal md:mb-10'>L’exploration de <p className='inline-block text-Blue66'>documents</p> est devenue plus <p className='inline-block text-[#F49EAB]'>agréable</p>  que jamais.</h1>

                <p className='text-[#515151] max-md:text-center text-base 2xl:text-2xl xl:text-xl lg:text-lg mb-4'>Plongez dans le domaine de l'information avec une joie retrouvée en parcourant les documents sans effort. Découvrez une multitude d'informations et tirez le meilleur parti de votre exploration, transformant chaque recherche en un délicieux voyage de découverte.</p>

                <div className='flex flex-col md:flex-row items-center md:my-10 lg:my-15 '>
                    <ConnexioButton></ConnexioButton>
                    <SinscrireButton></SinscrireButton>
                </div>
             
            </div>

        </section>
     );
}
 
export default Hero;