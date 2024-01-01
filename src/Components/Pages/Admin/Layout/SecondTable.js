import React, { useState } from 'react'

function SecondTable  () {
    const headers = ["ID","Titre","Url","Auteurs","Institutions","Publication Date",""]
    const tableImg = <img src='BiSort.svg'/>
    const tableIcon = ["Titre" , "Url" , "Publication Date"]
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const handleAction = (actionType, index) => {
        
        
        
      };
      

      const toggleDivVisibility = (index) => {
        setSelectedRowIndex(selectedRowIndex === index ? null : index);
      }

    const modData = [
        {
            ID:"123456",
            Titre:"Nanoparticules ...",
            Url:"https://google.dz",
            Auteurs:"Maria Airth",
            Institutions:"Google, Microsoft, Esi",
            PublicationDate :"17-12-2023"
        },
        {
            ID:"123456",
            Titre:"Nanoparticules ...",
            Url:"https://google.dz",
            Auteurs:"Maria Airth",
            Institutions:"Google, Microsoft, Esi",
            PublicationDate :"17-12-2023"
        },
        {
            ID:"123456",
            Titre:"Nanoparticules ...",
            Url:"https://google.dz",
            Auteurs:"Maria Airth",
            Institutions:"Google, Microsoft, Esi",
            PublicationDate :"17-12-2023"
        },
        {
            ID:"123456",
            Titre:"Nanoparticules ...",
            Url:"https://google.dz",
            Auteurs:"Maria Airth",
            Institutions:"Google, Microsoft, Esi",
            PublicationDate :"17-12-2023"
        },
    ]
  
    return (


    <div>
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
            {modData.map((data,i)=>(
                    <tr key={i} className='border-b-2 border-solid border-Typo border-opacity-20'>
                        <td className='p-4'>{data.ID}</td>
                        <td className='p-4'>{data.Titre}</td>
                        <td className='p-4'>{data.Url}</td>
                        <td className='p-4'>{data.Auteurs}</td>
                        <td className='p-4'>{data.Institutions}</td>
                        <td className='p-4'>{data.PublicationDate}</td>
                        <td className='relative'>
                            <div className='flex justify-center items-center  py-3 cursor-pointer'>
                            <button className='flex gap-1 py-3 px-2 ' onClick={() => toggleDivVisibility(i)}>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                            </button>
                            {selectedRowIndex === i && (
                                    <div className={` absolute top-[60%] left-[60%] bg-white flex justify-center items-center py-2 w-[100px] shadow-2xl rounded-md `}>
                                            <button onClick={() => handleAction("block", i)}>Delete</button>
                                    </div>
                            )} 
                            </div>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
    </div>
  )
}

export default SecondTable