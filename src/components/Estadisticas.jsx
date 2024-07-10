import { useContext, useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'
import { ContextConfig } from '../context/ContextConfig'
import { motion } from 'framer-motion'

const Estadisticas = () => {

    const [aula1, setAula1] = useState([])
    const [aula2, setAula2] = useState([])
    const [aula3, setAula3] = useState([])
    const [aula4, setAula4] = useState([])
    const [aula5, setAula5] = useState([])
    const [aula6, setAula6] = useState([])
    const [loading, setLoading] = useState(true)

    const pageName = localStorage.getItem('pageName')

    const { dates, classrooms, ipserver, grupos } = useContext(ContextConfig)
    const [aprobadosTotal, setAprobadosTotal] = useState(0)
    const [desaprobadosTotal, setDesaprobadosTotal] = useState(0)

    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])

    const cargarGraficas = () => {
        let aula1Aprobados = 0
        let aula1Desaprobados = 0
        let aula1Ausentes = 0
        let aula2Aprobados = 0
        let aula2Desaprobados = 0
        let aula2Ausentes = 0
        let aula3Aprobados = 0
        let aula3Desaprobados = 0
        let aula3Ausentes = 0
        let aula4Aprobados = 0
        let aula4Desaprobados = 0
        let aula4Ausentes = 0
        let aula5Aprobados = 0
        let aula5Desaprobados = 0
        let aula5Ausentes = 0
        let aula6Aprobados = 0
        let aula6Desaprobados = 0
        let aula6Ausentes = 0

        let cant8 = 0
        let cant9 = 0
        let cant10 = 0
        let cant11 = 0
        let cant12 = 0
        let cant13 = 0
        let cant14 = 0
        let cant15 = 0
        let cant16 = 0
        let cant17 = 0
        let cant18 = 0
        let cant19 = 0
        let cant20 = 0

        let masculinos = 0
        let femeninas = 0

        aula1.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula1Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula1Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula1Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })
        aula2.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula2Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula2Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula2Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })
        aula3.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula3Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula3Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula3Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })
        aula4.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula4Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula4Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula4Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })
        aula5.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula5Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula5Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula5Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })
        aula6.forEach(a => {
            if (a.cantidadAprobados !== null) {
                aula6Aprobados += a.cantidadAprobados
            }
            if (a.cantidadDesaprobados !== null) {
                aula6Desaprobados += a.cantidadDesaprobados
            }
            if (a.cantidadAusentes !== null) {
                aula6Ausentes += a.cantidadAusentes
            }
            if (a.cant8 !== null) {
                cant8 += a.cant8
            }
            if (a.cant9 !== null) {
                cant9 += a.cant9
            }
            if (a.cant10 !== null) {
                cant10 += a.cant10
            }
            if (a.cant11 !== null) {
                cant11 += a.cant11
            }
            if (a.cant12 !== null) {
                cant12 += a.cant12
            }
            if (a.cant13 !== null) {
                cant13 += a.cant13
            }
            if (a.cant14 !== null) {
                cant14 += a.cant14
            }
            if (a.cant15 !== null) {
                cant15 += a.cant15
            }
            if (a.cant16 !== null) {
                cant16 += a.cant16
            }
            if (a.cant17 !== null) {
                cant17 += a.cant17
            }
            if (a.cant18 !== null) {
                cant18 += a.cant18
            }
            if (a.cant19 !== null) {
                cant19 += a.cant19
            }
            if (a.cant20 !== null) {
                cant20 += a.cant20
            }
            if (a.masculinos !== null) {
                masculinos += a.masculinos
            }
            if (a.femeninas !== null) {
                femeninas += a.femeninas
            }
        })

        const aprobados = aula1Aprobados + aula2Aprobados + aula3Aprobados + aula4Aprobados + aula5Aprobados + aula6Aprobados
        const desaprobados = aula1Desaprobados + aula2Desaprobados + aula3Desaprobados + aula4Desaprobados + aula5Desaprobados + aula6Desaprobados
        const ausentes = aula1Ausentes + aula2Ausentes + aula3Ausentes + aula4Ausentes + aula5Ausentes + aula6Ausentes
        setAprobadosTotal(aprobados)
        setDesaprobadosTotal(desaprobados)

        const data2Aux =
            [
                {
                    "aula": "Aula 01",
                    "Aprobados": aula1Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula1Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula1Ausentes,
                    "AusentesColor": "#c389fb"
                },
                {
                    "aula": "Aula 02",
                    "Aprobados": aula2Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula2Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula2Ausentes,
                    "AusentesColor": "#c389fb"
                },
                {
                    "aula": "Aula 03",
                    "Aprobados": aula3Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula3Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula3Ausentes,
                    "AusentesColor": "#c389fb"
                },
                {
                    "aula": "Aula 04",
                    "Aprobados": aula4Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula4Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula4Ausentes,
                    "AusentesColor": "#c389fb"
                },
                {
                    "aula": "Aula 05",
                    "Aprobados": aula5Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula5Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula5Ausentes,
                    "AusentesColor": "#c389fb"
                },
                {
                    "fecha": "2021-09-01",
                    "aula": "Aula 06",
                    "Aprobados": aula6Aprobados,
                    "AprobadosColor": "#73be62",
                    "Desaprobados": aula6Desaprobados,
                    "DesaprobadosColor": "#fe8360",
                    "Ausentes": aula6Ausentes,
                    "AusentesColor": "#c389fb"
                }
            ]

        const data3Aux =
            [
                {
                    "cantRespuestas": "8",
                    "Respuesta": cant8,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "9",
                    "Respuesta": cant9,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "10",
                    "Respuesta": cant10,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "11",
                    "Respuesta": cant11,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "12",
                    "Respuesta": cant12,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "13",
                    "Respuesta": cant13,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "14",
                    "Respuesta": cant14,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "15",
                    "Respuesta": cant15,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "16",
                    "Respuesta": cant16,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "17",
                    "Respuesta": cant17,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "18",
                    "Respuesta": cant18,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "19",
                    "Respuesta": cant19,
                    "RespuestaColor": "#73be62"
                },
                {
                    "cantRespuestas": "20",
                    "Respuesta": cant20,
                    "RespuestaColor": "#73be62"
                }
            ]

        const data4Aux =
            [
                {
                    "genero": "Masculinos",
                    "Masculinos": masculinos,
                    "MasculinosColor": "#6495ED",
                },
                {
                    "genero": "Femeninas",
                    "Femeninas": femeninas,
                    "FemeninasColor": "#F653A6"
                }
            ]

        const porcentajeAprobados = ((aprobados / (aprobados + desaprobados + ausentes)) * 100).toFixed(2)
        const porcentajeDesaprobados = ((desaprobados / (aprobados + desaprobados + ausentes)) * 100).toFixed(2)
        const porcentajeAusentes = ((ausentes / (aprobados + desaprobados + ausentes)) * 100).toFixed(2)

        const data1Aux = [
            {
                "id": "Aprobados",
                "label": "Aprobados",
                "value": porcentajeAprobados,
                "color": "#73be62",
            },
            {
                "id": "Desaprobados",
                "label": "Desaprobados",
                "value": porcentajeDesaprobados,
                "color": "#fe8360"
            },
            {
                "id": "Ausentes",
                "label": "Ausentes",
                "value": porcentajeAusentes,
                "color": "#c389fb"
            }
        ]

        setData1(data1Aux)
        setData2(data2Aux)
        setData3(data3Aux)
        setData4(data4Aux)

        setLoading(false)
    }

    useEffect(() => {
        fetch(`https://${ipserver}/fechayaula/${pageName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechas: dates,
                aulas: classrooms,
                grupos: grupos
            })
        }).then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    setData1([])
                    setData2([])
                    setData3([])
                    setData4([])
                    setAprobadosTotal(0)
                    setDesaprobadosTotal(0)
                    setLoading(false)
                } else {
                    const aula1Aux = data.filter(d => d.aula === 'AULA 01')
                    const aula2Aux = data.filter(d => d.aula === 'AULA 02')
                    const aula3Aux = data.filter(d => d.aula === 'AULA 03')
                    const aula4Aux = data.filter(d => d.aula === 'AULA 04')
                    const aula5Aux = data.filter(d => d.aula === 'AULA 05')
                    const aula6Aux = data.filter(d => d.aula === 'AULA 06')

                    setAula1(aula1Aux)
                    setAula2(aula2Aux)
                    setAula3(aula3Aux)
                    setAula4(aula4Aux)
                    setAula5(aula5Aux)
                    setAula6(aula6Aux)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [dates, classrooms, grupos])

    useEffect(() => {
        if (aula1.length > 0 || aula2.length > 0 || aula3.length > 0 || aula4.length > 0 || aula5.length > 0 || aula6.length > 0) {
            cargarGraficas();
        }
    }, [aula1, aula2, aula3, aula4, aula5, aula6]);

    return (
        <div className='flex flex-col items-center w-full h-full md:w-5/6 md:h-screen md:items-start md:justify-start md:overflow-hidden' id='componente-exportar'>
            <div className='flex flex-col items-center w-full h-auto md:flex-col md:items-start md:h-4/6'>
                <div className='text-center pt-2 h-6 w-full md:h-12'>
                    <h1 className='w-full font-semibold text-2xl md:h-full'>INGRESO 2024</h1>
                </div>
                <div className='flex flex-col md:flex-row w-full justify-center items-center'>
                    <div className='flex flex-col items-center py-4 h-80 w-full md:w-1/2'>
                        {/* <h2 className='font-semibold uppercase text-2xl'>Porcentajes</h2> */}
                        {
                            loading ? (<svg class="animate-spin h-10 w-10 m-auto" viewBox="0 0 24 24"><circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
                                ></path>
                            </svg>) :
                                data1.length === 0 ? <motion.p
                                    className={`uppercase m-auto`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    No hay datos para mostrar
                                </motion.p> : <ResponsivePie
                                    data={data1}
                                    margin={{ top: 50, right: 60, bottom: 55, left: 60 }}
                                    innerRadius={0.6}
                                    padAngle={0}
                                    cornerRadius={0}
                                    activeOuterRadiusOffset={6}
                                    borderWidth={3}
                                    valueFormat={e => `${e}%`}
                                    borderColor={{
                                        from: 'color',
                                        modifiers: [
                                            [
                                                'darker',
                                                0
                                            ]
                                        ]
                                    }}
                                    enableArcLinkLabels={false}
                                    arcLinkLabelsSkipAngle={10}
                                    arcLinkLabelsTextColor="#333333"
                                    arcLinkLabelsThickness={2}
                                    arcLinkLabelsColor={{ from: 'color' }}
                                    arcLabelsSkipAngle={10}
                                    arcLabelsTextColor="#fff"
                                    theme={{
                                        labels: {
                                            text: {
                                                fontSize: 12,
                                                fontWeight: 'bold',
                                            }
                                        }
                                    }}
                                    legends={[
                                        {
                                            anchor: 'top',
                                            direction: 'row',
                                            justify: false,
                                            translateX: 20,
                                            translateY: -35,
                                            itemsSpacing: 2,
                                            itemWidth: 100,
                                            itemHeight: 20,
                                            itemTextColor: '#000',
                                            itemDirection: 'left-to-right',
                                            itemOpacity: 1,
                                            symbolSize: 18,
                                            symbolShape: 'circle',
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemTextColor: '#000'
                                                    }
                                                }
                                            ],
                                            textStyle: {
                                                fontSize: '32px',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    ]}
                                    colors={({ data }) => data.color}
                                />
                        }
                    </div>
                    <div className='flex flex-col items-center py-4 h-80 w-full md:w-1/2'>
                        {/* <h2 className='font-semibold uppercase text-2xl'>Cantidad</h2> */}
                        {
                            loading ? (<svg class="animate-spin h-10 w-10 m-auto" viewBox="0 0 24 24"><circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
                                ></path></svg>) :
                                data2.length === 0 ? <motion.p
                                    className={`uppercase m-auto`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    No hay datos para mostrar
                                </motion.p> : <ResponsiveBar
                                    data={data2}
                                    keys={[
                                        'Aprobados',
                                        'Desaprobados',
                                        'Ausentes'
                                    ]}
                                    indexBy="aula"
                                    margin={{ top: 50, right: 25, bottom: 50, left: 60 }}
                                    padding={0.3}
                                    valueScale={{ type: 'linear' }}
                                    indexScale={{ type: 'band', round: true }}
                                    colors={({ id, data }) => data[`${id}Color`]}
                                    borderColor={{
                                        from: 'color',
                                        modifiers: [
                                            [
                                                'darker',
                                                1.6
                                            ]
                                        ]
                                    }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Aula',
                                        legendPosition: 'middle',
                                        legendOffset: 32,
                                        truncateTickAt: 0
                                    }}
                                    axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'Cantidad',
                                        legendPosition: 'middle',
                                        legendOffset: -40,
                                        truncateTickAt: 0,
                                    }}
                                    labelSkipWidth={16}
                                    labelSkipHeight={16}
                                    labelTextColor="#fff"
                                    itemTextColor="#000"
                                    legends={[
                                        {
                                            dataFrom: 'keys',
                                            anchor: 'top',
                                            direction: 'row',
                                            justify: false,
                                            translateX: 0,
                                            translateY: -35,
                                            itemsSpacing: 2,
                                            itemWidth: 100,
                                            itemHeight: 20,
                                            itemTextColor: '#000',
                                            itemDirection: 'left-to-right',
                                            itemOpacity: 1,
                                            symbolSize: 20,
                                            symbolShape: 'circle',
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemOpacity: 1
                                                    }
                                                }
                                            ]
                                        }
                                    ]}
                                    role="application"
                                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                                    theme={{
                                        labels: {
                                            text: {
                                                fontSize: 12,
                                                fontWeight: 'bold',
                                            }
                                        }
                                    }}
                                />
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center pb-4 px-2 h-auto md:2/6'>
                <div className='flex flex-col items-center md:h-80 w-full md:w-1/2 h-96'>
                    {
                        loading ? (<svg class="animate-spin h-10 w-10 mt-24" viewBox="0 0 24 24"><circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
                            ></path></svg>) :
                            data3.length === 0 ? <motion.p
                                className={`uppercase mt-24`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                No hay datos para mostrar
                            </motion.p> : <ResponsiveBar
                                data={data3}
                                keys={[
                                    'Respuesta'
                                ]}
                                indexBy="cantRespuestas"
                                margin={{ top: 10, right: 25, bottom: 120, left: 60 }}
                                padding={0.1}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={({ id, data }) => data[`${id}Color`]}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Respuestas correctas',
                                    legendPosition: 'middle',
                                    legendOffset: 32,
                                    truncateTickAt: 0
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Cantidad de personas',
                                    legendPosition: 'middle',
                                    legendOffset: -40,
                                    truncateTickAt: 0,
                                }}
                                labelPosition="end"
                                labelSkipWidth={16}
                                labelSkipHeight={16}
                                labelTextColor="#fff"
                                itemTextColor="#000"
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'top',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: -35,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemTextColor: '#000',
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 1,
                                        symbolSize: 20,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                                theme={{
                                    labels: {
                                        text: {
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                        }
                                    }
                                }}
                            />
                    }
                </div>
                <div className='flex flex-col w-full justify-center items-center md:w-1/2 px-8 md:flex-row'>
                    <div className='flex flex-col items-center justify-center w-full md:w-1/2 md:h-80 h-96'>
                        {
                            loading ? (<svg class="animate-spin h-10 w-10 mb-24" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
                                ></path>
                            </svg>) : (data4.length === 0 ? <motion.p
                                className={`uppercase mb-24`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                No hay datos para mostrar
                            </motion.p> : <ResponsiveBar
                                data={data4}
                                keys={[
                                    'Masculinos',
                                    'Femeninas'
                                ]}
                                indexBy="genero"
                                margin={{ top: 10, right: 25, bottom: 120, left: 60 }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={({ id, data }) => data[`${id}Color`]}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Genero',
                                    legendPosition: 'middle',
                                    legendOffset: 32,
                                    truncateTickAt: 0
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Cantidad de personas',
                                    legendPosition: 'middle',
                                    legendOffset: -40,
                                    truncateTickAt: 0,
                                }}
                                labelPosition="end"
                                labelSkipWidth={16}
                                labelSkipHeight={16}
                                labelTextColor="#fff"
                                itemTextColor="#000"
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'top',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: -35,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemTextColor: '#000',
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 1,
                                        symbolSize: 20,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                                theme={{
                                    labels: {
                                        text: {
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                        }
                                    }
                                }}
                            />)
                        }
                    </div>
                    <div className='flex flex-col justify-center items-center w-full md:w-1/2 md:h-80'>
                        <div className='flex flex-col w-full items-center bg-[#73be62] mb-4 rounded-lg py-2'>
                            <motion.p
                                className={`uppercase text-white text-5xl font-bold`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {aprobadosTotal}
                            </motion.p>
                            <p className='uppercase text-white font-semibold'>aprobados</p>
                        </div>
                        <div className='flex flex-col w-full items-center bg-[#fe8360] md:mb-24 rounded-lg py-2'>
                            <motion.p
                                className={`uppercase text-white text-5xl font-bold`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {desaprobadosTotal}
                            </motion.p>
                            <p className='uppercase text-white font-semibold'>desaprobados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estadisticas