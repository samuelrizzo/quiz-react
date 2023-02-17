import React from 'react'
import Quiz from '../img/quiz.svg'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div id="Welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para iniciar!</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome