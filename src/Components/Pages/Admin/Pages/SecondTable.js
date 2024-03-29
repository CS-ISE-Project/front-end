import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { EndpointRoot } from "../../../../App";

function SecondTable() {
  const headers = [
    "ID",
    "Title",
    "Url",
    "authors",
    "Institutions",
    "Publication Date",
  ];

  const tableIcon = ["Title", "Url", "Publication Date"];
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [extracting, setExtracting] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [vide, setVide] = useState(0);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const fetchTableData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${EndpointRoot}/articles/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          setTableData(data);
        }
        if (response.status === 404) {
          setVide(1);
        }
      } catch (e) {
        setError(e);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTableData();
  }, []);

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [url, setUrl] = useState("");
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleUpload = async () => {
    toggleDropdown();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(`${EndpointRoot}/upload/local`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await response.json();
      const key = data.file_key;
      alert("File uploaded successfully");
      console.log(key);
      setExtracting(1);
      try {
        const response = await fetch(
          `${EndpointRoot}/articles/uploaded?article_key=${key}
          `,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );

        const article = await response.json();
        if (article || response.status === 200) {
          setExtracting(0);
          window.location.reload(false);
        }
      } catch (error) {
        console.error("Error Storing file:", error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleUploadfromDrive = async () => {
    toggleDropdown();
    try {
      const response = await fetch(
        `${EndpointRoot}/upload/gdrive?link=${url}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      const key = data.file_key;
      alert("File uploaded successfully");
      setExtracting(1);
      try {
        const response = await fetch(
          `${EndpointRoot}/articles/uploaded?article_key=${key}
          `,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );
        const article = await response.json();
        if (article || response.status === 200) {
          setExtracting(0);
          window.location.reload(false);
        }
      } catch (error) {
        console.error("Error Storing file:", error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col mt-[88px] md:mt-[200px] w-[84vw] m-auto gap-16 mb-[50vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start gap-[12px] lg:gap-0">
        <h1 className="text-[1rem] lg:text-[2rem] font-bold">Articles</h1>
        <div className="flex flex-col items-center lg:items-end">
          <div className={`flex gap-[16px]  items-start`}>
            <div className="font-bold p-2 text-[12px] lg:text-[16px] lg:py-4 lg:px-4 text-white bg-Spbtn rounded flex gap-2 items-center ">
              Upload Article
              <FaChevronDown
                className={`text-white transition-transform duration-300 hover:cursor-pointer  ${
                  isDropdownOpen ? "rotate-180 " : ""
                }`}
                onClick={toggleDropdown}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col mt-4 bg-white items-center drop-shadow-special px-[4vh]">
              <div
                className="flex flex-row items-center hover:cursor-pointer border-t border-[#E6E6E6]" /*onClick={handleLogoutClick}*/
              >
                <div className="py-4 text-[12px] lg:text-[16px]">
                  <input type="file" onChange={handleFileChange} />
                </div>
                <p
                  className="bg-Spbtn py-2 px-4 text-white text-[12px] lg:text-[16px]"
                  onClick={handleUpload}
                >
                  Upload from your PC
                </p>
              </div>

              <div
                className="flex flex-row items-center hover:cursor-pointer border-t border-[#E6E6E6] gap-24" /*onClick={handleLogoutClick}*/
              >
                <div className="py-4 text-[12px] lg:text-[16px] ">
                  <input
                    className="py-2 px-4 text-[12px] lg:text-[16px]"
                    placeholder="Google Drive link"
                    required={true}
                    value={url}
                    onChange={handleUrlChange}
                  />
                </div>
                <p
                  className="bg-Spbtn py-2 px-4 text-[12px] lg:text-[16px] text-white"
                  onClick={handleUploadfromDrive}
                >
                  Upload from Google Drive
                </p>
              </div>
            </div>
          )}
        </div>
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
          {extracting ? (
            <div className="h-[70vh] w-full flex flex-col justify-center items-center gap-[10vh]">
              <h1 className="max-w-[82vw] font-bold text-BlueDark text-[2.5rem] text-center text-Blue66">
                Extracting....
              </h1>
              <img
                alt="wait"
                className="animate-spin-slow"
                src="/settings.png"
              ></img>{" "}
            </div>
          ) : vide ? (
            <div className="h-[20vh] w-full flex flex-col justify-center items-center gap-[10vh] mx-auto">
              <h1 className="max-w-[82vw] font-bold text-BlueDark text-[2.5rem] text-center text-Blue66">
                No Article found....
              </h1>
            </div>
          ) : (
            <table className=" w-full mx-auto text-left">
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
              <tbody className="text-Typo">
                {tableData.map((data, i) => (
                  <tr
                    key={i}
                    className="border-b-2 border-solid border-Typo border-opacity-20 font-semibold max-h-[100px]"
                  >
                    <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                      {data.id}
                    </td>
                    <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                      {data.title}
                    </td>
                    <td
                      className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px] hover:text-Blue66 hover:cursor-pointer underline"
                      onClick={() => {
                        window.open(`${EndpointRoot}/${data.url}`, "_blank");
                      }}
                    >
                      Article:{data.id}
                    </td>
                    <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                      {data.authors.join(" | ")}
                    </td>
                    <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                      {data.institutes.join(" | ")}
                    </td>
                    <td className="p-2 lg:p-4 text-[.8rem] lg:text-[1rem] max-w-[20%] max-h-[70px] lg:max-h-[100px]">
                      {data.publication_date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default SecondTable;
