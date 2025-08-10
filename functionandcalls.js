const composer1 = { name: "A. R. Rahman" };
const composer2 = { name: "Ilaiyaraaja" };

function announceAlbum(album, year) {
  console.log(`${this.name} released the album "${album}" in ${year}`);
}

announceAlbum.call(composer1, "Vande Mataram", 1997);
announceAlbum.call(composer2, "Thalapathi", 1991);

announceAlbum.apply(composer1, ["Roja", 1992]);
announceAlbum.apply(composer2, ["Nayakan", 1987]);

const boundAlbum = announceAlbum.bind(composer1);
boundAlbum("Slumdog Millionaire", 2008);
boundAlbum("99 Songs", 2021);