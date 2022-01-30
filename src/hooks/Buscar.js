import { useState, useEffect } from "react";

export const Buscar = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setloading] = useState(true);
  const peticion = async (busqueda = "dog") => {
    const url = "https://api.unsplash.com/";
    const auth = "&client_id=5dwipox9d_fjIYxuKUb7ujJ7ONspXoF0zmXdOsMG88A";
    let param = `search/photos?page=1&query=${encodeURI(busqueda)}`;

    if (busqueda === "") {
      param = "photos/?a=1";
    }
    const route = url + param + auth;
    const res = await fetch(route).catch((err) => {
      console.log(err);
    });
    const data = await res.json();
    if (data.results) {
      setImages(data.results);
    } else setImages(data);

    setloading(false);
  };
  const handleSumbmit = (e) => {
    setloading(true);
    e.preventDefault();
    setInput(e.target[0].value);
  };
  useEffect(() => {
    peticion(input);
  }, [input]);
  return { images, handleSumbmit, loading };
};
