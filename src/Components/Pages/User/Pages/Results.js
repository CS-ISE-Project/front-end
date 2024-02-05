import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Article from "./Article";
import { useLocation } from "react-router-dom";
import FilterForm from "./FilterFormStandard";

function Results() {
  const [carousel, setCarousel] = useState(1);
  const [Pagination, setPagination] = useState(1);
  const location = useLocation();
  const [filteredData, setFilteredData] = useState(location.state[0]);
  const [filterShow, setFilterShow] = useState(0);
  const query = location.state[1];
  const length = Object.keys(filteredData).length;
  const lengthofPagination =
    length % 6 === 0 ? Math.floor(length / 6) : Math.floor(length / 6) + 1;

  const handleSubmit = (data) => {
    console.log("Filtered Data:", data);
    setFilteredData(data);
  };

  const toggleDropdown = () => {
    setFilterShow(!filterShow);
  };

  const items = [];
  for (let i = 1; i <= lengthofPagination; i++) {
    items.push(
      <div
        key={i}
        className={`${
          Pagination === i
            ? "flex items-center justify-center border-2 border-Blue66 rounded-full w-20 h-20 text-white bg-Blue66 text-[2rem] font-bold "
            : "flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem] font-bold cursor-pointer"
        }`}
        onClick={() => {
          setPagination(i);
        }}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-[84vw] gap-[72px] md:my-[200px] my-[160px]">
      <div className="w-[100%] flex items-center lg:items-start lg:justify-between gap-16 lg:flex-row flex-col">
        <div className="flex gap-4 lg:order-first order-last">
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
        <div className="flex flex-col items-end">
          <div className="flex gap-[16px]  items-center">
            <div className="flex items-center lg:gap-8 gap-4">
              <p className="text-Typo lg:text-[1.5rem] md:text-[1.3rem] text-[1rem]">
                Apply Filter:
              </p>
              <div
                className="text-Typo border-2 rounded-[8px] border-[#DEE2E6] flex items-center py-4 px-8 gap-4 hover:cursor-pointer"
                onClick={toggleDropdown}
              >
                <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1rem]">
                  Select Filter
                </p>
                <FaChevronDown
                  className={`text-Blue66 transition-transform duration-300  ${
                    filterShow ? "rotate-180 " : ""
                  }`}
                />
              </div>
            </div>
          </div>
          {filterShow ? (
            <FilterForm onSubmit={handleSubmit} Queryofsearch={query} />
          ) : (
            <></>
          )}
        </div>
      </div>

      {carousel ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[3vw]">
          {Array.isArray(filteredData) &&
            filteredData
              .slice((Pagination - 1) * 6, Pagination * 6)
              .map((article) => (
                <Article
                  carousel={carousel}
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  author={article.authors.join(", ")}
                  abstract={article.abstract}
                  references={article.references}
                />
              ))}
        </div>
      ) : (
        <div className="flex flex-col gap-[3vw]">
          {Array.isArray(filteredData) &&
            filteredData
              .slice((Pagination - 1) * 6, Pagination * 6)
              .map((article) => (
                <Article
                  key={article.id}
                  carousel={carousel}
                  id={article.id}
                  title={article.title}
                  author={article.authors.join(", ")}
                  abstract={article.abstract}
                  references={article.references}
                />
              ))}
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

        {items}
        <div
          className="flex items-center justify-center border-2 border-[#DDDDDD] rounded-full w-20 h-20 text-[#6F6F6F] text-[2rem]"
          onClick={() => {
            if (Pagination !== lengthofPagination) {
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
