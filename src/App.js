import './App.css';
import { Banner } from './componentes/Banner/Banner';
import Formulario from './componentes/Formulário';
import { useState } from 'react';
import Objetivo from './componentes/Objetivo';

function App() {

  const objetivos = [
    {
      nome:'Emagrecimento',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Hipertrofia',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Diversão',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Saúde',
      corPrimaria:'#E06B69',
      corSecundaria:'#F0F8E2'
    }
  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario objetivos={objetivos.map(objetivo => objetivo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {objetivos.map(objetivo => <Objetivo
        key={objetivo.nome} 
        nome={objetivo.nome} 
        corPrimaria={objetivo.corPrimaria} 
        corSecundaria={objetivo.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.objetivo === objetivo.nome)}
        />)}
    </div>
  );
}

export default App;
