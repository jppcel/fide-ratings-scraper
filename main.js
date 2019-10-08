const fide_ratings = require("./fide_ratings");

if (process.argv.length < 3) {
    console.error("Arguments missing");
    process.exit(1);
}

fide_ratings.getElo(process.argv[2])
    .then((elo) => console.log(elo));

fide_ratings.getHistory(process.argv[2], true)
    .then((history) => console.log(history));