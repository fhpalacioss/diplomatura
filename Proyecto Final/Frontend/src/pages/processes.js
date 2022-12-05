import React from 'react';

import Footer from '../component/Footer';

import responsive from '../img/responsive.png';
import img01 from '../img/01.png';
import img02 from '../img/02.png';
import img03 from '../img/03.png';
import img04 from '../img/04.png';


export default function Processes() {
  return (
    <>

    
<div className="parallax">
        <div className="px-4 py-5  text-center paddinParalax" >
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold textColorParalax">
                PROCESOS</h1>

        </div>
    </div>




    <div className="col-md-12 row headerStylePadding " >
        <div className="px-4 py-5  text-center paddinParalax">
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold ">
                Conozca Nuestra Estrategia Para Su Sitio Web</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 ">
                    Atraiga Al Público Con Una Mayor Presencia En Línea
                </p>

            </div>
        </div>

    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4 headerStylePadding" >
        <div className="col">
            <div className="card">
                <img src={img01} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Paso 1</h5>
                    <p className="card-text">Nos contactas por teléfono, email, redes sociales o whatsapp. Conversamos sobre todo lo que quieres para tu proyecto.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={img02} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Paso 2</h5>
                    <p className="card-text">Te enviamos varios modelos en los que nos podríamos basar para empezar a trabajar sobre la web. Estos diseños los seleccionamos en base al material enviado y la identidad de tú negocio. Eliges el que más te gusta y ¡empezamos!</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={img03} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Paso 3</h5>
                    <p className="card-text">Empezamos a diseñar tu web, te enviamos el primer avance y nos envías las correcciones necesarias para que tu web quede perfecta. Luego recibes la versión final para que la revises y nos digas los cambios que creas necesarios.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={img04} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Paso 4</h5>
                    <p className="card-text">Una vez aprobada la versión final, configuramos todo para que aparezcas en Google y horas más tarde ya tendrás tu web subida, funcionando y lista para aumentar tus ventas.</p>
                </div>
            </div>
        </div>
    </div>

      <Footer/>
    </>
  );
}
