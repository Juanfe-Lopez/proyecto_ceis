import React, { useState, useEffect } from "react";
import "./voluntariados.css";
import { getFromFirebase, addToFirebase } from "../functions/firebasehelper";

function Voluntariados() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getFromFirebase("voluntariados");
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul className="products">
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="product">
              <img src={movie. img} />

              <a className="product-name" href={`/BlogPost/${movie.id}`}>
                {movie.Nombre}
              </a>

              <div className="product-price">{movie.Descripcion}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Voluntariados;
