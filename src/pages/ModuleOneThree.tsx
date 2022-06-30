import React, { useState, useEffect } from 'react'

import { Header } from '../components/Header'
import { Photo } from '../components/Photo'
import { Button } from '../components/Button'
import { ButtonModule } from '../components/ButtonModule'
import { ButtonStyledComponent } from '../components/ButtonStyledComponent'
import { ButtonTestProps } from '../components/ButtonTestProps'
import { ListData } from '../components/ListData'

import * as C from '../AppStyles';
import '../styles.css';
import Home from './Home'


function ModuleOneThree() {
  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(0);
  const [testNumber, setTestNumber] = useState(0);
  const [name, setName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [age, setAge] = useState('');
  const [show, setShow] = useState(false);
  

  let conteudoDoBotao = 'Fale aqui seu texto, por meio desta prop(propriedade)';
  

  let list = [
    {name: 'Gabriel', age: 20},
    {name: 'Samuel', age: 15},
    {name: 'Lara', age: 10},
    {name: 'Ester', age: 11},
    {name: 'Davi', age: 19},
  ]

  let listData = [
    {name: 'João', age: 30},
    {name: 'Victor', age: 20},
    {name: 'Felipe', age: 15},
    {name: 'Pedro', age: 50},
    {name: 'Luiza', age: 18},
  ]

  
  const addClick = () => {
    setNumber(number + 1)
    setTestNumber(number + 1)
  }

  const removeClick = () => {
    setNumber(number - 1)
    setTestNumber(number - 1)
  }

  const handleClick = () => {
    setClicked(true);
  }


  const handleButtonClick = () => {
    alert('O botao foi clicado!')
  }

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName( event.target.value );
  }
  const handleLastNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName( event.target.value );
  }
  const handleYearInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge( event.target.value );
  }

  const buttonEventAction = (txt: string) => {
    alert('Frase do app:'+txt);
  }

  const handleRevertText = () => {
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <Home />

      <Header title="Olá mundo!"  subtitle='eae' bgColor='#5F9EA0'/>
      <Header title="Outro texto" subtitle='eae' bgColor='#B0E0E6'/>


      <Photo legend="Google">
        <img src="http://www.google.com.br/google.jpg" alt='' />
      </Photo>

      <div>
        <button
          onClick={addClick}
          style={{
            backgroundColor: 'red',
            margin: '10px',
            color: '#FFF',
            padding: '10px 20px',
            border: '0'
          }} > - </button>
          O número é: {testNumber}
        <button
          onClick={removeClick}
          style={{
            backgroundColor: 'blue',
            margin: '10px',
            color: '#FFF',
            padding: '10px 20px',
            border: '0'
          }} > + </button>



        <br></br><button onClick={handleButtonClick}>Clique Aqui</button>

        <br></br>

        <ButtonTestProps conteudo={conteudoDoBotao} clickFn={buttonEventAction} /> 
        
        <br></br>
        <div className='form'>
          <div className='form-header'>Exercicio Formulário</div>
          Nome:
          <input type="text" placeholder="Digite Seu Nome"  value={name} onChange={handleNameInput} />
          Sobrenome:
          <input type="text" placeholder="Digite Seu Sobrenome" value={lastName} onChange={handleLastNameInput} />
          Idade:
          <input type="number" placeholder="Digite Sua Idade" value={age} onChange={handleYearInput} maxLength={3} />

          <br></br>

          Olá {name.toUpperCase()} {lastName}, tudo bem?<br/>
          Você tem {age} anos.
        </div>

        <div>
          <h2>Lista de presença</h2>
          <ul>
            {list.map((item, index) => (
              <li key={index}>Seu nome é {item.name}, e sua idade é {item.age} anos.</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Lista de presença.(Usando componente)</h2>
          <ul>
            {listData.map((item, index) => (
              <ListData key={index} data={item} />
            ))}
          </ul>
        </div>
        <div>
          <button onClick={() => setShow(true)}>Mostrar</button>
          <button onClick={() => setShow(false)}>Ocultar</button>
          <button onClick={handleRevertText}>{show ? 'Ocultar' : 'Mostrar'}</button>

          <button onClick={() => setShow(!show)}>Ambos simplificado</button>
          <button onClick={() => setShow(show === false ? true : false)}>Ambos if ternario</button>
          <button onClick={handleRevertText}>Ambos if</button>

          {show === true &&  
          <div>
            Bla Bla Bla...
          </div>
          }
        </div>

        <hr></hr><br></br><h1>Formas de Estilizar </h1>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: clicked ? 'red' : 'blue',
            color: '#FFF',
            padding: '10px 20px',
            border: '0',
          }}>INLINE DINAMICO</button>

        <button className='botao'>STYLESSHEET</button>

        <Button />

        <ButtonModule />

        <ButtonStyledComponent />

        <C.Container bgColor="grey">
          <span>Texto do componente. (forma 2 de styledComponent)</span>
          <a href='null' className='link'>Link Qualquer</a>

          <C.Botao bg='#FF0000' small>Botao Grande</C.Botao>
          <C.Botao bg='#00FF00' small>Botao Pequeno</C.Botao>
        </C.Container>

        <span>{number}</span><br />
        <button onClick={addClick}>+</button>
        <button onClick={removeClick}>-</button>


        <h1> Css Tailwind </h1>
        <p>Descomente o código para visualiza-lo! </p>
          (obs: no arquivo app.tsx e no index.css)
        <hr></hr>

        <div className='bg-blue-900 text-white p-5 text-xl font-bold flex flex-col text-center md:flex-row md:justify-between' >
          Css Tailwind

          <button className='bg-green-400 hover:bg-green-700 text-black hover:text-white p-2 rounded-xl ml-2 mt-3 md:ml-3 md:mt-0'>Clique aqui</button>
        </div>

        <div className='bg-blue-500 p-5' >
          <input
            className='outline-none border-transparent bg-white p-3 rounded-xl focus:ring-2 focus:ring-blue-700'
            type='text'
            placeholder='Digite alguma coisa'
          />
          <button className='ml-2 p-3 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-800'>Clique aqui</button>
        </div>

        <hr></hr>
      </div>
    </div>
  )
}

export default ModuleOneThree;