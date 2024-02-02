import React, { useEffect, useState } from 'react'

function SecondTable  () {
    const headers = ["ID","Titre","Url","authors","Institutions","Publication Date",""]
    const tableImg = <img src='BiSort.svg'/>
    const tableIcon = ["Titre" , "Url" , "Publication Date"]
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [tableData , setTableData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState()
    const [page, setPage] = useState(0)
    
    const handleDelete= (articleID) => {
        const deleteArtcle = async ()=>{
            
            const response = await fetch(`https://ise-project-api-production.up.railway.app/articles/${articleID}`,{
                method:"DELETE",
                headers : {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                    "Content-Type": "application/json"  
                }
            })

            const data = await response.json()
            console.log(data)

        
            

        } 


        deleteArtcle()
    };
      

      const toggleDivVisibility = (index) => {
        setSelectedRowIndex(selectedRowIndex === index ? null : index);
      }

      useEffect(() => {       

        const fetchTableData = async ()=>{
            setIsLoading(true)
        try{
            const response = await fetch(`https://ise-project-api-production.up.railway.app/articles/`,{
                method:"GET",
                headers : {
                    "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
                    "Content-Type": "application/json"  
                }
            })
            const data = await response.json()
            setTableData(data)
            console.log(data)
        }catch (e){
            setError(e)
        }finally{
            setIsLoading(false)
        }   
        }
        fetchTableData()
    }, [page])

    
   
    return (


    <div>
        {isLoading && <div className='mx-auto mt-[200px] w-full text-center' >Loading....</div>}
        {!isLoading && 
        <table className='mt-[88px] md:mt-[112px] w-[80vw] mx-auto text-left'>
            <thead className='bg-Blue66 text-white'>
                <tr className=''>
                    {headers.map((header,i)=>(
                        <th key={i} className={`${i=== 0 ? "rounded-tl-lg": i===headers.length-1 ? "rounded-tr-lg " :""} p-4`}>
                            <div className='flex items-center gap-2'>
                                {header}
                                {tableIcon.indexOf(header) !== -1 ? tableImg : null}
                            </div>
                        </th>
                        )) }
                </tr>
            </thead>
            <tbody className='text-Typo'>
            {tableData.map((data,i)=>(
                <tr key={i} className='border-b-2 border-solid border-Typo border-opacity-20'>
                        <td className='p-4'>{data.id}</td>
                        <td className='p-4'>{data.title}</td>
                        <td className='p-4'>{data.url}</td>
                        <td className='p-4'>{data.authors}</td>
                        <td className='p-4'>{data.institutes}</td>
                        <td className='p-4'>{data.publication_date}</td>
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
        }
    </div>
  )
}

export default SecondTable