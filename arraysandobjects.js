const planets = ["Mercury", "Venus", "Earth", "Mars"];
const [firstPlanet, secondPlanet, , fourthPlanet] = planets;
console.log(firstPlanet);
console.log(secondPlanet);
console.log(fourthPlanet);

const musician = {
  name: "A. R. Rahman",
  genre: "Music Composer",
  awards: {
    oscars: 2,
    grammys: 2
  }
};

const { name, genre } = musician;
console.log(name, genre);

const { awards: { oscars, grammys } } = musician;
console.log(oscars, grammys);

console.log(musician.genre);
console.log(musician["name"]);

const awardKey = "oscars";
console.log(musician.awards[awardKey]);

const camera = { brand: "Canon", model: "EOS R5", price: 350000 };

for (let key in camera) {
  console.log(key, ":", camera[key]);
}

Object.keys(camera).forEach(key => {
  console.log(key, ":", camera[key]);
});

Object.entries(camera).forEach(([key, value]) => {
  console.log(key, ":", value);
});