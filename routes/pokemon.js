const express = require('express');
const router = express.Router();
const fs = require('fs');

//function to read json file from data folder
const readPokemon = (fileName) => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
  return fileContent;
};

//route to get list of pokemon cards
router.get('/', (req, res) => {
  const pokemonList = readPokemon('pokemon');
  res.json(pokemonList);
});

//route to get pokemon data by id
router.get('/:id', (req, res) => {
  const pokemonDetails = readPokemon('pokemon-details');
  const pokemonDetail = pokemonDetails.find((poke) => poke.id === req.params.id);
  res.json(pokemonDetail);
});

//route to order history
router.get('/history', (req, res) => {
  const pokemonHistory = readPokemon('pokemon-history');
  res.json(pokemonHistory);
});

// //route to post pokemon data to buy history.
// router.post('/history', (req, res) => {
//   let pokemonList = readPokemon('pokemon');
//   const newVideo = {
//     id: '601f1bc5-b8bf-49ec-b163-48fc2984f8fb',
//     title: req.body.title,
//     channel: 'Mad Hat Pirates',
//     image: 'http://localhost:8080/image9.jpeg',
//   };
//   videos.push(newVideo);
//   fs.writeFileSync('./data/videos.json', JSON.stringify(videos));
//   res.json(videos)
// })



module.exports = router;