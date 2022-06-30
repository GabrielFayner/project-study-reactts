import React, {ChangeEvent, useState, useEffect } from "react"

import '../styles.css';
import Home from "./Home"

function Module()  {
  const [mark, setMark] = useState('Nike')
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // useEffect(() => {
  //   console.log('Executou')
  // }, [mark])


    useEffect(() => {
        setFullName(`${name} ${lastName}`)
    }, [name, lastName])

  const handleMarkChange = () => {
      setMark('Adidas')
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }
  

  return (
      <div> 
          <Home />
          <div className="effect">
              Nome: {mark}
              <button onClick={handleMarkChange}>Clique aqui</button>
              <br />
              <input type='text' placeholder='Digite seu NOME' value={name} onChange={handleNameChange} />
              <input type='text' placeholder='Digite seu SOBRENOME' value={lastName} onChange={handleLastNameChange} />
              <p>Nome Completo: {fullName}</p>
          </div>    
      
      </div>
  )
}

export default Module