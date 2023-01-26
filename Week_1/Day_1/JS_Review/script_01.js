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
let entrepreneursList = []
entrepreneurs.forEach(entrepreneurs => entrepreneursList.push(entrepreneurs.first + " " + entrepreneurs.last))
console.log(entrepreneursList)
console.log("");
console.log("--------------------");
console.log("");

// 2️⃣
console.log(`Remplacer l'année de naissance par l'âge:`)
entrepreneurs.forEach(entrepreneur => {
  entrepreneur.age = 2023 - entrepreneur.year;
  delete entrepreneur.year;
});
console.log(entrepreneurs);
console.log("");
console.log("--------------------");
console.log("");

// 3️⃣
console.log(`Voici les entrées renommés:`)
entrepreneurs.forEach(entrepreneur => {
  entrepreneur.firstName = entrepreneur.first;
  delete entrepreneur.first;
  entrepreneur.lastName = entrepreneur.last;
  delete entrepreneur.last;
});
console.log(entrepreneurs);
console.log("");
console.log("--------------------");
console.log("");

// 4️⃣
console.log(`Voici les entrepreneurs nés dans les années 70:`)
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur.age <= 53 && entrepreneur.age >= 44)
  {
    console.log(entrepreneur.firstName + " " + entrepreneur.lastName);
  }
});
console.log("");
console.log("--------------------");
console.log("");
