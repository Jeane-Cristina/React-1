import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const objetivos =[
        'Emagrecimento',
        'Hipertrofia',
        'Diversão',
        'Saúde'
    ]

    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [imagem,setImagem] = useState('')
    const [objetivo,setObjetivo] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            idade,
            imagem,
            objetivo
        })
        setNome('')
        setIdade('')
        setImagem('')
        setObjetivo('')
    }

    return(
    <section className='formulario'>    
        <form onSubmit={aoSalvar}>
            <h2>Inscreva-se para construirmos um treino adequado as suas necessidades!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome"
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Idade"
                    placeholder="Digite sua idade"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}/>

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Objetivo" 
                    itens={props.objetivos}
                    valor={objetivo}
                    aoAlterado={valor => setObjetivo(valor)}/>
               
                <Botao>
                    Inscreva-se!
                </Botao>
        </form>
    </section>    
    )

}

export default Formulario