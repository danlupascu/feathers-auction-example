// Initializes the `auctions` service on path `/auctions`
const { Auctions } = require('./auctions.class');
const createModel = require('../../models/auctions.model');
const hooks = require('./auctions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/auctions', new Auctions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('auctions');

  service.hooks(hooks);
};
