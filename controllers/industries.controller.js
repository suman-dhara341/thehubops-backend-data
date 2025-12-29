const industriesData = require("../data/industries.json");

exports.getAllIndustries = (req, res) => {
  res.status(200).json(industriesData);
};

exports.getIndustryBySlug = (req, res) => {
  const { slug } = req.params;

  const industry = industriesData[slug];

  if (!industry) {
    return res.status(404).json({ message: "Industry not found" });
  }

  res.status(200).json(industry);
};
