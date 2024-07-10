import { useContext } from 'react'
import Aside from '../components/Aside'
import Estadisticas from '../components/Estadisticas'
import Carga from '../components/Carga'
import { useLocation } from 'react-router-dom'
import { ContextConfig } from '../context/ContextConfig'

const Home = () => {

    const location = useLocation();
    const path = location.pathname.includes('carga') ? 'carga' : 'estadisticas';

    return (
        <div className='flex flex-col md:flex-row'>
            {
                path === "carga" ? (
                    <>
                        <Aside />
                        <Carga />
                    </>
                ) : (
                    <>
                        <Aside />
                        <Estadisticas />
                    </>
                )
            }
        </div>
    )
}

export default Home