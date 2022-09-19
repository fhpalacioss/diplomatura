 import React, {Fragment} from 'react';
import Footer from '../component/Footer';


 import responsive from '../img/responsive.png'
import office from '../img/office.png';



export default function Home() {
    
  return (

    <Fragment>
   
      <div className="parallax">
        <div className="px-4 py-5  text-center paddinParalax">
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold textColorParalax">
                ¿Quiere Impulsar Su Negocio Hoy?</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 textColorParalax">
                    Nuestros servicios tecnológicos pasan por altos estándares de control de calidad
                </p>
            </div>
        </div>
    </div>

    <div className="col-md-12 row headerStylePadding">
        <div className="col-md-6 text-center contenedorInlineBlock ">
            <h1 className="display-5 fw-bold display5marginTop">
                Nosotros</h1>
            <div className="col-lg-9 mx-auto ">
                <p className="lead mb-4 ">
                    Nuestros servicios tecnológicos pasan por altos estándares de control de calidad y están afianzados por una profunda experiencia y una larga trayectoria en las áreas de arquitectura e integración, así automatizamos procesos implementándolos sobre tecnologías
                    de información.<br>
                    </br> Desarrollo de software y servicios de estrategias de Marketing para optimizar su visibilidad en la red son parte de nuestra propuesta de servicios. Los portales Web se han convertido en la puerta de entrada para las empresas, en smartwebs
                    trabajamos bajo los estándares más avanzados de diseño intuitivo y contenido Web, haciendo especial énfasis en las últimas estrategias de SEO. Dinamismo, intuición y eficiencia van de la mano para cumplir las exigencias del usuario
                    final.
                </p>

            </div>
        </div>
        <div className="col-md-6 contenedorInlineBlock displayImgmarginTop">
            <img className="imgNosotros" src={office}/>
        </div>

    </div>

      <Footer/>
    </Fragment>
  );
}


