const express = require("express");
const router = express.Router();
const {
  getAllIndustries,
  getIndustryBySlug,
} = require("../controllers/industries.controller");

router.get("/", getAllIndustries);
router.get("/:slug", getIndustryBySlug);

module.exports = router;
