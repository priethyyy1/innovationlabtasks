const albums = [
  { id: 1, title: "Vande Mataram", info: { year: 1997, language: "Hindi" } },
  { id: 2, title: "Roja", info: { year: 1992, language: "Tamil" } },
  { id: 3, title: "Slumdog Millionaire", info: { year: 2008, language: "English" } }
];

console.log(albums[0].title);
console.log(albums[2].info.language);

function subtractAll(...nums) {
  return nums.reduce((total, n) => total - n);
}
console.log(subtractAll(100, 20, 10));

const spaceMissions1 = ["Apollo 11", "Voyager 1"];
const spaceMissions2 = ["Mars Rover", "Hubble Telescope"];
const allMissions = [...spaceMissions1, ...spaceMissions2];
console.log(allMissions);

const composer = { id: 501, name: "A. R. Rahman", country: "India" };
const composerCopy = { ...composer };
console.log(composerCopy);

function showAlbum({ title, info: { year, language } }) {
  console.log(`Album: ${title}, Year: ${year}, Language: ${language}`);
}
showAlbum(albums[0]);
showAlbum(albums[1]);