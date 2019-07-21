var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return repository;
  }

  function add(pokemon) {
  	if (typeof(pokemon) === 'object') {
//  		if (isTrueEqualKeysObj (pokemonRepository.getAll()[0], pokemon)) {
  			repository.push(pokemon);
//  		} else {
//  			console.log('Please ensure your pokemon has the correct format: {name: (string), height: (number), types: [array of strings]}');
//  		}
  	} else {
  		console.log('Please add an object');
  	}
  }

  function addListItem(pokemonObject) {
    var $pokemonList = document.querySelector('.pokemon-list');
    var $newListItem = document.createElement('li');
    var $newButton = document.createElement('button');

    $newListItem.setAttribute('class', 'pokemon-list__item');
    $newButton.setAttribute('class', 'list-item__button');
    $newListItem.appendChild($newButton);
    $pokemonList.appendChild($newListItem);
    $newButton.innerText = pokemonObject.name;
    $newButton.addEventListener('click', function(event) {
        showDetails(pokemonObject);
      });
    }

    function loadList() {
    		return fetch(apiUrl).then(function (response) {
    			return response.json();
    		}).then(function(json) {
    			json.results.forEach(function (item) {
    				var pokemon = {
    					name: item.name,
    					detailsUrl: item.url
    				};
    				add(pokemon);
    			});
    		}).catch(function (e) {
    			console.error(e);
    		})
    	}

    	function loadDetails(item) {
    		var url = item.detailsUrl;
    		return fetch(url).then(function (response) {
    			return response.json();
    		}).then(function (details) {
    			item.imageUrl = details.sprites.front_default;
    			item.heigth = details.height;
    			item.types = Object.keys(details.types);
    	}).catch(function (e) {
    		console.error(e);
    	});
    	}

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
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
pokemonRepository.loadList().then(function() {
allPokemon.forEach(function(pokemonObject) {
  pokemonRepository.addListItem(pokemonObject);
});
});

function showDetails(pokemonObject) {
    pokemonRepository.loadDetails(pokemonObject).then(function () {
  console.log(pokemonObject);   });
}
