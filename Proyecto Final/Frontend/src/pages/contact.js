
import {useState, useEffect} from 'react'
import Footer from '../component/Footer';
import responsive from '../img/responsive.png';
import axios from 'axios';

const Contact = () => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      }
    
      const[sending,setSending] = useState(false);
      const[msg,setMsg] = useState('');
      const[formData,setFormData] = useState(initialForm);
   
      const handleChange = e =>{
        const {name, value}= e.target;
        setFormData(oldData => ({
           ...oldData,
           [name]:value
        }));
      }
   
      const handleSubmit = async e =>{
       e.preventDefault();
       setMsg('');
       setSending(true);
       const response = await axios.post('http://localhost:3000/api/contacto', formData);
       setSending(false);
       setMsg(response.data.message);
       if(response.data.error === false){
           setFormData(initialForm);
       }
      }
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
                <form action='/contacto' method='post' onSubmit={handleSubmit} className="needs-validation" novalidate="">
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name="nombre"  value={formData.nombre} onChange={handleChange} required=""/>

                        </div>
                        <div className="col-12">
                            <label for="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                            <input type="email" className="form-control" name="email" value={formData.email} id="email"  onChange={handleChange}/>

                        </div>

                        <div className="col-12">
                            <label for="telefono" className="form-label">telefono</label>
                            <input type="text" className="form-control" id="telefono" name='telefono' value={formData.telefono} onChange={handleChange} required=""/>

                        </div>

                    </div>

                    <div className="col-12 margintopcomentarios" >
                        <label for="mensaje" className="form-label">Comentarios</label>
                        <textarea className="form-control" id="mensaje" required="" name='mensaje'  value={formData.mensaje} onChange={handleChange}></textarea>

                    </div>

                    <hr className="my-4"/>

                   

                    <button className="w-100 btn btn-primary btn-lg margintopenviar" type="submit">Enviar</button>
                </form>
                {sending ? <p> enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
        </div>
    </div>

      <Footer/>
    </>
  )
}

export default Contact

