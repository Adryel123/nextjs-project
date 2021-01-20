import { useState } from 'react'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(0)

  function adicionarContador() {
    setContador(contador + 1)
  }

  function diminuirContador() {
    setContador(contador - 1)
  }

  return (
    <div>
      <button onClick={diminuirContador}> - </button>
      <div>{contador}</div>
      <button onClick={adicionarContador}> + </button>
    </div>
  )
}

export default Home