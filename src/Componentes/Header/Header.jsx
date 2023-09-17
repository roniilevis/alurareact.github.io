import './Header.css';
import logo from './logo.png';



const Header = ()=> {
    return  <div className='Header-contenedor'>
          <div className="header_titulo-imagen">
          <img id='header-logo' src={logo}/>
          <h1 id='header-titulo'>Bienvenidos a aluraflix</h1>
          </div>
    </div>
}


export default Header