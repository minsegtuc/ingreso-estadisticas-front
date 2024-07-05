import { useState, useContext, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { ContextConfig } from "../context/ContextConfig";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NavLink, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Aside = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fechaDescarga, setFechaDescarga] = useState('')

    const { handleCheckboxChangeClassroom, handleCheckboxChangeDate, handleCheckboxChangeGrupo, ipserver, cargaExitosa } = useContext(ContextConfig)

    const navigate = useNavigate()

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleExportPDF = () => {
        setLoading(true);

        const input = document.getElementById('componente-exportar');

        const inputWidth = input.offsetWidth;
        const inputHeight = input.offsetHeight;
        const aspectRatio = inputWidth / inputHeight;
        const pdfWidth = 210;
        const pdfHeight = pdfWidth / aspectRatio;

        html2canvas(input, {
            scale: 2,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight,
            useCORS: true,
            logging: true
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const pdf = new jsPDF({
                    orientation: pdfWidth > pdfHeight ? 'l' : 'p',
                    unit: 'mm',
                    format: [pdfWidth, pdfHeight]
                });

                const margin = 10;
                const imgWidth = pdfWidth - margin * 2;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                const imgX = margin;
                const imgY = (pdfHeight - imgHeight) / 2;

                pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);

                const date = new Date();
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                const hour = date.getHours().toString().padStart(2, '0');
                const minute = date.getMinutes().toString().padStart(2, '0');
                const second = date.getSeconds().toString().padStart(2, '0');
                const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

                //pdf.text(`REPORTE DE RESULTADOS - ${formattedDate}`, pdfWidth / 2, margin, { align: 'center' });
                pdf.save('resultados-ingreso.pdf');
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al exportar a PDF:', error);
                setLoading(false);
            });
    };

    const handleButtonCarga = async () => {
        const { value: password } = await Swal.fire({
            title: "Ingrese su contraseña",
            input: "password",
            inputLabel: "contraseña",
            inputPlaceholder: "Ingrese su contraseña",
            inputAttributes: {
                maxlength: "12",
                autocapitalize: "off",
                autocorrect: "off"
            }
        });

        if (password) {
            if (password === 'minsegtuc911') {
                navigate('/controldegestion/examenes/carga')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Contraseña incorrecta',
                })
            }
        }
    }

    useEffect(() => {
        fetch(`http://${ipserver}/ultimacarga`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                const fechaUTC = data[0].fechahoracarga;

                const fechaLocal = new Date(fechaUTC);

                const year = fechaLocal.getFullYear();
                const month = String(fechaLocal.getMonth() + 1).padStart(2, '0');
                const day = String(fechaLocal.getDate()).padStart(2, '0');
                const hours = String(fechaLocal.getHours()).padStart(2, '0');
                const minutes = String(fechaLocal.getMinutes()).padStart(2, '0');
                const seconds = String(fechaLocal.getSeconds()).padStart(2, '0');
                const hoursutc3 = String(fechaLocal.getHours() + 3).padStart(2, '0');

                const fechaFormateada = `${year}-${month}-${day} ${hoursutc3}:${minutes}:${seconds}`;
                setFechaDescarga(fechaFormateada);
            })
            .catch(error => {
                console.log(error)
            }
            )
    }, [cargaExitosa])

    return (
        <div className={`bg-[#345071] w-full flex flex-col px-4 md:w-1/6 md:h-screen md:items-start md:justify-start ${isOpen ? 'h-altura items-start' : 'h-16'}`}>
            <div className="flex flex-row items-center w-full justify-between h-16 md:items-start">
                <Link to={'/controldegestion/examenes/'}>
                    <img src="/controldegestion/examenes/logo_blanco_min.png" className="w-1/2 md:w-full md:mt-4" alt="" />
                    {/* <img src="/logo_blanco_min.png" className="w-1/2 md:w-full md:mt-4" alt="" /> */}
                </Link>
                <LuMenu className={`text-white text-2xl md:hidden`} onClick={handleOpen} />
            </div>
            <div className={`${isOpen ? 'block' : 'hidden md:block'}`}>
                {/* <h1 className='text-white font-bold md:text-md'>FILTROS</h1> */}
                <p className='text-white font-semibold'>Fechas:</p>
                <div className='flex flex-col mb-3 w-full items-center gap-2 md:gap-1'>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="2024-07-02" onChange={handleCheckboxChangeDate} />
                            <label htmlFor="" className='text-white'>02/07/2024</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="2024-07-03" onChange={handleCheckboxChangeDate} />
                            <label htmlFor="" className='text-white'>03/07/2024</label>
                        </div>
                    </div>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="2024-07-04" onChange={handleCheckboxChangeDate} />
                            <label htmlFor="" className='text-white'>04/07/2024</label>
                        </div>
                    </div>
                </div>
                <p className='text-white mt-2 font-semibold'>Turnos:</p>
                <div className='flex flex-col mb-3 w-full items-center gap-2 md:gap-1'>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="GRUPO 01" onChange={handleCheckboxChangeGrupo} />
                            <label htmlFor="" className='text-white'>Grupo 01</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="GRUPO 02" onChange={handleCheckboxChangeGrupo} />
                            <label htmlFor="" className='text-white'>Grupo 02</label>
                        </div>
                    </div>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="GRUPO 03" onChange={handleCheckboxChangeGrupo} />
                            <label htmlFor="" className='text-white'>Grupo 03</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="GRUPO 04" onChange={handleCheckboxChangeGrupo} />
                            <label htmlFor="" className='text-white'>Grupo 04</label>
                        </div>
                    </div>
                </div>
                <p className='text-white font-semibold'>Aulas:</p>
                <div className='flex flex-col mb-3 w-full items-center gap-2 md:gap-1'>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 01" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 1</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 02" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 2</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 03" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 3</label>
                        </div>
                    </div>
                    <div className='flex w-full gap-2 justify-start md:flex-col md:items-start md:gap-1'>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 04" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 4</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 05" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 5</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" value="Aula 06" onChange={handleCheckboxChangeClassroom} />
                            <label htmlFor="" className='text-white'>Aula 6</label>
                        </div>
                    </div>
                </div>
                <button
                    className='bg-black text-white rounded-lg h-6 uppercase font-semibold mr-2 md:mr-2 md:mb-2 min-w-28 text-sm'
                    onClick={handleExportPDF}
                    disabled={loading}
                >
                    {loading ? 'Generando PDF...' : 'EXPORTAR'}
                </button>

                <button className='bg-black text-white rounded-lg h-6 uppercase font-semibold min-w-28 text-sm'
                    onClick={handleButtonCarga}>CARGAR
                </button>
                {
                    fechaDescarga == '' ? '' : <p className="text-white text-xs my-2">Actualizado: {fechaDescarga}</p>
                }
            </div>
        </div>
    )
}

export default Aside