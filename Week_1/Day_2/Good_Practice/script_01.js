let entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1️⃣
console.log(`Voici le prénom et le nom de chaque entrepreneur:`)
const nameListArray = []
entrepreneurs.map(entrepreneur => {
  nameListArray.push(entrepreneur.first + " " + entrepreneur.last)
});
console.log(nameListArray)
console.log("");
console.log("--------------------");
console.log("");

// 2️⃣
console.log(`Remplacer l'année de naissance par l'âge:`)
entrepreneurs.map(entrepreneur => {
  entrepreneur.age = new Date().getFullYear() - entrepreneur.year;
  delete(entrepreneur.year)
});
console.log(entrepreneurs);
console.log("");
console.log("--------------------");
console.log("");

// 3️⃣
console.log(`Voici les entrées renommés:`)
const nameColumnArray = entrepreneurs.map(entrepreneur => {
  entrepreneur.firstName = entrepreneur.first;
  entrepreneur.lastName = entrepreneur.last;
  delete(entrepreneur.first);
  delete(entrepreneur.last);
});
console.log(entrepreneurs);
console.log("");
console.log("--------------------");
console.log("");

// 4️⃣
console.log(`Voici les entrepreneurs nés dans les années 70:`)
const seventiesArray = []
entrepreneurs.filter(entrepreneur => {
  if (entrepreneur.age <= 53 && entrepreneur.age >= 44)
  {
    seventiesArray.push(entrepreneur)
  }
});
console.log(seventiesArray)
console.log("");
console.log("--------------------");
console.log("");


