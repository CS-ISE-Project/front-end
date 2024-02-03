import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { endpointUrl } from "../../../../App";

export default function EditArticle() {
  const location = useLocation();
  const ArticleDetails = location.state;
  const navigate = useNavigate();

  const handleDeleteArticle = async () => {
    try {
      const response = await fetch(
        `${endpointUrl}/articles/${ArticleDetails[0]}`,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      alert("Article Deleted Succesfully!");
      navigate("/mod");
    } catch (e) {
      console.error("Failed getting article:", e);
    }
  };

  const handleUpdateArticle = async () => {
    try {
      const response = await fetch(
        `${endpointUrl}/articles/${ArticleDetails[0]}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      alert("Article Updated Succesfully!");
      navigate("/mod");
    } catch (e) {
      console.error("Failed getting article:", e);
    }
  };

  const [formData, setFormData] = useState({
    url: ArticleDetails[2],
    publication_date: ArticleDetails[6],
    title: ArticleDetails[1],
    authors: ArticleDetails[3],
    institutes: ArticleDetails[4],
    keywords: ArticleDetails[5],
    abstract: ArticleDetails[7],
    content: ArticleDetails[8],
    references: ArticleDetails[9],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex flex-col items-center w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[72px] w-[100%] items-start">
        <div className="lg:w-[40vw] flex flex-col gap-8 items-center">
          <input
            className="font-semibold text-[2.5rem] text-Blue66 w-[100%] truncate"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Author.svg" alt="author" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              Auteur :{" "}
              <input
                value={formData.authors}
                onChange={handleChange}
                name="authors"
                className="truncate"
              />
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Date.svg" alt="data" />
            <h3 className="text-[1.5rem] text-Typo font-semibold">
              <input
                value={formData.publication_date}
                onChange={handleChange}
                name="publication_date"
                className="truncate"
              />
            </h3>
          </div>
          <div className="flex lg:hidden justify-end items-end w-[100%] gap-8">
            <button
              className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleUpdateArticle}
            >
              <FaEdit />
              Edit Article
            </button>
            <button
              className="bg-Rose100 text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleDeleteArticle}
            >
              <FaDeleteLeft />
              Delete Article
            </button>
          </div>
          <div className="flex flex-col gap-4 w-[100%]">
            <h3 className="text-[1.7rem] text-Typo font-extrabold">Abstract</h3>
            <h3 className="text-[1.5rem] text-Typo font-medium text-justify">
              <textarea
                value={formData.abstract}
                onChange={handleChange}
                name="abstract"
                className="w-[100%] h-96"
              />
            </h3>
          </div>
        </div>
        <div className="lg:w-[40vw] flex flex-col gap-48">
          <div className="hidden lg:flex justify-end items-center w-[100%] gap-8">
            <button
              className="bg-Spbtn text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleUpdateArticle}
            >
              <FaEdit />
              Edit Article
            </button>
            <button
              className="bg-Rose100 text-white flex gap-6 items-center py-6 px-16  rounded-[8px] font-semibold text-[1.2rem]"
              onClick={handleDeleteArticle}
            >
              <FaDeleteLeft />
              Delete Article
            </button>
          </div>

          <div className="flex flex-col w-[100%] gap-12">
            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Keywords
              </h3>
              <div className="flex gap-4 flex-wrap">
                <input
                  value={formData.keywords}
                  onChange={handleChange}
                  name="keywords"
                  className="truncate bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1.7rem] text-Typo font-extrabold">
                Institutions
              </h3>
              <div className="flex gap-4 flex-wrap">
                <input
                  value={formData.institutes}
                  onChange={handleChange}
                  name="institutes"
                  className="truncate bg-[#FEF5F7] px-8 py-4 flex items-center justify-center rounded-[4px]"
                />
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
