
import './App.css'
import UserCard from './components/UserCard'
import phrases from './data/phrases.json'
import { useState } from 'react'


function App() {

  const fondos = ["/img/fondo1.png", "/img/fondo2.png", "/img/fondo3.png", "/img/fondo4.png", "/img/fondo5.png", "/img/fondo6.png", "/img/fondo7.png", "/img/fondo8.png", "/img/fondo9.png", "/img/fondo10.png", "/img/fondo11.png", "/img/fondo12.png", "/img/fondo13.png", "/img/fondo14.png", "/img/fondo15.png"]
  
  const [ index, setIndex ] = useState(0)
  const changePhrase = () => {

    if( index < phrases.length - 1) {
      setIndex(index + 1)

    } else {
      setIndex(0)
    }
    
  }

  document.body.style = `background: url(${fondos[index]})`

  return (
    <>
      <article>
      <UserCard
      data={ phrases[ index ] }
      />
      
      <button className="button" onClick={changePhrase} >Provar mi suerte</button>
      
      </article>
      
    </>
  )
}

export default App
