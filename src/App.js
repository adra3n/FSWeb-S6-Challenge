import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Karakter from './components/Karakter'
import Karakterler from './components/Karakterler'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [charMovies, setCharMovies] = useState([]);
  useEffect(() => {
    axios
      .all([axios.get('https://swapi.dev/api/people/'),
      axios.get(`https://swapi.dev/api/films/`)
      ])

      .then(axios.spread((peopleRes, filmsRes) => {
        setPeople(peopleRes.data)
        setFilms(filmsRes.data)
        // setCharMovies(films.filter((e) =>
        //   people.films.includes(e.title)));
        console.log("success!" + "people>" + peopleRes + peopleRes.data + "films>" + filmsRes)
      }))
      .catch(err =>
        console.log("err" + err)
      )

  }, []);



  return (
    <div className="App">
      <div>
        <h1>Karakterler</h1>
        <Karakterler people={people} charMovies={charMovies} films={films} />
      </div>
    </div>
  );
}

export default App;

