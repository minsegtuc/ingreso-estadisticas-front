import React from 'react'
import Aside from '../components/Aside'
import Estadisticas from '../components/Estadisticas'
import Carga from '../components/Carga'
import { useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation();
    const page = location.state?.page || '';
    const path = location.pathname.includes('carga') ? 'carga' : 'estadisticas';

    return (
        <div className='flex flex-col md:flex-row'>
            {
                path === "carga" ? (
                    <>
                        <Aside pagina={page} />
                        <Carga />
                    </>
                ) : (
                    <>
                        <Aside pagina={page} />
                        <Estadisticas pagina={page}/>
                    </>
                )
            }
        </div>
    )
}

export default Home