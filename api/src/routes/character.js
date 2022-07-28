const { Router } = require("express");
const { Character, Episode } = require("../db");
const {
  getCharactersApi,
  getCharactersFromDB,
} = require("../controllers/characters.js");

const router = Router();

// router.get("/", getAllCharacters);
router.get("/", async (req, res) => {
  try {
    const apiInfo = await getCharactersApi();
    const DbInfo = await getCharactersFromDB();
    const infoTotal = apiInfo.concat(DbInfo);
    res.status(200).json(infoTotal);
  } catch (error) {
    console.log(error);
  }
});

router.post("/character", async (req, res) => {
  const { name, species, origin, image, episodes, created } = req.body;
  if ((!name, !species, !origin, !image))
    res.status(404).json({ msg: "error" });
  try {
    const createCharacter = await Character.create({
      name,
      species,
      origin,
      image,
      created,
    });

    //Traigo los episodios
    const getEpisodes = await Episode.findAll({
      where: {
        name: episodes,
      },
    });
    // le añado los episodios donde la creacion "createCharacter"
    createCharacter.addEpisodes(getEpisodes);

    res.status(200).json(createCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
