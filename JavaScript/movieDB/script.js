// Create an array of movie objects. Each movie should have a title,
// rating, and hasWatched properties.
// Iterate through the array and print out something that looks like:

// YOU HAVE WATCHED "in Bruges" - 5 stars
// YOU HAVE NOT SEEN "Frozen" - 4.5 stars
// ...
// ***********************************************

let moviesDB = [
  { title: "Pride and Prejudies", rating: 5, hasWatched: true },
  { title: "Frozen", rating: 4.5, hasWatched: true },
  { title: "In Bruges", rating: 5, hasWatched: false },
  { title: "Green book", rating: 4, hasWatched: true },
  { title: "Some movie", rating: 2, hasWatched: false },
  { title: "Another movie", rating: 3, hasWatched: false },
  { title: "Green mile again", rating: 5, hasWatched: true }
];

// console.log("YOU HAVE WATCHED " + '"' + moviesDB.data[0].title + '"' + " - " + moviesDB.data[0].rating + " stars");
// console.log("*******************************");

// Iterate through the array:
// for (let i = 0; i < moviesDB.length; i++) {
//   // console.log(moviesDB.data[i]);
//   if (moviesDB[i].hasWatched == true) {
//     console.log("YOU HAVE WATCHED " + '"' + moviesDB[i].title + '"' + " - " + moviesDB[i].rating + " stars");
//   } else {
//     console.log("YOU HAVE NOT SEEN " + '"' + moviesDB[i].title + '"' + " - " + moviesDB[i].rating + " stars");
//   }
// }

// VERSION 2 (forEach):
moviesDB.forEach(function(movie) {
console.log(listConstruct(movie));
});

function listConstruct(movie) {
  let res = "YOU HAVE ";
  if(movie.hasWatched) {
    res = res + "WATCHED ";
  } else {
    res = res + "NOT SEEN ";
  }
  res = res + "\"" + movie.title + "\" - " + movie.rating + " stars";
  return res;
}
