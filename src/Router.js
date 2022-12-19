import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho";
import Home from '../src/Pages/Home/index'
import Filme from '../src/Pages/Filme/index'
import Error from "./Pages/Error";
import Favoritos from "./Pages/Favoritos";
export default function Router() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filme/:id" element={<Filme/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/Favoritos" element={ <Favoritos/> }/>
      </Routes>
    </BrowserRouter>
  )
}