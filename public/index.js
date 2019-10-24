/* eslint-disable no-undef */
// Establish a Socket.io connection
const socket = io();
// Initialize the application through Socket.io
const app = feathers();

// Connect to the server using the Socket.io connection
app.configure(feathers.socketio(socket));

// All the code will go here
