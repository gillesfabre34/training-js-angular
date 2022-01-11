
const articles = [
  {name: "oranges", quantity: 2},
  {name: "apples", quantity: 3},
  {name: "lemon", quantity: 4},
]

const nbArticles = articles.map(a => a.quantity).reduce((previous, current) => previous + current, 0);

console.log("Nb articles", nbArticles);
