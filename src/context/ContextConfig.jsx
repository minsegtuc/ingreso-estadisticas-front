import { useState, createContext } from "react";

export const ContextConfig = createContext();

export const ContextProvider = ({ children }) => {

    const [dates, setDates] = useState([])
    const [classrooms, setClassrooms] = useState([])
    const [grupos, setGrupos] = useState([])
    const [cargaExitosa, setCargaExitosa] = useState(false);

    const ipserver = 'ingreso-one.vercel.app'
    //const ipserver = 'localhost:3000'

    const handleCargaExitosa = (estado) => {
        setCargaExitosa(estado);
    }

    const handleCheckboxChangeGrupo = (e) => {
        const { checked, value } = e.target;

        if(checked) {
            setGrupos([...grupos, value])
        } else {
            setGrupos(grupos.filter(grupo => grupo !== value))
        }
    }

    const handleCheckboxChangeDate = (e) => {
        const { checked, value } = e.target;

        if(checked) {
            setDates([...dates, value])
        } else {
            setDates(dates.filter(date => date !== value))
        }
    }

    const handleCheckboxChangeClassroom = (e) => {
        const { checked, value } = e.target;

        if(checked) {
            setClassrooms([...classrooms, value])
        } else {
            setClassrooms(classrooms.filter(classroom => classroom !== value))
        }
    }

    return(
        <ContextConfig.Provider value={{handleCheckboxChangeClassroom, handleCheckboxChangeDate, dates, classrooms, grupos, ipserver, handleCargaExitosa, cargaExitosa, handleCheckboxChangeGrupo}}>
            {children}
        </ContextConfig.Provider>
    )
}