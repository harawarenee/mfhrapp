const axios = require('axios');
const mhfrService = require('../services/mhfrService');

exports.createFacility = async (req, res) => {
  const { name, location, type } = req.body;
  const exists = await mhfrService.checkFacilityExists(name);

  if (exists) {
    return res.status(400).json({ message: 'Facility already exists in MHFR' });
  }

  const response = await axios.post('https://zipatala.health.gov.mw/api/facilities', { name, location, type });
  res.status(201).json(response.data);
};

exports.getFacilities = async (req, res) => {
  const response = await axios.get('https://zipatala.health.gov.mw/api/facilities');
  res.json(response.data);
};

exports.archiveFacility = async (req, res) => {
  const { id } = req.params;
  await axios.patch(`https://zipatala.health.gov.mw/api/facilities/archive/${id}`);
  res.status(204).send();
};
