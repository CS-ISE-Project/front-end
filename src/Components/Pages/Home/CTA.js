import { Link } from "react-router-dom";

function CTA() {
  let userNb = 221846;
  return (
    <section className="px-8">
      <p className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center">
        Rejoignez les {userNb} utilisateur maintenant
      </p>
      <div className="flex flex-col md:flex-row  items-center justify-center my-10 my-15 gap-4 ">
        <Link to="/Login">
          <button className="bg-Purple100 text-[24px] md:text-[32px] px-[4vw] md:px-[2vw] md:py-[1.5vh] w-[200px] md:w-auto h-[72px] md:h-auto text-white border-2 border-Purple100 rounded-[4px]">
            Connexion
          </button>
        </Link>
        <Link to="/Register">
          <button className="text-[24px] md:text-[32px] px-[4vw] md:px-[2vw] md:py-[1.5vh] w-[200px] md:w-auto h-[72px] md:h-auto text-Purple100 border-2 border-Purple100 rounded-[4px]">
            S’inscrire
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;
