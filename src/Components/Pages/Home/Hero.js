import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full px-[8vw] lg:justify-between gap-[7vh]">
      <div className="flex flex-col gap-[48px] order-last md:order-first justify-center items-center md:items-start md:w-[45vw]">
        <div className="flex flex-col gap-[24px] justify-center items-center md:items-start md:w-[40vw]">
          <h1 className="lg:text-[4rem] text-[2.5rem] md:text-[3rem] font-Natasha text-center md:text-left">
            L’exploration de{" "}
            <span className="text-Blue66 font-Natasha">documents</span> est
            devenue plus{" "}
            <span className="text-Rose66 font-Natasha">agréable</span> que
            jamais.
          </h1>
          <p className="lg:text-[1.25rem] text-[1rem] font-Gilroy text-[#ABABAB] text-center md:text-left">
            Plongez dans le domaine de l'information avec une joie retrouvée en
            parcourant les documents sans effort. Découvrez une multitude
            d'informations et tirez le meilleur parti de votre exploration,
            transformant chaque recherche en un délicieux voyage de découverte.
          </p>
        </div>
        <div className="flex gap-[10px]">
          <Link to="/Login">
            <button className="font-Gilroy bg-Purple100 text-[18px] md:text-[24px] px-[4vw] md:px-[2vw] py-[1.5vh] text-white border-2 border-Purple100 rounded-[4px]">
              Connexion
            </button>
          </Link>
          <Link to="/Register">
            <button className="font-Gilroy text-[18px] md:text-[24px] px-[4vw] md:px-[2vw] py-[1.5vh] text-Purple100 border-2 border-Purple100 rounded-[4px]">
              S’inscrire
            </button>
          </Link>
        </div>
      </div>
      <img
        alt="Hero"
        className="sm:w-[84vw] md:w-[35vw] md:max-h-[50vw]"
        src="/SearchDoc.png"
      />
    </div>
  );
}

export default Hero;
