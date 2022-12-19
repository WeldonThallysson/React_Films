import React from 'react';
import { Link } from 'react-router-dom';
import './estilos.css'

export default function Cabecalho() {
 return (
   <header>
    <Link className="logo" to={'/'}>React Filmes</Link>
    <Link className="favoritos" to={'/Favoritos'}>Meus Filmes</Link>
    </header>
  );
}