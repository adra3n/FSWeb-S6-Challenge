// Karakter bileşeniniz buraya gelecek
import React, { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';




const Karakter = ({ people, movies, charMovies }) => {

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [opener, setOpener] = useState('1');
  const toggler = (id) => {
    if (opener === id) {
      setOpener();
    } else {
      setOpener(id);
    }
  };

  return <div>  <Accordion open={open} toggle={toggle} key={people.id}>
    <AccordionItem>
      <AccordionHeader targetId={people.name}> {people.name} </AccordionHeader>
      <AccordionBody accordionId={people.name}>

        <h6>Gender: <span className="fw-normal" >{people.gender}</span></h6>
        <h6>Height:<span className="fw-normal" > {people.height}</span></h6>
        <h6>Mass:<span className="fw-normal" > {people.mass}</span></h6>
        <h6>BirthYear:<span className="fw-normal" > {people.birth_year}</span></h6>
        <h6>Eye Color:<span className="fw-normal" >{people.eye_color}</span></h6>
        <h6>Hair Color:<span className="fw-normal" > {people.hair_color}</span></h6>
        <h6>Skin Color:<span className="fw-normal" > {people.skin_color}</span></h6>

        <div>
          {people.films.map((movie, index) => (
            <Accordion open={opener} toggle={toggler} key={index}>
              <AccordionItem>
                <AccordionHeader targetId={movie} > <span className="text-uppercase" >{movie}</span> </AccordionHeader>
                <AccordionBody accordionId={movie}>
                  <h6>{movie}</h6>

                </AccordionBody>
              </AccordionItem>
            </Accordion>
          ))}

          {/* {people &&
            people.films.map((movie) =>
              movies.filter((e) => e.title.include(movie)).map((movieFiltered, index) =>

                <Accordion open={opener} toggle={toggler} key={index} >
                  <AccordionItem>
                    <AccordionHeader targetId={movieFiltered} > <span className="text-uppercase" >{movieFiltered}</span> </AccordionHeader>
                    <AccordionBody accordionId={movieFiltered}>
                      <h6>{movieFiltered}</h6>
                      <p>{movieFiltered.opening_crawl}</p>

                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              ))} */}

        </div>

      </AccordionBody>

    </AccordionItem>
  </Accordion>
  </div >
}


export default Karakter
