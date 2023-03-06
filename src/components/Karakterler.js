import React, { useState } from "react";
import Karakter from "./Karakter"
import {
  Input
} from 'reactstrap';

const Karakterler = ({ people, movies }) => {
  const [searchInput, setSearchInput] = useState("");

  return <div>

    <Input className="py-3 text-center my-5  border-spacing-4" type="text" placeholder="Search" id="example-search-input" onChange={e => { setSearchInput(e.target.value) }} />

    {people &&
      people.filter((e) => e.name.toLowerCase().indexOf(searchInput.trim().toLowerCase()) >= 0).map((e, key) =>

        <Karakter key={key} people={e} />

      )}

  </div>

};

export default Karakterler;