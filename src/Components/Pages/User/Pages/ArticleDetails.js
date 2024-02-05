import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ArticleDetails() {
  const location = useLocation();
  const ArticleDetails = location.state;
  console.log(ArticleDetails.url);

  function isIdInObject(obj, targetId) {
    return Object.values(obj).some((item) => item.id === targetId);
  }

  const [fav, setFav] = useState(0);

  const handleProfileUser = async () => {
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/users/${localStorage.getItem(
          "userid"
        )}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = await response.json();
      return isIdInObject(user.favorites, ArticleDetails.id);
    } catch (e) {
      console.error("Failed getting user:", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await handleProfileUser();
      setFav(result ? 1 : 0);
    };
    fetchData();
  }, []);

  const handleAddFavorite = async () => {
    setFav(1);
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/favorites/${ArticleDetails.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        alert("Added to favorite!");
      }
    } catch (e) {
      console.error("Standard Search Failed :", e);
    }
  };

  const handleRedirectArticle = () => {
    window.open(ArticleDetails.url, "_blank");
  };
  const handleRemoveFavorite = async () => {
    setFav(0);
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/favorites/${ArticleDetails.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.json();
      if (data) {
        alert("Remove from favorite!");
      }
    } catch (e) {
      console.error("Standard Search Failed :", e);
    }
  };

  return (
    <div className="flex flex-col items-center w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[72px] w-[100%] items-start">
        <div className="lg:w-[40vw] flex flex-col gap-8 items-start">
          <h2 className="font-semibold text-[2.5rem] text-Blue66">
            {ArticleDetails.title}
          </h2>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Author.svg" alt="author" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              Author : {ArticleDetails.authors.join(", ")}
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Date.svg" alt="data" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              {ArticleDetails.publication_date}
            </h3>
          </div>
          <div className="flex lg:hidden justify-between item-center w-[100%]">
            <button
              className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleRedirectArticle}
            >
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
            <button
              className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleRedirectArticle}
            >
              <img src="/PDF.svg" alt="pdf" />
              Download Article
            </button>
            {!fav ? (
              <button onClick={handleAddFavorite}>
                <img src="/Star.svg" alt="star" />
              </button>
            ) : (
              <button onClick={handleRemoveFavorite}>
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
                  <div
                    key={keyword}
                    className="bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]"
                  >
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
                  <div
                    key={institute}
                    className="bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]"
                  >
                    <p className="text-Rose100 text-[1.3rem]">{institute}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                References
              </h3>
              <div className="flex flex-col gap-4 flex-wrap">
                <div className="flex flex-col w-[100%] max-h-[40vh] overflow-y-scroll">
                  {ArticleDetails.references.map((reference) => (
                    <h3 className="text-[1rem] text-Purple100 font-bold">
                      {reference}
                    </h3>
                  ))}
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
