import React,{useState, useEffect} from 'react';
import { json, Link } from 'react-router-dom';
import './estilos.css'
import {toast} from 'react-toastify';
export default function Favoritos() {

   const [filme,setFilme] =  useState([])
    

   useEffect(() => {
      const minhalista = localStorage.getItem('@reactfilmes')
      setFilme(JSON.parse(minhalista) || [])
   },[])


   function excluirFilme(id){
    let filtroFilmes = filme.filter((item) => {
      return(item.id !== id)
    })

    setFilme(filtroFilmes)
    localStorage.setItem("@reactfilmes", JSON.stringify(filtroFilmes))
    toast.success('Filme Removido com Sucesso')
  }



 return (
   
   <div className='meus__filmes'>
    <h1>Favoritos</h1>
  
    <ul>
      {filme.map((item) => {
        return(
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
                 <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                 <button onClick={() => excluirFilme(item.id)}>Excluir</button>
            </div>
          </li>       
        )
      })}
    </ul>
   </div>
  
  );
}