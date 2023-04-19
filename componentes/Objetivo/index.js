import Colaborador from '../Colaborador'
import './Objetivo.css'

const Objetivo = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='objetivo' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} idade={colaborador.idade} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Objetivo