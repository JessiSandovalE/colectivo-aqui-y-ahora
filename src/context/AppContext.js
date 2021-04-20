import React, { createContext, useState } from 'react'
const AppContext = createContext()
const { Provider, Consumer } = AppContext

const AppProvider = ({children})=> {
  const [menu,setMenu] = useState([
    {
      title: 'Quiénes Somos',
      link: ''
    },
    {
      title: 'Metodología',
      link: ''
    },
    {
      title: 'Programas de tratamiento',
      link: ''
    },
    {
      title: '¿Cómo ayudar?',
      link: ''
    }
  ])
  const [programs, setPrograms] = useState([
    {
      id:'panel1',
      title:'Programa intensivo (internado)',
      image:'./assets/item1.png',
      text: '<p>El internado es un proceso de entre 10 y 15 semanas de trabajo terapéutico permanente en nuestra casa de atención intensiva a las afueras de Bogotá que combina diferentes metodologías de intervención.</p><p>Es dirigido a personas que se encuentran en las fases finales del proceso (uso prolongado, de carácter compulsivo y elevada frecuencia) y en quienes ha afectado significativamente diversas áreas de funcionamiento (psicológica, social, biológica).</p><h4>Programa Jóvenes</h4><ul><li>Único programa privado en Colombia de alto nivel y exclusivo para adolescentes.</li><li>Internado con la mayor personalización disponible. (Máximo 15 pacientes con 9 especialistas para la atención)</li></ul><h4>Programa Adultos</h4><ul><li>Único programa privado en Colombia de alto nivel y exclusivo para mayores de 25 años.Ü</li><li>Internado con la mayor personalización disponible. (Máximo 8 pacientes con 9 especialistas para la atención)</li></ul>',
    },
    {
      id:'panel2',
      title:'Programa ambulatorio online',
      image:'./assets/item1.png',
      text: '<p>Nuestro Programa Online es dirigido a personas que se encuentran en fases intermedias de la problemática y en quienes empieza a comprometer algunas áreas de funcionamiento, principalmente de orden psicológico y social.</p><p>Se lleva a cabo de manera virtual y autogestionada, en un período de tiempo concreto de 8 semanas. Con la posibilidad de realizarse desde cualquier lugar, es un programa intensivo donde trabajamos sin que el paciente se vea obligado a frenar su vida.</p><p>Se realiza un trabajo individual específico cada semana, el consecuente desarrollo de un conjunto de actividades acordes a la temática que se esté abordando, y un conjunto de metodologías de abordaje complementarias de psicoterapia semanal para él y la familia.</p><ul><li>Trabajo personal autogestionado (8 semanas)</li><li>Psicoterapia Individual virtual (16 Sesiones, dos por semana, duración 1 hora)</li><li>Psicoterapia Familiar virtual (8 Sesiones, una por semana, duración 1 hora)</li><li>Psicoterapia Grupal virtual (8 Sesiones, una por semana, duración 1:30 horas)</li><li>Programa de base científica</li></ul>'
    },
    {
      id:'panel3',
      title:'Psicoterapia especializada',
      image:'./assets/item1.png',
      text: '<p>Procesos terapéuticos dirigido a personas que se encuentran en fases iniciales (de carácter experimental o de baja frecuencia) y en quienes aún no compromete diversas áreas de funcionamiento– y en las áreas donde se evidencia compromiso– este no se considera significativo. En los pacientes se observa algún nivel de vulnerabilidad en las dimensiones psicológica y social más que una problemática claramente establecida.</p><p>Son sesiones de psicoterapia individual de 1 hora aproximadamente, habitualmente con una frecuencia semanal. Su extensión en el tiempo depende de las características del consultante y la problemática específica a trabajar.</p><ul><li> La atención se puede realizar presencial o virtual según la preferencia del paciente.</li></ul>'
    }
  ])
  return(
    <Provider
      value={{
        menu,setMenu,
        programs, setPrograms
      }}
    >
      {children}
    </Provider>
  )
}
export {AppProvider, Consumer as AppConsumer, AppContext}
