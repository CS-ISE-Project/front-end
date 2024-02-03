import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Articles() {
  const headers = [
    "ID",
    "Title",
    "Url",
    "Authors",
    "Institutions",
    "Publication Date",
    "",
  ];
  const tableIcon = ["Title", "Url", "Publication Date",];
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [error, setError] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDivVisibility = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  }
  
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
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTableData();
  }, []);

  const handleDelete= async (articleID) => {

    const deleteArticle = async ()=>{
        const response = await fetch(`https://ise-project-api-production.up.railway.app/articles/${articleID}`,{
            method:"DELETE",
            headers : {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json"  
            }
        })
        const data = await response.json()
    } 

    const refreshTableData = async () => {
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
      } catch (e) {
        setError(e);
    };
  }

    await deleteArticle()
    await refreshTableData()

  }


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
                <td className='relative'>
                            <div className='flex justify-center items-center  py-3 cursor-pointer'>
                            <button className='flex gap-1 py-3 px-2 ' onClick={() => toggleDivVisibility(i)}>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                            </button>
                            {selectedRowIndex === i && (
                            <div onClick={() => handleDelete(data.id)} className={` absolute top-[60%] left-[60%] bg-white flex justify-center items-center py-2 w-[100px] drop-shadow-special rounded-md `}>
                                  <button >Delete</button>
                            </div>
                        )} 
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Articles;
