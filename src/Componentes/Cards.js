import React from "react";
import Card from "./Card";
import image1 from "../assets/Java.jpg";
import image2 from "../assets/docker.jpg";
import image3 from "../assets/Wind.jpg";
const cards = [
  {
    id: 1,
    title: "Curso de Java",
    image: image1,
    instructor: "Benito Samuel Lopez Razo",
  },
  {
    id: 2,
    title: "Curso de Docker",
    image: image2,
    instructor: "Angela Rios Luna",
  },
  {
    id: 2,
    title: "Curso de Windows",
    image: image3,
    instructor: "Valentin Jimenez Jarquin",
  },
];



export default function Cards() {
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {
        cards.map((c) => (
          <div className="col-md-4 key={cards.id}">
            <Card 
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            instructor={c.instructor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
