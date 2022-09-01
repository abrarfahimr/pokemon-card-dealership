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

//route to get order history
router.get('/orders', (req, res) => {
  const pokemonOrder = readPokemon('pokemon-history');
  res.json(pokemonOrder);
});


module.exports = router;