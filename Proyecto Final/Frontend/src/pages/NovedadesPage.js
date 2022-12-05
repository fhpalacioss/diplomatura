import {useState, useEffect} from 'react'
import Novedades from './../component/Novedades'
import axios from 'axios'

const NovedadesPage = (props) => {

  const[loading,setLoading] = useState(false);
  const[novedades, setNovedades] = useState([]);

  useEffect(()=>{

    const cargarNovedades = async() =>{
        setLoading(true);
        // const response = await axios.get(`${process.env. REACT_APP_API_URL}/api/novedades`)
       
        const response = await axios.get('http://localhost:3000/api/novedades');
        setNovedades([...response.data]);
        setLoading(false);

    }
    cargarNovedades();
  },[])

  return (
    <div>
        <h2 className='TextNovedadesCenter'>Novedades</h2>
        {
            loading ?( <p>Cargando...</p>) :
            (novedades.map(item => <Novedades key={item.id_nov} title={item.titulo} subtitle={item.subtitulo} image={item.imagen}
                body={item.cuerpo} />)
            )

        }
    </div>
  )
}

export default NovedadesPage