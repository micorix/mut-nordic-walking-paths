const converter = require("@tmcw/togeojson");
const fs = require("fs");
const DOMParser = require("xmldom").DOMParser;
const path = require("path");

const INPUT_DIR = "./input";
const OUTPUT_DIR = "./output";

const convertFile = (name) => {
  const parsedGPX = new DOMParser().parseFromString(
    fs.readFileSync(path.join(INPUT_DIR, `${name}.gpx`), "utf8")
  );
  const geojson = converter.gpx(parsedGPX);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${name}.json`),
    JSON.stringify(geojson)
  );
};

const filesToConvert = [
  "petla",
  "ruiny_wiezy",
  "wokol_strzelnicy",
  "za_radiowa",
];

filesToConvert.forEach(convertFile);
