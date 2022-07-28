const axios = require("axios");
const { Episode } = require("../db");

const getAllEpisodes = async (req, res) => {
  try {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    const dataEpisodes = data.results.map((e) => {
      return {
        name: e.name,
      };
    });
    // console.log(dataEpisodes);
    // await Episode.findOrCreate(dataEpisodes);
    dataEpisodes.map((e) => {
      Episode.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });
    // console.log(dataEpisodes);
    res.status(200).json(dataEpisodes);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllEpisodes };
