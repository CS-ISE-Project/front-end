import React, { useState, useEffect } from "react";

function Table() {
  const headers = ["ID", "Last Name", "First Name", "Email", "Status", ""];

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const toggleDivVisibility = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  };

  const [modData, setModData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchTableData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://ise-project-api-production.up.railway.app/moderators/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setModData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTableData();
  }, []);

  if (error) {
    return <div> Something went wrong ! please try again</div>;
  }

  const tableIcon = ["Nom", "Prenom", "Status"];

  const handleAction = async (isactive, modID) => {
    const activateMod = async () => {
      const form = {
        id: modID,
        is_active: isactive,
      };
      try {
        const response = await fetch(
          `https://ise-project-api-production.up.railway.app/moderation/activation`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        const data = await response.json();
        setSelectedRowIndex(null);
      } catch (e) {
        setError(e);
      }
    };

    const refreshData = async () => {
      try {
        const response = await fetch(
          `https://ise-project-api-production.up.railway.app/moderators/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setModData(data);
      } catch (e) {
        setError(e);
      }
    };

    await activateMod();
    await refreshData();
  };

  return (
    <div className="flex flex-col mt-[88px] md:mt-[200px] w-[84vw] p-4 lg:p-0 m-auto gap-16 mb-[50vh]">
      <div className="flex lg:justify-between items-start justify-center">
        <h1 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold">Moderators</h1>
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

        <table className="w-[84vw] mx-auto text-left">
          <thead className="bg-Blue66 text-white">
            <tr className="">
              {headers.map((header, i) => (
                <th
                key={i}
                className={`${
                  i === 0
                  ? "rounded-l-[20px]"
                  : i === headers.length - 1
                  ? "rounded-r-[20px]"
                  : ""
                } px-3 py-4 md:p-5 text-[12px] md-[16px] lg:text-[20px]`}
                >
                  <div className="flex items-center gap-2">{header}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-Typo">
            {modData?.map((data, i) => (
              <tr
              key={i}
              className="border-b-2 border-solid border-Typo border-opacity-20 font-semibold"
              >
                <td className="p-3 md:px-4 md:py-3 text-[14px] md:text-[16px] lg:text-[20px]">{data.id}</td>
                <td className="p-3 md:px-4 md:py-3 text-[14px] md:text-[16px] lg:text-[20px]">{data.first_name}</td>
                <td className="p-3 md:px-4 md:py-3 text-[14px] md:text-[16px] lg:text-[20px]">{data.last_name}</td>
                <td className="p-3 md:px-4 md:py-3 text-[14px] md:text-[16px] lg:text-[20px]">{data.email}</td>
                <td className="text-center p-2 lg:px-4 lg:py-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  {data.is_active === true ? (
                    <div className="flex items-center gap-2 p-2 md:px-4 md:py-3 text-[14px] md:text-[16px] lg:text-[20px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-Spbtn self-center justify-center"></div>
                      <p className="">Active</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-2 md:px-4 md:py-3 text-[12px] md:text-[16px] lg:text-[20px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#D4382B] self-center justify-center"></div>
                      <p className="">Blocked</p>
                    </div>
                  )}
                </td>
                <td className="relative">
                  <div className="flex justify-center items-center  py-3 cursor-pointer">
                    <button
                      className="flex gap-1 py-3 px-2"
                      onClick={() => toggleDivVisibility(i)}
                      >
                      <div className="h-[6px] w-[6px] rounded-full bg-Typo"></div>
                      <div className="h-[6px] w-[6px] rounded-full bg-Typo"></div>
                      <div className="h-[6px] w-[6px] rounded-full bg-Typo"></div>
                    </button>
                    {selectedRowIndex === i && (
                      <div
                      className={`absolute top-[65%] right-[40%] bg-white flex justify-center items-center py-2 w-[70px] lg:w-[100px] drop-shadow-special rounded-md hover:text-white
                      ${
                        data.is_active
                        ? "hover:bg-Rose100"
                        : "hover:bg-Spbtn"
                      }`}
                      >
                        {data.is_active === true ? (
                          <button onClick={() => handleAction(false, data.id)}>
                            <p className="text-[12px] md:text-[20px]">Block</p>
                          </button>
                        ) : (
                          <button onClick={() => handleAction(true, data.id)}>
                            <p className="text-[12px] md:text-[20px]">Activate</p>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
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

export default Table;
