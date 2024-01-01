import React, { useState } from 'react'

function Table (){

    const headers = ["ID","Nom","Prenom","Email","Status",""]
    
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const toggleDivVisibility = (index) => {
    setSelectedRowIndex(selectedRowIndex === index ? null : index);
  }
 


    const modData = [
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"bloque"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"bloque"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        {
            ID:"123456",
            Nom:"Bengherbia",
            Prenom:"Karim",
            Email:"la_bengherbia@esi.dz",
            Status:"actif"
        },
        
    ]

    const tableImg = <img src='BiSort.svg'/>
    const tableIcon = ["Nom" , "Prenom" , "Status"]


    const handleAction = (actionType, index) => {
        
        if (actionType === 'activate') {
          // Code to activate the user at the specified index
        } else if (actionType === 'block') {
          // Code to block the user at the specified index
        }
        
      };

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
                        <td className='p-4'>{data.Nom}</td>
                        <td className='p-4'>{data.Prenom}</td>
                        <td className='p-4'>{data.Email}</td>
                        <td className='text-center p-4'> 
                            {data.Status === "actif" ?
                            <div className='flex items-center gap-4'>
                                <div className='h-[10px] w-[10px] rounded-full bg-Spbtn self-center justify-center'></div>
                                <p className=''>Actif</p>
                            </div> 
                            :
                            <div className='flex items-center gap-4'>
                                <div className='h-[10px] w-[10px] rounded-full bg-[#D4382B] self-center justify-center'></div>
                                <p className=''>Bloque</p>
                            </div>  }            
                        </td>
                        <td className='relative'>
                            <div className='flex justify-center items-center  py-3 cursor-pointer'>
                            <button className='flex gap-1 py-3 px-2 ' onClick={() => toggleDivVisibility(i)}>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                            </button>
                            {selectedRowIndex === i && (
                                    <div className={` absolute top-[60%] left-[60%] bg-white flex justify-center items-center py-2 w-[100px] shadow-2xl rounded-md `}>
                                        {data.Status === "actif" ? (
                                            <button onClick={() => handleAction("block", i)}>Block</button>
                                            ) : (
                                                <button onClick={() => handleAction("activate", i)}>Activate</button>
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
  )
}

export default Table