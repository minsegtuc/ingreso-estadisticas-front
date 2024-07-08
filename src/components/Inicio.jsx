import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/Home'

const Inicio = () => {

    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate('/examenes/resultados', { state: { page } });
    }

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen bg-[#345071]'>
            <div className='md:h-1/5 md:w-96 flex justify-center items-center'>
                <img src="/examenes/logo_blanco_min.png" className="w-1/2 md:w-full md:mt-4" alt="" />
            </div>
            <div className='h-3/5 flex flex-col justify-center gap-6'>
                <button className='w-96 bg-white rounded-md font-bold h-12' onClick={() => handleClick("policia")}>
                    EXAMEN POLICIA
                </button>
                <button className='w-96 bg-white rounded-md font-bold h-12' onClick={() => handleClick("penitenciario")}>
                    EXAMEN SERVICIO PENITENCIARIO
                </button>
            </div>
            <div className='h-1/5 w-full flex flex-row gap-32 items-center justify-center pb-4'>
                <img src="/examenes/logo_policia.png" className="w-auto h-full"/>
                <img src="/examenes/LOGO_SPT_TUCUMAN.png" className="w-auto h-full"/>
            </div>
        </div>
    )
}

export default Inicio