const { Router } = require("express");
const characterRoute = require("./character");
const episodeRoute = require("./episode");
const router = Router();

router.use("/characters", characterRoute);
router.use("/episodes", episodeRoute);

// Configurar los routers

module.exports = router;
