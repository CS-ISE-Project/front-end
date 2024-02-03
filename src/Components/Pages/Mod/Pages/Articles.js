import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Articles() {
  const headers = [
    "ID",
    "Titre",
    "Url",
    "authors",
    "Institutions",
    "Publication Date",
    "",
  ];
  const tableIcon = ["Titre", "Url", "Publication Date"];
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const fetchTableData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://ise-project-api-production.up.railway.app/articles/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setTableData(data);
        console.log(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTableData();
  }, [page]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col mt-[88px] md:mt-[200px] w-[84vw] m-auto gap-16">
      <div className="flex justify-between items-start">
        <h1 className="text-[1rem] md:text-[2rem] font-bold">Articles</h1>
      </div>
      {isLoading && (
        <div className="mx-auto w-full text-center">Loading....</div>
      )}
      {!isLoading && (
        <table className=" w-[84vw] mx-auto text-left">
          <thead className="bg-Blue66 text-white">
            <tr className="">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={`${
                    i === 0
                      ? "rounded-tl-lg"
                      : i === headers.length - 1
                      ? "rounded-tr-lg "
                      : ""
                  } p-4`}
                >
                  <div className="flex items-center gap-2">
                    {header}
                    {tableIcon.indexOf(header) !== -1}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-Typo">
            {tableData.map((data, i) => (
              <tr
                key={i}
                className="border-b-2 border-solid border-Typo border-opacity-20 hover:bg-[#E2E2FA] hover:cursor-pointer"
                onClick={() => {
                  navigate("/mod/EditArticle", {
                    state: [
                      data.id,
                      data.title,
                      data.url,
                      data.authors,
                      data.institutes,
                      data.keywords,
                      data.publication_date,
                      data.abstract,
                      data.content,
                      data.references,
                    ],
                  });
                }}
              >
                <td className="p-4">{data.id}</td>
                <td className="p-4">{data.title}</td>
                <td className="p-4">{data.url}</td>
                <td className="p-4">{data.authors}</td>
                <td className="p-4">{data.institutes}</td>
                <td className="p-4">{data.publication_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Articles;
