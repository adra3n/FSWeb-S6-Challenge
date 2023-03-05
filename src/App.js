import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Karakter from './components/Karakter'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState('')

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/').then((res) => {
      setPeople(res.data)
      console.log(res, res.data)
    })
  }, [people])

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakter people={people} />
    </div>
  )
}

export default App
