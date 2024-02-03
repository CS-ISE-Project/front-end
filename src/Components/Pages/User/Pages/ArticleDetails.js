import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ArticleDetails() {
  const [fav, setFav] = useState(0);
  const location = useLocation();
  const ArticleDetails = location.state;
  console.log(ArticleDetails);
  return (
    <div className="flex flex-col items-center w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[72px] w-[100%] items-start">
        <div className="lg:w-[40vw] flex flex-col gap-8 items-center">
          <h2 className="font-semibold text-[2.5rem] text-Blue66">
            {ArticleDetails.title}
          </h2>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Author.svg" alt="author" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              Auteur : {ArticleDetails.authors.join(", ")}
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Date.svg" alt="data" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              {ArticleDetails.publication_date}
            </h3>
          </div>
          <div className="flex lg:hidden justify-between item-center w-[100%]">
            <button className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]">
              <img src="/PDF.svg" alt="pdf" />
              Download Article
            </button>
            {!fav ? (
              <button onClick={() => setFav(1)}>
                <img src="/Star.svg" alt="star" />
              </button>
            ) : (
              <button onClick={() => setFav(0)}>
                <img src="/StarF.svg" alt="starf" />
              </button>
            )}
          </div>
          <div className="flex flex-col gap-4 w-[100%]">
            <h3 className="text-[1.7rem] text-Typo font-extrabold">Abstract</h3>
            <h3 className="text-[1.5rem] text-Typo font-medium text-justify">
              {ArticleDetails.abstract}
            </h3>
          </div>
        </div>
        <div className="lg:w-[40vw] flex flex-col gap-48">
          <div className="hidden lg:flex justify-between item-center w-[100%]">
            <button className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]">
              <img src="/PDF.svg" alt="pdf" />
              Download Article
            </button>
            {!fav ? (
              <button onClick={() => setFav(1)}>
                <img src="/Star.svg" alt="star" />
              </button>
            ) : (
              <button onClick={() => setFav(0)}>
                <img src="/StarF.svg" alt="starf" />
              </button>
            )}
          </div>

          <div className="flex flex-col w-[100%] gap-12">
            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Keywords
              </h3>
              <div className="flex gap-4 flex-wrap">
                {ArticleDetails.keywords?.map((keyword) => (
                  <div className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]">
                    <p className="text-Blue100 text-[1.3rem]">{keyword}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Institutions
              </h3>
              <div className="flex gap-4 flex-wrap">
                {ArticleDetails.institutes?.map((institute) => (
                  <div className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]">
                    <p className="text-Rose100 text-[1.3rem]">{institute}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Références
              </h3>
              <div className="flex flex-col gap-4 flex-wrap">
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
                <div className="flex flex-col w-[100%]">
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    J. Benes et al.
                  </h3>
                  <h3 className="text-[1.5rem] text-Purple100 font-bold">
                    The future of oil: geology versus technology
                  </h3>
                  <h3 className="text-[1.5rem] text-Typo font-medium">
                    Int. J. Forecast. (2015)
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 w-[100%]">
        <h3 className="text-[1.7rem] text-Typo font-extrabold text-center">
          Content
        </h3>
        <h3 className="text-[1.1rem] text-Typo font-medium text-justify">
          {ArticleDetails.content}
        </h3>
      </div> */}
    </div>
  );
}

export default ArticleDetails;
