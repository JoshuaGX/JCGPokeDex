var pokemonRepository = (function() {
  var repository = [
    {name: 'Charmander',
    height: 0.6,
    type: ['Fire']
     },
    {name: 'Poliwrath',
    height: 1.3,
    type: ['Water', 'Fighting'],
     },
    {name: 'Gengar',
    height: 1.5,
    type: ['Ghost', 'Poison'],
     }
  ]

  function getAll() {
    return repository;
  }

  function add(pokemon) {
  	if (typeof(pokemon) === 'object') {
  		if (isTrueEqualKeysObj (pokemonRepository.getAll()[0], pokemon)) {
  			repository.push(pokemon);
  		} else {
  			console.log('Please ensure your pokemon has the correct format: {name: (string), height: (number), types: [array of strings]}');
  		}
  	} else {
  		console.log('Please add an object');
  	}
  }

  return {
    getAll: getAll,
    add: add
  };
})();

function isTrueEqualKeysObj (obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length)
    var i = 0
    while (i < Object.keys(obj1).length && (Object.keys(obj1)[i] === Object.keys(obj2)[i])) {
      i++;
    }
}

var allPokemon = pokemonRepository.getAll();

function getHeightDescription(singlePokemon) {
  return singlePokemon.height + 'm';
}

function getHeightSpecial(singlePokemon) {
  if (singlePokemon.height >= 1.4) {
    return 'Look how big it is!';
  } else if (singlePokemon.height <= 0.9) {
    return "It's so cute!";
  } else {
    return null;
  }
}

function getType(singlePokemon) {
  return singlePokemon.type;
}

function getDescription(singlePokemon) {
  return singlePokemon.name + ' (' + getHeightDescription(singlePokemon) + ', ' + getType(singlePokemon) + ")";
}

function printPokemonDescription(singlePokemon) {
  if (getHeightSpecial(singlePokemon)) {
    return getDescription(singlePokemon) + ' - ' + getHeightSpecial(singlePokemon);
  } else {
    return getDescription(singlePokemon);
  }
}

allPokemon.forEach(function(pokemon) {
  document.write(printPokemonDescription(pokemon) + '<br>');
});
