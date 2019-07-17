var pokemonRepository = (function()) {
  var pokeDex = [
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
    return pokeDex;
  }

  function add(pokemon) {
    if (typeof(pokemon) === 'object') {
      pokeDex.push(pokemon);
    } else {
      console.log('Please add an object');
    }
  }

  return {
    getAll: getAll,
    add: add
  };
})();

// Information added to the console
pokeDex.forEach(function(field, index) {
  console.log(field);
});

// The biggest pokemon will have Wow, That's big next to it
for (var i = 0; i < pokeDex.length; i++) {
     if (pokeDex[i].height > 1.4) {
    result = document.write(pokeDex[i].name + " is a " + pokeDex[i].type + " type and is about " + pokeDex[i].height + " tall! - Wow, that's big. <br><br>");
  }

// The rest of the pokemon are listed on the page
    else {
    result = document.write(pokeDex[i].name + " is a " + pokeDex[i].type + " type and is about " + pokeDex[i].height + " tall!<br><br>");
  }
}
