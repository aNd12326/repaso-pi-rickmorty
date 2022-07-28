import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, fetchEpisodes } from "../../redux/actions";

const Form = () => {
  const episodios = useSelector((state) => state.episodes);
  const dispatch = useDispatch();

  const [character, setCharacter] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
    episodes: [],
  });

  const [errorBoton, setErrorBoton] = useState(true);

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  }

  function handleEpisodes(e) {
    setCharacter({
      ...character,
      episodes: [...new Set([...character.episodes, e.target.value])],
    });
    console.log(character);
  }

  function handleOnSubmit(e) {}

  function validar(datos) {}

  useEffect(() => {
    dispatch(fetchEpisodes());
    return () => {
      //todo lo que suceda dentro del return es cuando se desmonta el componente
      dispatch(clearPage());
    };
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Origin: </label>
          <input
            type="text"
            name="origin"
            value={character.origin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Species: </label>
          <input
            type="text"
            name="species"
            value={character.species}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={character.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Episodes</label>
          <select
            name="episodes"
            value={character.episodes}
            onChange={handleEpisodes}
          >
            {episodios.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={errorBoton ? true : false}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
