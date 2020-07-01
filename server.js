const express = require("express");
const mongoose =require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Add routes, both API and View
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

io.on("connection", client => {
  client.on("new_notification", data => {
    console.log( `The book "${data.title}" has been saved!` );
    io.sockets.emit('show_notification', {
      title: data.title
    })
  });
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
