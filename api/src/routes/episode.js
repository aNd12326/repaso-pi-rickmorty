const { Router } = require("express");
const { getAllEpisodes } = require("../controllers/episodes.js");

const router = Router();

router.get("/", getAllEpisodes);

module.exports = router;
