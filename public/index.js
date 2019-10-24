/* eslint-disable no-undef */
// Establish a Socket.io connection
const socket = io();
// Initialize the application through Socket.io
const app = feathers();

// Connect to the server using the Socket.io connection
app.configure(feathers.socketio(socket));

const createAuctionRow = auction => {
  return `
    <div class="row">
      <div class="col-12 col-md-3">
       <img alt="placeholder" src="https://via.placeholder.com/300" class="img-thumbnail"/>
      </div>  
      <div class="col-12 col-md-9">
        <h5>${auction.title}</h5>
        <p>Starting price: $${auction.startingPrice}</p>
        <p>Buy now price: $${auction.buyNowPrice}</p>
      </div>
    </div>
  `;
};

const addAuction = auction => {
  const auctionsContainer = document.getElementById('auctions-container');
  auctionsContainer.innerHTML += createAuctionRow(auction);
};

const addAuctions = auctionsList => {
  auctionsList.forEach(addAuction);
};

// All the code will go here
const initialize = async () => {
  const result = await app.service('auctions').find({});
  addAuctions(result.data);
};

initialize();
