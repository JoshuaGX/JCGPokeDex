// The Array is Created
var pokeDex = [

// Charmander's information setup as nested object
  {name: 'Charmander',
  height: 0.6,
  type: ['Fire']
  },

// Poliwrath's information setup as nested object
  {name: 'Poliwrath',
  height: 1.3,
  type: ['Water', 'Fighting'],
   },

// Gengar's information setup as nested object
  {name: 'Gengar',
  height: 1.5,
  type: ['Ghost', 'Poison'],
  }
   ]

// Information added to the console
console.log(pokeDex[0],pokeDex[1],pokeDex[2]);

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
