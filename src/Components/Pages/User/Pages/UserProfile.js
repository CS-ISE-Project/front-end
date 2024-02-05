import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Article from "./Article";
const UserProfile = () => {
  const location = useLocation();
  const userData = location.state;
  const prenom = userData.user.first_name;
  const nom = userData.user.last_name;
  const email = userData.user.email;
  const [carousel, setCarousel] = useState(1);
  const [Pagination, setPagination] = useState(1);

  const length = Object.keys(userData.favorites).length;
  const lengthofPagination =
    length % 6 === 0 ? Math.floor(length / 6) : Math.floor(length / 6) + 1;

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
    <div className="flex flex-col w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px]">
      <div className="flex flex-col lg:flex-row justify-between md:gap-20">
        <div className="lg:order-last mb-[4vh] flex justify-center items-center">
          <img
            className="h-[20vh] md:h-[25vh] lg:h-[40vh] xl:h-[45vh]  "
            src="/profileImage.png"
            alt="f"
          />
        </div>

        <div className="flex flex-1 lg:max-w-2xl flex-col">
          <h2 className="lg:text-[2rem] text-[1.7rem] mb-[3vh] text-Typo font-extrabold">
            Personal Information
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between  gap-5  sm:gap-7">
              <div className="flex flex-col w-1/2 gap-2 ">
                <label className="">First Name</label>
                <div className=" rounded-md text-black  bg-[#F2F3F6] w-full p-3 md:p-4">
                  {prenom}
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="">Last Name</label>
                <div className="rounded-md text-black bg-[#F2F3F6] w-full  p-3 md:p-4">
                  {nom}
                </div>
              </div>
            </div>
            <label>Email</label>
            <div className="rounded-md text-black  bg-[#F2F3F6]  p-3 md:p-4">
              {email}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:text-[2rem] text-[1.7rem] mb-[3vh] text-Typo font-extrabold text-center mt-[3vh] lg:mt-0">
        Saved
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
      </div>

      {carousel ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[3vw]">
          {Object.keys(userData.favorites).map((favoriteId) => {
            const article = userData.favorites[favoriteId];
            return (
              <Article
                carousel={carousel}
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.authors.join(", ")}
                abstract={article.abstract}
                references={article.references}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-[3vw]">
          {Object.keys(userData.favorites).map((favoriteId) => {
            const article = userData.favorites[favoriteId];
            return (
              <Article
                carousel={carousel}
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.authors.join(", ")}
                abstract={article.abstract}
                references={article.references}
              />
            );
          })}
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
};
export default UserProfile;
