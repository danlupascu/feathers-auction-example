// Initializes the `bids` service on path `/bids`
const { Bids } = require('./bids.class');
const createModel = require('../../models/bids.model');
const hooks = require('./bids.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bids', new Bids(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bids');

  service.hooks(hooks);
};
