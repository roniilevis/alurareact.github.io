import './Formulario.css'


const Formulario = () => {
    return <div>
        <body>
        <form className='Formulario-contenedor'>
        <input className='input-config' type='Text' placeholder='Titulo'/>

        <select className='input-config' name='Escoja una Categoria'>
            <option selected>Selecciona un curso</option>
            <option name="Front end" className='input-config'>Front end</option>
            <option name="Dev Ops" className='input-config'>Dev Ops</option>
            <option name="Back end" className='input-config'>Back end</option>
            <option name="Mobile development" className='input-config'>Mobile development</option>
            <option name="Data Sciente" className='input-config'>Data Sciente</option>
        </select>
        <input className='input-config' type="color" id="head" name="head" value="#e66465" placeholder='Color'/>
        <textarea className='input-config' id="w3review" name="w3review" rows="4" cols="50" placeholder='Descripcion'/>
        </form>
        </body>
    </div>
}

export default Formulario