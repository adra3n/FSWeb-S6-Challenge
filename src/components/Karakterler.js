import React from "react";
import Karakter from "./Karakter"

const Karakterler = ({ people }) => {
  return (
    <>
      {people && people ? people.map((e, key) =>
        <Karakter key={key} people={e} />)
        : console.log("err > Karakterler")}
    </>
  );
};

export default Karakterler;