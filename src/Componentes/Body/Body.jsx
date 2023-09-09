import "./Body.css";
import aluraflix from './aluraflix.png';
import Header from "../Header/Header";
import Main from "../Main/Main";



const Body = () => {
    return <div>
        <body className="Cuerpo">
        <div>{<Header/>}</div>
        <img id='body_imagen' src={aluraflix} />
        <div>{<Main />}</div>

        </body>
    </div>

}

export default Body