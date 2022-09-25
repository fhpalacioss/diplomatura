import React, {Fragment} from 'react';

import Footer from '../component/Footer';

import responsive from '../img/responsive.png';
import img2 from '../img/img2.png';


export default function Services() {
  return (
    <Fragment>

      <div className="parallax">
        <div className="px-4 py-5  text-center paddinParalax">
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold textColorParalax">
            Servicios Digitales</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 textColorParalax">
                    Todos tus sueños se pueden convertir en realidad si tienes el coraje de perseguirlos (Walt Disney)
                </p>
            </div>
        </div>
    </div>

    <div className="col-md-12 row col12servicios " >
        <div className="col-md-6 text-center contenedorInlineBlock contenedorInlineBlockmargin">

            <div className="col-lg-9 mx-auto ">
                <p className="lead mb-4 ">

                    Sube A La Cima

                    <h3 className=" fw-bold ">
                        Incremento De Ventas</h3> <br></br>Con nuestro servicios de web de ultima generación tu negocio crecerá, estas preparado para un aumento de ventas ?

                </p>

                <p className="lead mb-4 ">

                    Contactanos

                    <h3 className=" fw-bold ">
                        Asesores Expertos</h3> <br></br> Nuestros trabajadores tienen años de experiencia en distintos rubros dedicados a la tecnología lo cual garantiza un soporte de calidad a nuestros clientes.

                </p>
                <p className="lead mb-4 ">

                    Intente, Intente De Nuevo

                    <h3 className=" fw-bold ">
                        Las Mejores Practicas</h3> <br></br> Contamos con diversas practicas las cuales nos permiten gestionar diversos clientes y hacerlos alcanzar sus metas.

                </p>




            </div>
        </div>
        <div className="col-md-6 ImgServicios imgPageServiciosPadding" >
            <img className="imgPageServicios" src={img2} />
        </div>

    </div>



      <Footer/>
    </Fragment>
  );
}
