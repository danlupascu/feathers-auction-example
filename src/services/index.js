const auctions = require('./auctions/auctions.service.js');
const bids = require('./bids/bids.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(auctions);
  app.configure(bids);
};
