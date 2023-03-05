import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Karakter from './components/Karakter'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        setPeople(res.data)
        console.log("success!" + res + res.data)
      })
      .catch(err =>
        console.log(err)
      )
    axios.get(`https://swapi.dev/api/films/`)
      .then((res) => {
        setFilms(res.data);
        console.log("success!" + res + res.data)
      })
      .catch(err =>
        console.log(err)
      )
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {people && people.map((people, i) => {
        return (<Karakter key={i} people={people} films={films} />)
      })}
    </div>
  )
}

export default App;
