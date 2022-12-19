import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './estilos.css'
import api from '../../Service/api';
import {toast} from 'react-toastify'

export default function Filme() {
  const [filme,setFilme] = useState([])
  const [loading,setLoading] = useState(true)
  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
     async function loadFilmes(){
      const response = await api.get(`/movie/${id}`, {
        params:{
          api_key: "f2c1eea89a91d93ad7a98088c44311a9",
          language: "pt-BR",
            page:1
        }
      })
      .then((response) => {
        setFilme(response.data)
        setLoading(false);
        console.log(response.data)

      })
      .catch(() => {
        console.log('film e não encontrado')
        navigate('/',{replace: true})
        return
      })
     } 
     loadFilmes()

     return () => {
           
     }
  },[id,navigate])


  /*Abaixo função de salvar os filmes no LocalStorage*/
  
  function SalvarFilmes(){
      const minhaLista = localStorage.getItem('@reactfilmes')

      let filmesSalvos = JSON.parse(minhaLista)  || []

      const verifyFilmes = filmesSalvos.some((filmes) => filmesSalvos.id === filme.id)

        if(verifyFilmes){
          toast.warn('filmes ja esta na lista')
          return
        } 

        filmesSalvos.push(filme)
        localStorage.setItem("@reactfilmes", JSON.stringify(filmesSalvos))
        toast.success('filmes salvos com sucesso')


  }








  if(loading){
    return(
      <div className='loading'>
        <h1>Carregando Detalhes ...</h1>
      </div>
    )
  } else {
 return (
   <div className='conteiner'>
      <h1 className='titulo__Principal'>{filme.title}</h1>
      <img className="Imagem" src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
      <h3 className='Titulo__Sinopse'>Sinopse</h3>
      <span className='Descricao__Filme'>{filme.overview}</span>
      <strong className='avaliacao'>Availiação:{filme.vote_average} / 10</strong>
      
      <div className='area__btn'>
        <button  onClick={() => {SalvarFilmes()}}>Salvar</button>
        <button> 
          <a target='blank' rel="external"href={`https://youtube.com/results?search_query=${filme.title}Trailer`}>Trailer</a>
        </button>

      

    
      </div>
 
   </div>
  );
 }
}