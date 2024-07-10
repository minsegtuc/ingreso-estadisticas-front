import { useState, useEffect, useContext } from 'react'
import { ContextConfig } from '../context/ContextConfig'
import Swal from 'sweetalert2'
import Papa, { parse } from 'papaparse'

const Carga = () => {

    const pageName = localStorage.getItem('pageName') === 'policia' ? 'POL' : 'PEN'

    const { ipserver, handleCargaExitosa, cargaExitosa } = useContext(ContextConfig)

    const [registroCargado, setRegistroCargado] = useState([]);
    const [fileUpdate, setFileUpdate] = useState({});
    //const [cargaExitosa, setCargaExitosa] = useState(false);

    const handleFileUpload = (e) => {
        handleCargaExitosa(false);
        const fileInput = e.target;
        const file = fileInput.files[0];

        if (file) {
            Papa.parse(file, {
                complete: function (results) {
                    let aprobados = 0;
                    let desaprobados = 0;
                    let cant8 = 0;
                    let cant9 = 0;
                    let cant10 = 0;
                    let cant11 = 0;
                    let cant12 = 0;
                    let cant13 = 0;
                    let cant14 = 0;
                    let cant15 = 0;
                    let cant16 = 0;
                    let cant17 = 0;
                    let cant18 = 0;
                    let cant19 = 0;
                    let cant20 = 0;
                    let femeninas = 0;
                    let masculinos = 0;

                    results.data.map((registro, index) => {
                        if (index > 0) {
                            const nota = parseInt(registro[8]);
                            const correct = parseInt(registro[7]);
                            const genero = registro[3];

                            if (nota >= 40) {
                                aprobados++;
                            } else if (nota < 40 && nota >= 0) {
                                desaprobados++;
                            }

                            if (correct === 8) {
                                cant8++;
                            } else if (correct === 9) {
                                cant9++;
                            } else if (correct === 10) {
                                cant10++;
                            } else if (correct === 11) {
                                cant11++;
                            } else if (correct === 12) {
                                cant12++;
                            } else if (correct === 13) {
                                cant13++;
                            } else if (correct === 14) {
                                cant14++;
                            } else if (correct === 15) {
                                cant15++;
                            } else if (correct === 16) {
                                cant16++;
                            } else if (correct === 17) {
                                cant17++;
                            } else if (correct === 18) {
                                cant18++;
                            } else if (correct === 19) {
                                cant19++;
                            } else if (correct === 20) {
                                cant20++;
                            }

                            if (genero === "M" && nota >= 40) {
                                masculinos++;
                            } else if (genero === "F" && nota >= 40) {
                                femeninas++;
                            }
                        }
                    });

                    fetch(`https://${ipserver}/examenes/${results.data[2][1]}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            const fecha = new Date()
                            const dia = fecha.getDate().toString().padStart(2, '0')
                            const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
                            const anio = fecha.getFullYear()
                            const hora = fecha.getHours().toString().padStart(2, '0')
                            const minuto = fecha.getMinutes().toString().padStart(2, '0')
                            const segundo = fecha.getSeconds().toString().padStart(2, '0')
                            const fechaFormateada = `${anio}-${mes}-${dia} ${hora}:${minuto}:${segundo}`

                            const dataExportar = {
                                cantidadAprobados: aprobados,
                                cantidadDesaprobados: desaprobados,
                                cantidadAusentes: parseInt(data[0].cantidadPermitida) - aprobados - desaprobados,
                                idexamen: results.data[10][1],
                                fechahoracarga: fechaFormateada,
                                cant8,
                                cant9,
                                cant10,
                                cant11,
                                cant12,
                                cant13,
                                cant14,
                                cant15,
                                cant16,
                                cant17,
                                cant18,
                                cant19,
                                cant20,
                                femeninas,
                                masculinos
                            }
                            setFileUpdate(dataExportar);
                        })
                }
            });
        }
    }

    const handleCarga = () => {
        handleCargaExitosa(false);
        fetch(`https://${ipserver}/actualizar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fileUpdate)
        })
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    title: 'Carga exitosa',
                    text: 'El archivo fue cargado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
        })
        handleCargaExitosa(true);
    }

    useEffect(() => {
        fetch(`https://${ipserver}/examenes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setRegistroCargado(data);
            })
    }, [cargaExitosa]);

    return (
        <div className='flex flex-col items-center w-full h-full md:w-5/6 md:h-screen md:items-center md:justify-start '>
            <div className='w-full flex flex-col items-center justify-center md:h-1/4'>
                <h1 className='text-bold font-bold uppercase py-4'>cargar archivos</h1>
                <input type="file" name="" id="" accept='.csv' onChange={handleFileUpload} />
                <button className='px-8 py-1 bg-black text-white rounded-xl mt-4' onClick={handleCarga}>CARGAR</button>
            </div>
            <div className='w-full flex p-8 md:h-3/4 overflow-auto mb-2'>
                <ul className='flex flex-wrap justify-center h-full'>
                    {registroCargado.map((registro, index) => {
                        if (registro.cantidadAprobados !== null && registro.cantidadDesaprobados !== null && registro.cantidadAusentes !== null && registro.fuerza === pageName) {
                            return (
                                <li className='font-semibold text-sm bg-green-300 px-2 py-4 m-3 rounded-md w-32 text-center' key={index}>{registro.idexamen}</li>
                            )
                        }else if(registro.fuerza === pageName){
                            return (
                                <li className='font-semibold text-sm bg-red-300 px-2 py-4 m-3 rounded-md w-32 text-center' key={index}>{registro.idexamen}</li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Carga