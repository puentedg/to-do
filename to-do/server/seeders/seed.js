const db = require('../config/connection');
const { User, Todo } = require('../models');
const userSeeds = require('./userSeeds.json');
// const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    await Todo.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
