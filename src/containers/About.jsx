import React from 'react';
import ReactMarkdown from 'react-markdown';

import FotoPerfil from '../styles/images/foto-perfil.jpg'
import '../styles/components/Description.scss';

function About() {

    const markdown = `

### ¿Puedo combinar mis habilidades y pasiones en un proyecto? ¿Programación web con la mecánica?

Esas fueron algunas de las preguntas que me surgieron en un reto de marca personal que realice y este proyecto es mi respuesta. 

Una aplicación web con React, la cual sirve para calcular la intensidad lumínica media dentro de una habitación.

El proyecto nace como un práctico de la facultad de ingeniería mecánica, donde debíamos calcular las luminarias para una industria. Éramos 20 grupos en el curso, por lo tanto 20 planillas de Excel distintas cada año. Por otro lado, vi que la documentación era poca en internet y que no existía una aplicación sencilla para calcularlo. 

Entones, viendo que la tarea realizada era repetitiva trate de ir pasando los cálculos del Excel a esta aplicación y que sea accesible tanto en teléfono como en escritorio.



&nbsp;

Espero les guste y sea de utilidad. Saludos 👋

---



&nbsp;


    `;

    return (
        <div className="Description__container" >
            <div className="Description" >
                <div className="Description__perfil" >
                    <img className="Description__img" src={FotoPerfil} alt="Foto de perfil" />
                </div>
                <div className="Description__info">
                    <h1>Sobre mí y este proyecto.</h1>
                    <h2>¿Por qué lo realice y cuál es mi idea del proyecto?</h2>
                    <h3>Por: Alejandro Matias Schwartz</h3>
                </div>
            </div>
            <ReactMarkdown children={markdown} />
        </div>
    )
}

export default About;