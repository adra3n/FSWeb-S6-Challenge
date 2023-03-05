// Karakter bileşeniniz buraya gelecek
import React from 'react'

const Karakter = ({ people, films, key }) => {
  return
  (<div >
    <p>  name: {people.results.name}</p>
    <p>   gender: {people.results.gender} </p>
    <p> height: {people.results.height} </p>
    <p> mass: {people.results.mass} </p>
    <p> homeworld: {people.results.homeworld} </p>
    {people.results}
  </div>)

}

export default Karakter
