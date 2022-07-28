import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, fetchCharacters } from "../../redux/actions";
import Character from "../character";

const Home = () => {
  const characters = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    return () => {
      //todo lo que suceda dentro del return es cuando se desmonta el componente
      dispatch(clearPage());
    };
  }, [dispatch]);

  console.log(characters);

  return (
    <div>
      {characters.map((character) => (
        <Character
          name={character.name}
          origin={character.origin}
          species={character.species}
          image={character.image}
          key={character.id}
        />
      ))}
    </div>
  );
};

export default Home;
