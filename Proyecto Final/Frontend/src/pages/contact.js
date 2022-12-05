import React from 'react';

import Footer from '../component/Footer';

import responsive from '../img/responsive.png';



export default function Processes() {
  return (
    <>



<div className="parallax">
        <div className="px-4 py-5  text-center paddinParalax">
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold textColorParalax">
                Contáctanos</h1>

        </div>
    </div>




    <div className="col-md-12 row headerStylePadding " >
        <div className="px-4 py-5  text-center paddingtopcontact" >
            <img className="imgHeader" src={responsive} height="70"/>
            <h1 className="display-5 fw-bold ">
                Servicios Digitales</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 ">
                    Contacte con nuestro equipo para un mejor acesoramiento
                </p>

            </div>

        </div>

    </div>
    <div className="container headerStylePadding" >
        <div className="row g-5">
            <div className="">
                <form className="needs-validation" novalidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="Name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>

                        </div>

                        <div className="col-sm-6">
                            <label for="Apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>

                        </div>

                        <div className="col-12">
                            <label for="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>

                        </div>

                        <div className="col-12">
                            <label for="address" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>

                        </div>


                        <div className="col-md-5">
                            <label for="country" className="form-label">Ciudad</label>
                            <select className="form-select" id="country" required="">
                  <option value="">Seleccione...</option>
                  <option>Buenos Aires</option>
                </select>

                        </div>

                        <div className="col-md-4">
                            <label for="state" className="form-label">Barrio</label>
                            <select className="form-select" id="state" required="">
                                <option value="">Seleccione...</option>
                  <option value="">Buenos Aires</option>
                  <option>Caba</option>
                </select>

                        </div>

                        <div className="col-md-3">
                            <label for="zip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                            <div className="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 margintopcomentarios" >
                        <label for="address" className="form-label">Comentarios</label>
                        <textarea className="form-control" id="address" required=""></textarea>

                    </div>

                    <hr className="my-4"/>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address"/>
                        <label className="form-check-label" for="same-address">Desea Recibir Informacion de nuestro nuevos productos</label>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="save-info"/>
                        <label className="form-check-label" for="save-info">Acepta que nos comuniquemos con ustes en un horario de 8:00 a 16:00</label>
                    </div>

                    <button className="w-100 btn btn-primary btn-lg margintopenviar" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>

      <Footer/>
    </>
  );
}
