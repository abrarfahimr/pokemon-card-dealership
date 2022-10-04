# Pokemon Card Dealership

A fun ecommerce project

Video demo: https://youtu.be/YM1i9z2bAu0

![Alt text](/Thumbnail.png)

## Description

Pokemon card dealership is an e-commerce platform that sells rare pokemon cards to customers. This project was part of the 24 hour pair programming hackathon at BrainStation. I paired up with my colleague Irene Xing to design a fun and interactive interface.

The project was done from scratch and mimics a database using node.js and express. The data has three json files. One for the list of pokemon cards, another for more details on each card, and the last was for order history. Using the GET and POST methods, we changed the states of components. The front end was build on react using components and routing. The goal of the site was to create an experience similar to how users would shop online and receive feedback on changes to their order history. 

Overall we enjoyed spending countless of hours figuring out what we wanted to do and this proved to be a big learning experience for us. Although this is far from becoming a finished project, it has room to grow. One area of oppurtunity would be using the DELETE method to remove the quantity of cards left in the database. I would love to come back and add more features to it whenever I can. 

### Dependencies
cors, dotenv, express, nodemon, express, node.js, react, react-router-dom, axios

### Installing
* Download the file.
* On both the backend and frontend folder
```
npm i
```
* On both the backend and frontend folder create an .env file:
For frontend set a host url. Host url can be any local host eg. "http://localhost:8000". PORT MUST MATCH BACKEND PORT.
```
REACT_APP_API_URL= host url 
```
For backend set a port number. This can be any host number eg. 8000, 8080, 5000, etc.
```
PORT= host number
```

* One the backend folder start the server by writing the code:
```
npx nodemon index.js
```
* Lastly run the react app using this code:
```
npm start
```
## Co-Authors
Irene Xing: [Github](https://github.com/Irenexing)
