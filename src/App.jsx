import React from 'react'
import Aside from './components/Aside'
import Estadisticas from './components/Estadisticas'
import './index.css'
import { ContextProvider } from './context/ContextConfig';
import { Router, Route, Routes } from 'react-router-dom';
import Carga from './components/Carga';

const App = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <ContextProvider>
        <Aside />
        <Routes>
          {/* <Route path='/' element={<Estadisticas />} />
          <Route path='/carga' element={<Carga />} /> */}
          <Route path='/controldegestion/examenes/' element={<Estadisticas />} />
          <Route path='/controldegestion/examenes/carga' element={<Carga />} />
        </Routes>
      </ContextProvider>
    </div>
  )
}
export default App