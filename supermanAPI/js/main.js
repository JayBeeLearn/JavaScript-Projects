const supermanImageDiv = document.getElementById("supermanImage");
const newHeroBtn = document.getElementById("newHero");
const heroName = document.getElementById("heroName");
const intelligenceDiv = document.getElementById("intelligence");
const speedDiv = document.getElementById("speed");
const heroStats = document.getElementById("heroStats");
const searchInput = document.getElementById("input");
const searchBtn = document.getElementById("searchHero");

const BASE_TOKEN = "3026429667661044";
const randomNumber = () => {
  random = Math.floor(Math.random() * 731) + 1;
  //   console.log('1', random);
  return random;
};

// console.log('3', randomNumber());

const getRandomSuperman = (id, name) => {
  fetch(`https://superheroapi.com/api.php/${BASE_TOKEN}/${randomNumber()}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      superHero = json;
      showStatsInfo(superHero);

      // heroName.innerText = `${json.name}`;
      // supermanImageDiv.innerHTML = `<img src="${json.image.url}" width='300' height='300'/> ${stats}`;
    });
};

newHeroBtn.onclick = () => getRandomSuperman(randomNumber);

// console.log(input)

const searchSuperman = (name) => {
  fetch(`https://superheroapi.com/api.php/${BASE_TOKEN}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      hero = json.results[0];
      // heroName.innerText = `${name}`;
      // const name = hero.name
      // console.log(hero)
      showStatsInfo(hero);
      // intelligenceDiv.innerText = hero.powerstats.intelligence;
      // speedDiv.innerText = hero.powerstats.speed;
      // powerDiv.innerText = hero.powerstats.power;
      // supermanImageDiv.innerHTML = `<img src="${hero.image.url}" width='300' height='300'/>`;
    });
};

const showStatsInfo = (character) => {
  const name = `${character.name}`;
  const img = `<img src="${character.image.url}" width='300' height='300'/>`;

  const stats = Object.keys(character.powerstats).map((stat) => {
    return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]} </p>`;
  }).join("")

  heroName.innerHTML = `<h2> Name: ${name} </h2>`
  heroStats.innerHTML = `${stats}`
  supermanImageDiv.innerHTML = `${img}`;

  // return stats.join("");
};

searchBtn.onclick = () => {
  // console.log(searchInput.value)
  searchSuperman(searchInput.value);
};

//   fetch(`https://superheroapi.com/api.php/3026429667661044/245`)

console.log(localStorage);
