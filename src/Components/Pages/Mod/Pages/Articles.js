import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EndpointRoot } from "../../../../App";

function Articles() {
  const headers = [
    "ID",
    "Title",
    "Url",
    "Authors",
    "Institutions",
    "Publication Date"
  ];
  const tableIcon = ["Title", "Url", "Publication Date"];
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchTableData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${EndpointRoot}/articles/`,
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
      } catch (e) {
        setError(e);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTableData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col mt-[88px] md:mt-[200px] w-[84vw] m-auto gap-16 mb-[50vh]">
      <div className="flex justify-center lg:justify-between items-start">
        <h1 className="text-[1rem] md:text-[2rem] font-bold">Articles</h1>
      </div>
      {isLoading && (
        <div className="h-[70vh] w-full flex flex-col justify-center items-center gap-[10vh]">
          <h1 className="max-w-[82vw] font-bold text-BlueDark text-[2.5rem] text-center text-Blue66">
            Loading....
          </h1>
          <img
            alt="wait"
            className="animate-spin-slow"
            src="/settings.png"
          ></img>{" "}
        </div>
      )}
      {!isLoading && (
      <div className="overflow-auto lg:overflow-visible">
        <table className=" w-[84vw] mx-auto text-left">
          <thead className="bg-Blue66 text-white">
            <tr>
              {headers.map((header, i) => (
                <th
                key={i}
                className={`${
                  i === 0
                  ? "rounded-l-[16px]"
                  : i === headers.length - 1
                  ? "rounded-r-[16px]"
                  : ""
                } p-2 lg:p-4 text-[.8rem] lg:text-[1rem] `}
                >
                  <div className="flex items-center gap-2">
                    {header}
                    {tableIcon.indexOf(header) !== -1}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-Typo p-4">
            {tableData.map((data, i) => (
              <tr
              key={i}
              className="border-b-2 p-4 border-solid border-Typo border-opacity-20 hover:bg-[#BED7FB] hover:cursor-pointer font-semibold max-h-[100px]"
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
                <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">{data.id}</td>
                <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">{data.title}</td>
                <td
                  className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px] hover:text-Blue66 hover:cursor-pointer underline"
                  onClick={() => {
                    window.open(data.url, "_blank");
                  }}
                  >
                  Article:{data.id}
                </td>
                <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                  {data.authors}
                </td>
                <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                  {data.institutes}
                </td>
                <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                  {data.publication_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export default Articles;
