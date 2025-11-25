import React from "react";
import CardContainer from "./CardContainer";

export const cards = [
  {
    id: 1,
    name: "Rishu Kumar",
    title: "Frontend Developer",
    description:
      "Skilled in React, JavaScript, and UI development. Loves building clean and fast interfaces.",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    title: "UI/UX Designer",
    description:
      "Creates beautiful and user-friendly designs with a focus on simplicity and usability.",
  },
  {
    id: 3,
    name: "Arjun Verma",
    title: "Backend Engineer",
    description:
      "Expert in Node.js, APIs, and database management. Builds secure and scalable systems.",
  },
  {
    id: 4,
    name: "Natasha Mehra",
    title: "Mobile App Developer",
    description:
      "Develops Android apps with smooth UI and integrates modern features using Kotlin & React Native.",
  },
];


const First = () => {
  return (
    <div className="bg-green-100 min-h-screen p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <CardContainer
          key={card.id}
          name={card.name}
          title={card.title}gf
          description={card.description}
        />
      ))}
    </div>
  );
};

export default First;
