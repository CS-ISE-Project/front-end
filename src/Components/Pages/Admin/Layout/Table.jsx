import React, { useState } from 'react'

function Table (){

    const headers = ["ID","Nom","Prenom","Email","Status",""]

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
    ]

  return (
    <div>
        <table className='overflow-hidden mt-[88px] md:mt-[112px] w-full text-left'>
            <thead className='bg-Blue66 text-white'>
                <tr>
                    {headers.map((header,i)=>(
                        <th className={`${i=== 0 ? "rounded-tl-lg": i===headers.length-1 ? "rounded-tr-lg " :""} p-4`}>{header}</th>
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
                        <td>
                            <div className='flex justify-center items-center  py-3 cursor-pointer'>
                            <button className='flex gap-1'>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                                <div className='h-[10px] w-[10px] rounded-full bg-Typo'></div>
                            </button>
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