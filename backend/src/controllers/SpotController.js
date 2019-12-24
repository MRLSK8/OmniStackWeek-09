const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { price, company, techs } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ Error: 'User does not exist!' });
    }

    const spot = await Spot.create({
      techs: techs.split(',').map(tech => tech.trim()),
      thumbnail: filename,
      user: user_id,
      company,
      price
    });

    return res.json(spot);
  }
};
