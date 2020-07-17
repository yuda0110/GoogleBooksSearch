# Google Books Search (React)

### Overview
React-based Google Books Search app.
This assignment requires to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. 
Used Node, Express and MongoDB so that users can save books to review or purchase later.

Also use React routing and `socket.io` to create a notification that triggers whenever a user saves an book. 
(Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers notifies you that a new book was saved.)


![Google Books Search](./google-books-search-screenshot2.png)


### Links
- [Link to the page](https://yuko-google-books-search.herokuapp.com/)
- [Link to the code](https://github.com/yuda0110/GoogleBooksSearch)


### Tech/framework used

- JavaScript
- Node.js
- [Create React App](https://github.com/facebook/create-react-app)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [axios](https://www.npmjs.com/package/axios)
- [socket.io](https://www.npmjs.com/package/socket.io)
- [socket.io-client](https://www.npmjs.com/package/socket.io-client)


# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
