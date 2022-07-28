const axios = require("axios");
const { Character, Episode } = require("../db");

const getCharactersApi = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const allCharacter = data.results.map((e) => {
      return {
        id: e.id,
        name: e.name,
        species: e.species,
        origin: e.origin.name,
        image: e.image,
      };
    });
    // console.log(allCharacter);
    return allCharacter;
  } catch (error) {
    console.log(error);
  }
};

const getCharactersFromDB = async (req, res) => {
  try {
    const db = await Character.findAll({
      include: {
        model: Episode,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    // const resum = db.map((e) => ({
    //   ...e.dataValues,
    //   episodes: e.episodes.map((e) => e.name),
    // }));
    // console.log(db);
    return db;
  } catch (error) {
    console.log(error);
  }
};

// const getAllCharacters = async (req, res) => {
//   const apiInfo = await getCharactersApi();
//   const DbInfo = await getCharactersFromDB();
//   const infoTotal = apiInfo.concat(DbInfo);
//   res.json(infoTotal);
// };

module.exports = { getCharactersApi, getCharactersFromDB };
