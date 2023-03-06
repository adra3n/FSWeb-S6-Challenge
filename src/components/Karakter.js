// Karakter bileşeniniz buraya gelecek
import React, { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';




const Karakter = ({ people, films, charMovies }) => {

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
    <AccordionItem key={people.id}>
      <AccordionHeader targetId={people.name} key={people.id}  > {people.name} </AccordionHeader>
      <AccordionBody accordionId={people.name} key={people.id}>
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
              <AccordionItem key={index}>
                <AccordionHeader targetId={movie} key={index}> <span class="text-uppercase" >{movie}</span> </AccordionHeader>
                <AccordionBody accordionId={movie} key={index}>
                  <h6>{movie}</h6>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* <>
          <div>
            {charMovies && charMovies.map((movie, index) => (
              <Accordion open={opener} toggle={toggler} key={index}>
                <AccordionItem key={index}>
                  <AccordionHeader targetId={movie} key={index}> <span class="text-uppercase" >{movie.title}</span> </AccordionHeader>
                  <AccordionBody accordionId={movie} key={index}>
                    <h6>{movie.title}</h6>

                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            ))
            }
          </div>
        </> */}
      </AccordionBody>

    </AccordionItem>
  </Accordion>
  </div >
}


export default Karakter
