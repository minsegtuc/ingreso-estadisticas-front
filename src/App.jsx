import React from 'react'
import Inicio from './components/Inicio'
import './index.css'
import { ContextProvider } from './context/ContextConfig';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className=''>
      <ContextProvider>
        <Routes>
          <Route path='/examenes/' element={<Inicio />} />
          <Route path='/examenes/resultados/' element={<Home />} />
          <Route path='/examenes/resultados/carga' element={<Home />} />
        </Routes>
      </ContextProvider>
    </div>
  )
}
export default App