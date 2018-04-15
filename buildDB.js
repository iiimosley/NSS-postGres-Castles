'use strict';

let models = require('./models');
let beaches = require('./seeders/data/beaches');
let castles = require('./seeders/data/castles');
let lifeguards = require('./seeders/data/lifeguards');
let tools = require('./seeders/data/tools');

models.sequelize.sync({ force: true })
.then(() => models.Beach.bulkCreate(beaches))
.then(() => models.Lifeguard.bulkCreate(lifeguards))
.then(() => models.Tool.bulkCreate(tools))
.then(() => models.Castle.bulkCreate(castles))
.then(() => process.exit());