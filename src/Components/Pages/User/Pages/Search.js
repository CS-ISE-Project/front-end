import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [option, setOption] = useState(0);
  return (
    <div className="flex flex-col items-center w-[84vw] gap-[72px] md:my-[200px] my-[160px]">
      <div className="bg-[#F3F3F3] lg:w-[50vw] md:w-[70vw] w-[84vw] lg:h-[104px] md:h-[96px] h-[80px]  rounded-[20px] flex items-center justify-between px-[4px]">
        <div
          className={`${
            !option
              ? "w-[49.5%] lg:h-[96px] md:h-[88px] h-[72px] rounded-[16px] flex items-center justify-center bg-Blue66 transition ease-in delay-100"
              : "w-[49.5%] lg:h-[96px] md:h-[88px] h-[72px] rounded-[16px] flex items-center justify-center bg-tranparent hover:bg-white hover:cursor-pointer transition ease-in delay-100"
          }`}
          onClick={() => {
            setOption(0);
          }}
        >
          <p
            className={`${
              !option
                ? "lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] font-semibold text-white transition ease-in delay-100"
                : "lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] font-semibold text-Blue66 transition ease-in delay-100"
            }`}
          >
            Recherche standard
          </p>
        </div>
        <div
          className={`${
            !option
              ? "w-[49.5%] lg:h-[96px] md:h-[88px] h-[72px] rounded-[16px] flex items-center justify-center bg-tranparent hover:bg-white hover:cursor-pointer transition ease-in delay-100"
              : "w-[49.5%] lg:h-[96px] md:h-[88px] h-[72px] rounded-[16px] flex items-center justify-center bg-Blue66 transition ease-in delay-100"
          }`}
          onClick={() => {
            setOption(1);
          }}
        >
          <p
            className={`${
              !option
                ? "lg:text-[1.5rem] md:text-[1.2rem] text-[0.9rem] font-semibold text-Blue66 transition ease-in delay-100"
                : "lg:text-[1.5rem] md:text-[1.2rem] text-[0.9rem] font-semibold text-white transition ease-in delay-100"
            }`}
          >
            Recherche avancée 🚀✨
          </p>
        </div>
      </div>

      <img
        className="lg:w-[12vw] md:w-[24vw] w-[30vw]"
        src="Search.png"
        alt="Search"
      />
      {option ? (
        <div className="w-[100%] lg:bg-white lg:h-[120px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
          <div className="lg:flex w-[99%] h-[100px] hidden items-center justify-between">
            <div className="h-[100px] w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                  Title
                </h3>
                <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                  Search using Title
                </p>
              </div>
            </div>
            <div className="h-[40px] w-[1px] bg-[#DDDDDD]"></div>
            <div className="h-[100px] w-[15vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                  Keywords
                </h3>
                <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                  Search using keywords
                </p>
              </div>
            </div>
            <div className="h-[40px] w-[1px] bg-[#DDDDDD]"></div>
            <div className="h-[100px] w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                  Authors
                </h3>
                <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                  Search using authors
                </p>
              </div>
            </div>
            <div className="h-[40px] w-[1px] bg-[#DDDDDD]"></div>
            <div className="h-[100px] w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                  Content
                </h3>
                <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                  Search using content
                </p>
              </div>
            </div>
            <div className="h-[40px] w-[1px] bg-[#DDDDDD]"></div>
            <div className="h-[100px] w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                  Institut
                </h3>
                <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                  Search using institut
                </p>
              </div>
            </div>
            <Link
              className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-l-[120px] rounded-r-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
              to="/user/results"
            >
              <img src="/search_icon.svg" alt="search" />
              <p className="text-[1.5rem] text-white font-bold">Search</p>{" "}
            </Link>
          </div>
          <div className="flex flex-col lg:hidden md:w-[50vw] w-[84vw] py-4 gap-8">
            <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
              <div className="flex flex-col items-center gap-[8px]">
                <h3 className="font-black text-[1.2rem] text-Typo">Title</h3>
                <p className="text-[#8B8B8B] text-[1rem]">Search using Title</p>
              </div>
            </div>

            <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
              <div className="flex flex-col items-center gap-[8px]">
                <h3 className="font-black text-[1.2rem] text-Typo">Keywords</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                  Search using Keywords
                </p>
              </div>
            </div>

            <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
              <div className="flex flex-col items-center gap-[8px]">
                <h3 className="font-black text-[1.2rem] text-Typo">Authors</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                  Search using Authors
                </p>
              </div>
            </div>

            <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
              <div className="flex flex-col items-center gap-[8px]">
                <h3 className="font-black text-[1.2rem] text-Typo">Content</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                  Search using Content
                </p>
              </div>
            </div>

            <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
              <div className="flex flex-col items-center gap-[8px]">
                <h3 className="font-black text-[1.2rem] text-Typo">Institut</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                  Search using Institut
                </p>
              </div>
            </div>

            <Link
              className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[120px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
              to="/user/results"
            >
              <img src="/search_icon.svg" alt="search" />
              <p className="text-[1.5rem] text-white font-bold">Search</p>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
          <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
            <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
              <input
                className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                placeholder="Recherche : Titre, Auteur, Contenu...."
              />
            </div>
            <Link
              className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-l-[120px] rounded-r-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
              to="/user/results"
            >
              <img src="/search_icon.svg" alt="search" />
              <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                Search
              </p>{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
