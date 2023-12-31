import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Article from "./Article";

function Results() {
  const [carousel, setCarousel] = useState(1);
  const [Pagination, setPagination] = useState(1);
  return (
    <div className="flex flex-col items-center w-[84vw] gap-[72px] md:my-[200px] my-[160px]">
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
              <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem]">
                Quantum computing
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
          <div
            className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-l-[120px] rounded-r-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
            to="/user/results"
          >
            <img src="/search_icon.svg" alt="search" />
            <p className="text-[1.5rem] text-white font-bold">Search</p>{" "}
          </div>
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
              <p className="text-Blue66 font-bold text-[1rem]">
                Quantum computing
              </p>
            </div>
          </div>

          <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
            <div className="flex flex-col items-center gap-[8px]">
              <h3 className="font-black text-[1.2rem] text-Typo">Authors</h3>
              <p className="text-[#8B8B8B] text-[1rem]">Search using Authors</p>
            </div>
          </div>

          <div className="h-[80px] flex justify-center items-center bg-white hover:bg-[#FAFAFA] rounded-full transition cursor-pointer">
            <div className="flex flex-col items-center gap-[8px]">
              <h3 className="font-black text-[1.2rem] text-Typo">Content</h3>
              <p className="text-[#8B8B8B] text-[1rem]">Search using Content</p>
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

          <div
            className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[120px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
            to="/user/results"
          >
            <img src="/search_icon.svg" alt="search" />
            <p className="text-[1.5rem] text-white font-bold">Search</p>{" "}
          </div>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-between">
        <div className="flex gap-4">
          <button
            className={`${
              carousel
                ? "rounded-[4px] md:h-[56px] h-[40px] md:w-[56px] w-[40px] flex items-center justify-center bg-Blue66"
                : "rounded-[4px] md:h-[56px] h-[40px] md:w-[56px] w-[40px] flex items-center justify-center bg-[#F2F2F2]"
            }`}
            onClick={() => {
              setCarousel(1);
            }}
          >
            {carousel ? (
              <img
                src="/carouselw.svg"
                alt="carousel"
                className="max-w-[70%]"
              />
            ) : (
              <img src="/carousel.svg" alt="carousel" className="max-w-[70%]" />
            )}
          </button>
          <button
            className={`${
              !carousel
                ? "rounded-[4px] md:h-[56px] h-[40px] md:w-[56px] w-[40px] flex items-center justify-center bg-Blue66 "
                : "rounded-[4px] md:h-[56px] h-[40px] md:w-[56px] w-[40px] flex items-center justify-center bg-[#F2F2F2]"
            }`}
            onClick={() => {
              setCarousel(0);
            }}
          >
            {!carousel ? (
              <img src="/listw.svg" alt="carousel" className="max-w-[70%]" />
            ) : (
              <img src="/list.svg" alt="carousel" className="max-w-[70%]" />
            )}
          </button>
        </div>
        <div className="flex items-center lg:gap-8 gap-4">
          <p className="text-Typo lg:text-[1.5rem] md:text-[1.3rem] text-[1rem]">
            Apply Filter:
          </p>
          <div className="text-Typo border-2 rounded-[8px] border-[#DEE2E6] flex items-center py-4 px-8 gap-4">
            <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1rem]">
              Select Filter
            </p>
            <FaChevronDown />
          </div>
        </div>
      </div>

      {carousel ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[3vw]">
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
        </div>
      ) : (
        <div className="flex flex-col gap-[3vw]">
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
          <Article carousel={carousel} />
        </div>
      )}

      <div className="lg:scale-1 md:scale-[0.9] scale-[0.8] flex gap-[0.7vw] gap-[2vw] justify-center items-center desktop15:mt-[-400px] cursor-pointer">
        <div
          className="flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem]"
          onClick={() => {
            if (Pagination !== 1) {
              setPagination(Pagination - 1);
            }
          }}
        >
          <FaChevronLeft />
        </div>
        <div
          className={`${
            Pagination === 1
              ? "flex items-center justify-center border-2 border-Blue66 rounded-full w-20 h-20 text-white bg-Blue66 text-[2rem] font-bold "
              : "flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem] font-bold cursor-pointer"
          }`}
          onClick={() => {
            setPagination(1);
          }}
        >
          1
        </div>
        <div
          className={`${
            Pagination === 2
              ? "flex items-center justify-center border-2 border-Blue66 rounded-full w-20 h-20 text-white bg-Blue66 text-[2rem] font-bold"
              : "flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem] font-bold cursor-pointer"
          }`}
          onClick={() => {
            setPagination(2);
          }}
        >
          2
        </div>
        <div
          className={`${
            Pagination === 3
              ? "flex items-center justify-center border-2 border-Blue66 rounded-full w-20 h-20 text-white bg-Blue66 text-[2rem] font-bold"
              : "flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem] font-bold cursor-pointer"
          }`}
          onClick={() => {
            setPagination(3);
          }}
        >
          3
        </div>

        <div
          className="flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem]"
          onClick={() => {
            if (Pagination !== 3) {
              setPagination(Pagination + 1);
            }
          }}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Results;
