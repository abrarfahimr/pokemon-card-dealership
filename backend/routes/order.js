const express = require('express');
const router = express.Router();
const fs = require('fs');

//function to read json file from data folder
const readPokemon = (fileName) => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
  return fileContent;
};

//route to get order history
router.get('/', (req, res) => {
  const pokemonOrder = readPokemon('pokemon-history');
  res.json(pokemonOrder);
});

router.post('/', (req, res) => {
  let pokemonBuy = readPokemon('pokemon-history');
  const newPokemonBuy = {
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
  }
  pokemonBuy.push(newPokemonBuy);
  fs.writeFileSync('./data/pokemon-history.json', JSON.stringify(pokemonBuy));
  res.json(pokemonBuy);
})

module.exports = router;