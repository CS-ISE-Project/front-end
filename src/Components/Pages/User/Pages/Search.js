import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  const [queryStandard, setQueryStandard] = useState("");
  const [title, setTitle] = useState(false);
  const [keywords, setKeywords] = useState(false);
  const [authors, setAuthors] = useState(false);
  const [content, setContent] = useState(false);
  const [institut, setInstitut] = useState(false);

  const [queryTitleAdvanced, setQueryTitleAdvanced] = useState("");
  const [queryKeywordsAdvanced, setQueryKeywordsAdvanced] = useState("");
  const [queryAuthorsAdvanced, setQueryAuthorsAdvanced] = useState("");
  const [queryContentAdvanced, setQueryContentAdvanced] = useState("");
  const [queryInstitutsAdvanced, setQueryInstitutsAdvanced] = useState("");

  const handleStandardQueryChange = (event) => {
    setQueryStandard(event.target.value);
  };

  const handleQueryTitleAdvancedChange = (event) => {
    setQueryTitleAdvanced(event.target.value);
  };

  const handleQueryKeywordsAdvancedChange = (event) => {
    setQueryKeywordsAdvanced(event.target.value);
  };

  const handleQueryAuthorsAdvancedChange = (event) => {
    setQueryAuthorsAdvanced(event.target.value);
  };

  const handleQueryContentAdvancedChange = (event) => {
    setQueryContentAdvanced(event.target.value);
  };

  const handleQueryInstitutsAdvancedChange = (event) => {
    setQueryInstitutsAdvanced(event.target.value);
  };

  const formData = {
    restricted: false,
    title: queryTitleAdvanced,
    keywords: queryKeywordsAdvanced,
    content: queryContentAdvanced,
    authors: queryAuthorsAdvanced,
    institutes: queryInstitutsAdvanced,
  };

  async function handleAdvancedSearch() {
    try {
      const response = await fetch(
        "https://ise-project-api-production.up.railway.app/search/advanced",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = response.json();
      data.then((articles) => {
        console.log(articles);
        navigate("/user/results", { state: [articles, formData] });
      });
    } catch (e) {
      console.error("Standard Search Failed :", e);
    }
  }

  async function handleStandardSearch() {
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/search/simple?query=${queryStandard}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.json();

      data.then((articles) => {
        navigate("/user/results", { state: [articles, queryStandard] });
      });
    } catch (e) {
      console.error("Standard Search Failed :", e);
    }
  }

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
            setTitle(false);
            setContent(false);
            setInstitut(false);
            setKeywords(false);
            setAuthors(false);
          }}
        >
          <p
            className={`${
              !option
                ? "lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] font-semibold text-white transition ease-in delay-100"
                : "lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] font-semibold text-Blue66 transition ease-in delay-100"
            }`}
          >
            Standard search
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
            Advanced search 🚀✨
          </p>
        </div>
      </div>
      <img
        className="lg:w-[12vw] md:w-[24vw] w-[30vw]"
        src="Search.png"
        alt="Search"
      />

      {option ? (
        <div className="w-[84vw]  bg-white md:mb-[200px] flex flex-col gap-4 justify-center items-center mb-[100px] lg:mb-[160px]">
          <div className="w-[100%] bg-white px-2 lg:h-[120px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100 gap-[2rem]">
            <div className="flex flex-col gap-[1rem] lg:gap-0 lg:flex-row w-[100%] mb-[20px] lg:mb-0 lg:h-[100px] items-center justify-between">
              <div
                className="h-[100px] w-[80vw] lf:w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer"
                onClick={() => {
                  setTitle(!title);
                  setContent(false);
                  setInstitut(false);
                  setKeywords(false);
                  setAuthors(false);
                }}
              >
                <div className="flex flex-col justify-center items-center gap-[8px]">
                  <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                    Title
                  </h3>
                  {queryTitleAdvanced ? (
                    <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem] text-ellipsis overflow-hidden max-w-[8vw]">
                      {queryTitleAdvanced}
                    </p>
                  ) : (
                    <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                      Search using Title
                    </p>
                  )}
                </div>
              </div>
              <div className="hidden lg:block h-[40px] w-[1px] bg-[#DDDDDD]"></div>
              <div
                className="h-[100px] w-[80vw] lf:w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer"
                onClick={() => {
                  setKeywords(!keywords);
                  setContent(false);
                  setInstitut(false);
                  setTitle(false);
                  setAuthors(false);
                }}
              >
                <div className="flex flex-col justify-center items-center gap-[8px]">
                  <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                    Keywords
                  </h3>
                  {queryKeywordsAdvanced ? (
                    <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem] text-ellipsis overflow-hidden max-w-[8vw]">
                      {queryKeywordsAdvanced}
                    </p>
                  ) : (
                    <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                      Search using keywords
                    </p>
                  )}
                </div>
              </div>
              <div className="hidden lg:block h-[40px] w-[1px] bg-[#DDDDDD]"></div>
              <div
                className="h-[100px] w-[80vw] lf:w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer"
                onClick={() => {
                  setAuthors(!authors);
                  setContent(false);
                  setInstitut(false);
                  setKeywords(false);
                  setTitle(false);
                }}
              >
                <div className="flex flex-col justify-center items-center gap-[8px]">
                  <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                    Authors
                  </h3>
                  {queryAuthorsAdvanced ? (
                    <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem] text-ellipsis overflow-hidden max-w-[8vw]">
                      {queryAuthorsAdvanced}
                    </p>
                  ) : (
                    <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                      Search using authors
                    </p>
                  )}
                </div>
              </div>
              <div className="hidden lg:block h-[40px] w-[1px] bg-[#DDDDDD]"></div>
              <div
                className="h-[100px] w-[80vw] lf:w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer"
                onClick={() => {
                  setContent(!content);
                  setTitle(false);
                  setInstitut(false);
                  setKeywords(false);
                  setAuthors(false);
                }}
              >
                <div className="flex flex-col justify-center items-center gap-[8px] ">
                  <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                    Content
                  </h3>
                  {queryContentAdvanced ? (
                    <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem] text-ellipsis overflow-hidden max-w-[8vw]">
                      {queryContentAdvanced}
                    </p>
                  ) : (
                    <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                      Search using content
                    </p>
                  )}
                </div>
              </div>
              <div className="hidden lg:block h-[40px] w-[1px] bg-[#DDDDDD]"></div>
              <div
                className="h-[100px] w-[80vw] lf:w-[13vw] flex justify-center items-center hover:bg-[#FAFAFA] rounded-[8px] transition cursor-pointer"
                onClick={() => {
                  setInstitut(!institut);
                  setContent(false);
                  setTitle(false);
                  setKeywords(false);
                  setAuthors(false);
                }}
              >
                <div className="flex flex-col justify-center items-center gap-[8px] ">
                  <h3 className="font-black lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-Typo">
                    Institut
                  </h3>
                  {queryInstitutsAdvanced ? (
                    <p className="text-Blue66 font-bold lg:text-[1rem] text-[0.8rem] text-ellipsis overflow-hidden max-w-[8vw]">
                      {queryInstitutsAdvanced}
                    </p>
                  ) : (
                    <p className="text-[#8B8B8B] lg:text-[1rem] text-[0.8rem]">
                      Search using institut
                    </p>
                  )}
                </div>
              </div>
              <button
                className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-l-[120px] lg:rounded-r-[8px] rounded-r-[120px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                onClick={handleAdvancedSearch}
              >
                <img src="/search_icon.svg" alt="search" />
                <p className="text-[1.5rem] text-white font-bold">
                  Search
                </p>{" "}
              </button>
            </div>
          </div>

          {title && (
            <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
              <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
                <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%] ">
                  <input
                    className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                    placeholder="Search : Title"
                    required={true}
                    value={queryTitleAdvanced}
                    onChange={handleQueryTitleAdvancedChange}
                  />
                </div>
                <button
                  className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                  onClick={() => {
                    setTitle(false);
                  }}
                >
                  <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                    +
                  </p>
                </button>
              </div>
            </div>
          )}

          {keywords && (
            <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
              <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
                <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
                  <input
                    className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                    placeholder="Search : keywords"
                    required={true}
                    value={queryKeywordsAdvanced}
                    onChange={handleQueryKeywordsAdvancedChange}
                  />
                </div>
                <button
                  className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                  onClick={() => {
                    setKeywords(false);
                  }}
                >
                  <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                    +
                  </p>
                </button>
              </div>
            </div>
          )}

          {authors && (
            <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
              <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
                <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
                  <input
                    className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                    placeholder="Search : Author"
                    required={true}
                    value={queryAuthorsAdvanced}
                    onChange={handleQueryAuthorsAdvancedChange}
                  />
                </div>
                <button
                  className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                  onClick={() => {
                    setAuthors(false);
                  }}
                >
                  <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                    +
                  </p>
                </button>
              </div>
            </div>
          )}

          {content && (
            <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
              <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
                <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
                  <input
                    className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                    placeholder="Search : Content"
                    required={true}
                    value={queryContentAdvanced}
                    onChange={handleQueryContentAdvancedChange}
                  />
                </div>
                <button
                  className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                  onClick={() => {
                    setContent(false);
                  }}
                >
                  <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                    +
                  </p>
                </button>
              </div>
            </div>
          )}

          {institut && (
            <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
              <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
                <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
                  <input
                    className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                    placeholder="Search : Instituts"
                    required={true}
                    value={queryInstitutsAdvanced}
                    onChange={handleQueryInstitutsAdvancedChange}
                  />
                </div>
                <button
                  className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
                  onClick={() => {
                    setInstitut(false);
                  }}
                >
                  <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                    +
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="lg:w-[60vw] w-[84vw] bg-white lg:h-[120px] md:h-[104px] h-[88px] drop-shadow-special rounded-[8px] flex items-center justify-center z-100">
          <div className="w-[97%] lg:h-[100px] md:h-[88px] h-[72px] flex items-center justify-between">
            <div className="lg:h-[100px] md:h-[88px] h-[72px] flex justify-center items-center w-[100%]">
              <input
                className="text-Typo font-bold placeholder:text-[#8B8B8B] placeholder:font-light lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] h-[100%] w-[100%] outline-none pl-8 placeholder:lg:text-[1.3rem] placeholder:md:text-[1.1rem] placeholder:text-[0.9rem]"
                placeholder="Search : Title, Author, Content...."
                required={true}
                value={queryStandard}
                onChange={handleStandardQueryChange}
              />
            </div>
            <button
              className="bg-Blue66 lg:h-[90px] md:h-[80px] h-[64px] px-8 rounded-l-[120px] rounded-r-[8px] flex items-center justify-center gap-[1vw] hover:bg-Blue100 transition"
              onClick={handleStandardSearch}
            >
              <img src="/search_icon.svg" alt="search" />
              <p className="lg:text-[1.5rem] md:text-[1.3rem] text-[1.1rem] text-white font-bold">
                Search
              </p>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
