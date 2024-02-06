import React, { useEffect, useState } from "react";
import { FaEdit, FaLink } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { EndpointRoot } from "../../../../App";

export default function EditArticle() {
  const location = useLocation();
  const ArticleDetails = location.state;
  const navigate = useNavigate();
  const [modify, setModify] = useState(false);

  const handleDeleteArticle = async () => {
    try {
      const response = await fetch(
        `${EndpointRoot}/articles/${ArticleDetails[0]}`,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        alert("Article Deleted Succesfully!");
        navigate("/mod");
      }
    } catch (e) {
      console.error("Failed getting article:", e);
    }
  };

  const handleUpdateArticle = async () => {
    try {
      const response = await fetch(
        `${EndpointRoot}/articles/${ArticleDetails[0]}`,

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
      if (data) {
        alert("Article Updated Succesfully!");
        navigate("/mod");
      }
    } catch (e) {
      console.error("Failed getting article:", e);
    }
    setModify(false);
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

  let refre = "";

  if (formData.references !== undefined && formData.references !== null) {
    formData.references.map((r) => {
      refre += `${r} \n`;
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const arr = ["institutes", "references", "keywords"];
    if (arr.indexOf(name) !== -1) {
      setFormData((formData) => {
        return {
          ...formData,
          [name]: [value],
        };
      });
    } else {
      setFormData((formData) => {
        return {
          ...formData,
          [name]: value,
        };
      });
    }
  }

  return (
    <div className="flex flex-col items-center w-[84vw] lg:gap-[72px] md:my-[200px] my-[160px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[72px] w-[100%] items-start">
        <div className="lg:w-[40vw] w-[84vw] flex flex-col gap-8 items-center">
          {!modify ? (
            <input
              className="font-semibold text-Blue66 w-[100%] truncate text-[1.5rem] lg:text-[2.5rem]"
              value={formData.title}
              name="title"
              onChange={handleChange}
              readOnly
            />
          ) : (
            <input
              className="font-semibold text-Blue66 w-[100%] truncate text-[1.5rem] lg:text-[2.5rem]"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          )}

          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Author.svg" alt="author" />
            <h3 className="text-[1rem] lg:text-[1.5rem] text-Typo font-semibold">
              Author :{" "}
              {!modify ? (
                <input
                  value={formData.authors}
                  onChange={handleChange}
                  name="authors"
                  className="truncate"
                  readOnly
                />
              ) : (
                <input
                  value={formData.authors}
                  onChange={handleChange}
                  name="authors"
                  className="truncate"
                />
              )}
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <FaLink />
            <h3 className="text-[1rem] lg:text-[1.5rem] text-Typo font-semibold">
              URL :{" "}
              {!modify ? (
                <input
                  value={formData.url}
                  onChange={handleChange}
                  name="url"
                  className="truncate"
                  readOnly
                />
              ) : (
                <input
                  value={formData.url}
                  onChange={handleChange}
                  name="url"
                  className="truncate"
                />
              )}
            </h3>
          </div>
          <div className="flex items-center gap-4 w-[100%]">
            <img src="/Date.svg" alt="data" />
            <h3 className="text-[1rem] lg:text-[1.5rem] text-Typo font-semibold">
              {!modify ? (
                <input
                  value={formData.publication_date}
                  onChange={handleChange}
                  name="publication_date"
                  className="truncate"
                  readOnly
                />
              ) : (
                <input
                  value={formData.publication_date}
                  onChange={handleChange}
                  name="publication_date"
                  className="truncate"
                />
              )}
            </h3>
          </div>

          <div className="flex lg:hidden justify-end items-end w-[100%] gap-8">
            {!modify ? (
              <button
                className="bg-Spbtn text-white flex gap-2 md:gap-6 items-center py-2 px-7 md:py-3 md:px-10 lg:py-6 lg:px-16  rounded-[8px] font-semibold text-[.9rem] md:text-[1.2rem]"
                onClick={() => setModify(true)}
              >
                <FaEdit />
                Edit Article
              </button>
            ) : (
              <button
                className="bg-Spbtn text-white flex gap-2 md:gap-6 items-center py-2 px-7 md:py-3 md:px-10 lg:py-6 lg:px-16  rounded-[8px] font-semibold text-[.9rem] md:text-[1.2rem]"
                onClick={handleUpdateArticle}
              >
                <FaEdit />
                Confirm Edit
              </button>
            )}
            <button
              className="bg-Rose100 text-white flex gap-2 md:gap-6 items-center py-2 px-7 md:py-3 md:px-10 lg:py-6 lg:px-16  rounded-[8px] font-semibold text-[.9rem] md:text-[1.2rem]"
              onClick={handleDeleteArticle}
            >
              <FaDeleteLeft />
              Delete Article
            </button>
          </div>
          <div className="flex flex-col gap-4 w-[100%]">
            <h3 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.7rem] text-Typo font-extrabold">
              Abstract
            </h3>
            <h3 className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-Typo font-medium text-justify">
              {!modify ? (
                <textarea
                  value={formData.abstract}
                  onChange={handleChange}
                  name="abstract"
                  className="w-[100%] min-h-[100px] md:min-h-[400px] p-4 max-h-[550px]"
                  readOnly
                />
              ) : (
                <textarea
                  value={formData.abstract}
                  onChange={handleChange}
                  name="abstract"
                  className="w-[100%] min-h-[100px] md:min-h-[400px] p-4 max-h-[550px]"
                />
              )}
            </h3>
          </div>
        </div>
        <div className="w-[84vw] lg:w-[40vw] flex flex-col gap-48">
          <div className="hidden lg:flex justify-end items-center w-[100%] gap-8">
            {!modify ? (
              <button
                className="bg-Spbtn text-white flex gap-2 md:gap-6 items-center py-2 px-7 md:py-3 md:px-10 lg:py-6 lg:px-16  rounded-[8px] font-semibold text-[.9rem] md:text-[1.2rem]"
                onClick={() => setModify(true)}
              >
                <FaEdit />
                Edit Article
              </button>
            ) : (
              <button
                className="bg-Spbtn text-white flex gap-2 md:gap-6 items-center py-2 px-7 md:py-3 md:px-10 lg:py-6 lg:px-16  rounded-[8px] font-semibold text-[.9rem] md:text-[1.2rem]"
                onClick={handleUpdateArticle}
              >
                <FaEdit />
                Confirm Edit
              </button>
            )}
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
              <h3 className="text-[1rem] md:text-[1.3rem] lg:text-[1.7rem] text-Typo font-extrabold">
                Keywords
              </h3>
              <div className="flex gap-4 flex-wrap">
                {!modify ? (
                  <input
                    value={formData.keywords}
                    onChange={handleChange}
                    name="keywords"
                    className="truncate overflow-x-scroll w-[100%] bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]"
                    readOnly
                  />
                ) : (
                  <input
                    value={formData.keywords}
                    onChange={handleChange}
                    name="keywords"
                    className="truncate overflow-x-scroll w-[100%] bg-[#E6EEFC] px-8 py-4 flex items-center justify-center rounded-[4px]"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1rem] md:text-[1.3rem] lg:text-[1.7rem] text-Typo font-extrabold">
                Institutions
              </h3>
              <div className="flex gap-4 flex-wrap">
                {!modify ? (
                  <input
                    value={formData.institutes}
                    onChange={handleChange}
                    name="institutes"
                    className="truncate overflow-x-scroll  w-[100%] bg-[#FEF5F7] px-6 py-4 md:px-8 md:py-4 flex items-center justify-center rounded-[4px]"
                    readOnly
                  />
                ) : (
                  <input
                    value={formData.institutes}
                    onChange={handleChange}
                    name="institutes"
                    className="truncate overflow-x-scroll  w-[100%] bg-[#FEF5F7] px-6 py-4 md:px-8 md:py-4 flex items-center justify-center rounded-[4px]"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[100%]">
              <h3 className="text-[1rem] md:text-[1.3rem] lg:text-[1.7rem] text-Typo font-extrabold">
                References
              </h3>
              <div className="flex gap-4 flex-wrap">
                {!modify ? (
                  <textarea
                    value={refre}
                    onChange={handleChange}
                    name="references"
                    className="text-wrap bg-Purple33 px-8 py-4 md:px-8 md:py-4 flex items-center justify-center rounded-[4px] w-[100%] h-[200px]"
                    readOnly
                  />
                ) : (
                  <textarea
                    value={refre}
                    onChange={handleChange}
                    name="references"
                    className="text-wrap bg-Purple33 px-8 py-4 md:px-8 md:py-4 flex items-center justify-center rounded-[4px] w-[100%] h-[200px]"
                  />
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
