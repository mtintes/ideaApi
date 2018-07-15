var dotenv = require('dotenv');
var cfg = {};

dotenv.config({path: '.env'});

cfg.token = process.env.GHToken;
cfg.user = process.env.GHUser;
cfg.repo = process.env.GHRepo;

module.exports = cfg;
