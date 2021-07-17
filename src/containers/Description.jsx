import React from 'react';
import ReactMarkdown from 'react-markdown';

import galpon from '../assets/images/galpon.jpg';
import calc1 from '../assets/images/calc-1.png';
import calc2 from '../assets/images/calc-2.png';
import calc3 from '../assets/images/calc-3.png';
import calc4 from '../assets/images/calc-4.png';
import '../assets/styles/Description.scss';

function Description() {

    const markdown = `

### Es un método de cálculo sencillo para encontrar el nivel de iluminación media en una instalación de luminarias en interior.

Los datos de entrada para realizar el cálculo son: 

-	Las dimensiones del ambiente (ancho, alto, largo) y la altura del plano de trabajo (superficie de mesa, escritorio, normalmente a 0,85m y en caso de pasillos o depósitos será el piso).

-	El nivel de luminancia media (Em) que se pueden encontrar tabulado en las normas de cada país. 

-	Seleccionar el tipo de luminaria según el tipo de actividad a realizar y que mejor se adapte a nuestras necesidades.

-	Se debe escoger la altura de las luminarias, en caso de oficinas, viviendas o aulas se recomienda la mayore altura posible, techo.

-	Índice del local k a partir de las dimensiones antes detalladas y es un valor adimensional que va de 1 a 10.

-	Determinar el coeficiente de reflexión de techo, pared y piso que se encuentran tabulados según materia, superficie y acabado superficial.

-	Factor de utilización (n, CU) a partir del índice local y de los factores de reflexión, los cuales están tabulados por los fabricantes de las luminarias y se puede interpolar para hallar valores intermedios.  

-	Determinar el factor de mantenimiento (fm) o conservación de la instalación que depende de la suciedad del ambiente.


&nbsp;

### Cálculo del flujo luminoso

![image](${calc1})

- _Φt_ = Flujo luminoso total

- _E_ = Iluminancia media deseada

- _S_ = Superficie del plano de trabajo

- _η_ = Factor de utilización 

- _fm_ = Factor de mantenimiento.


&nbsp;

### Cálculo del número de luminarias

![image](${calc2})

- _N_ = Número de luminarias

- _Φt_ = Flujo luminoso total

- _Φl_ = Flujo luminoso por lampara 

- _nl_ = Numero de lámparas por luminaria 



&nbsp;

### Emplazamiento de luminarias 

![image](${calc3})

![image](${calc4})


&nbsp;

---



&nbsp;


    `;

    return (
        <div className="Description__container" >
            <div className="Description" >
                <div className="Description__perfil" >
                    <img className="Description__img" src={galpon} alt="Foto de perfil" />
                </div>
                <div className="Description__info">
                    <h1>Memoria de cálculos.</h1>
                    <h2>Cálculo de iluminación por método de los lúmenes</h2>
                    <h3>Por: Alejandro Matias Schwartz</h3>
                </div>
            </div>
            <ReactMarkdown children={markdown} />
        </div>
    )
}

export default Description;