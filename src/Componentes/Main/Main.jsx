import "./Main.css"
import BotonGet from "../Botones/BotonGet"
import Titulofront from "../Titulo/Titulo"

const Main = () => {
    return <div>
        <div className="Main-videocard">
        <iframe id='videocard-video' width="433px" height="260.85px" src="https://www.youtube.com/embed/ov7vA5HFe6w" title="Qué Significa Pensar Como Programador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Titulofront />
        <BotonGet />
        </div>
    </div>
}


export default Main