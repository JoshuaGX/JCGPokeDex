var repository = [
  ['Charmander',
  0.6,
  ['Fire']],

  ['Poliwrath',
  1.3,
  ['Water', 'Fighting']],

  ['Gengar',
  1.5,
  ['Ghost', 'Poison']],
]


console.log (repository[0],repository[1],repository[2]);


for (var i = 0; i < repository.length; i++) {
  if (repository[i][1] > 1.4) {
    document.write ('<p class="top_article">Wow - he is the biggest Pokemon</p>');
  }
}
  document.write ('<h2><a href="">' + repository[i],[0] + '</a></h2>');

  document.write ('<p class="p_small">Types: ');
  for (var j = 0; j < repository[i],[2].length; j++) {
    if (repository[i],[2],[j] == 'Fire') {
      document.write (' <span class="p_small">' + repository[i],[2],[j] + ',');
    }
    else if (repository[i],[2],[j] == 'Poison') {
      document.write (' <span class="p_small"' + repository[i],[2],[j] + ',');
    }
    else if (repository[i],[2],[j] == 'Ghost') {
      document.write (' <span class="p_small"' + repository[i],[2],[j] + ',');
    }
    else if (repository[i],[2],[j] == 'Water') {
      document.write (' <span class="p_small"' + repository[i],[2],[j] + ',');
    }
    else if (repository[i],[2],[j] == 'Fighting') {
      document.write (' <span class="p_small"' + repository[i],[2],[j] + ',');
    }
  }
  document.write ('</p>');
  document.write ('<br><br>');
