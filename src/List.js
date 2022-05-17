import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, changepeople] = useState(data);
  const changepeoplefunction = () => {
    changepeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { name, age, image } = person;
        return (
          <div className='person'>
            <img src={image} alt='' />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      <button onClick={changepeoplefunction}>Clear All</button>
    </>
  );
};

export default List;
