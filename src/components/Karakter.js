// Karakter bileşeniniz buraya gelecek
import React from 'react'

const Karakter = ({ people }) => {
  return people.map((e) => {
    <div>{e.results}</div>
  })
}

export default Karakter
