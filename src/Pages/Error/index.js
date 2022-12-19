import React from 'react';
import { Link } from 'react-router-dom';
import './estilos.css'
export default function Error() {
 return (
   <div className='pagina__error'>
     <h1>404 Ops!</h1>
     <h2>Página não encontrada</h2>
     <Link to={'/'}>Veja todos os filmes.</Link>   

   </div>
  );
}