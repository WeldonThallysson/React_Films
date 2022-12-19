import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../Components/Cabecalho';
import api from '../../Service/api';
import'./estilos.css'
export default function Home() {

     const [filme,setFilmes] = useState([])
     const [loading,setLoading] = useState(true)

     useEffect(() => {
      async function loadReq(){
         const response = await api.get("/movie/now_playing", {
          params: {
            api_key: "f2c1eea89a91d93ad7a98088c44311a9",
            language: "pt-BR",
            page: 1
          }
        })

        setFilmes(response.data.results)
        setLoading(false)
        console.log(response.data.results)
      }
       loadReq() 
     },[])


     if(loading) {

      return(
         <div className='loading'>
           <strong>Carregando ...</strong>
         </div>
      )
     }else { 



 return (
  <div className='container'>
  <div className='lista-filmes'>
    {filme.map((item) => {
      return (
        <article key={item.id}>
         <strong>{item.title}</strong>
         <img src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
          <Link to={`/filme/${item.id}`}>Acessar</Link>
       </article>

   )
    })}
   </div>
  </div>
  );
}
}