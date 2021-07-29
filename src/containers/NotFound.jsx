import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/NotFound.scss';

const NotFound = () => (

    <>
        <div className="mainbox" >
            <div className="mainbox__container">
                <div className="mainbox__numbers" >
                    <div className="err">4</div>
                    <div>
                        <i className="far fa-question-circle fa-spin"></i>
                    </div>
                    <div className="err">4</div>
                </div>
                <div className="msg">
                    <p>¿Quizás esta página se movió? ¿Fue eliminado? ¿Nunca existió en primer lugar?</p>  <br/>  <p> Vamos al 
                        <Link to="/" className="msg__home" >
                            <strong> Inicio </strong>
                        </Link>
                    e intentemos desde allí.
                    </p>
                </div>
            </div>
        </div>
    </>
)

export default NotFound;