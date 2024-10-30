"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [randomDogUrl, setRandomDogUrl] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);

  const getRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const url = data.message; // the URL of the dog Image
    setRandomDogUrl(url);
  };

  const getDogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message);
    setDogBreeds(breeds);
  };

  useEffect(() => {
    getRandomDog();
    getDogBreeds();
  }, []); // Run once when the component mounts

  return (
    <div>
      <h1> Week-8</h1>
      <div>
        <select className="bg-red-600">
          {dogBreeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <p>{randomDogUrl && <img src={randomDogUrl} alt="Dog Image" />}</p>
    </div>
  );
};

export default Page;
