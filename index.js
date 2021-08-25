const fetch = require("node-fetch");
const url = "https://mach-eight.uc.r.appspot.com/";

const data = async (totalHeight) =>
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      for (var i = 0; i < json.values.length; i++) {
        for (var j = i + 1; j < json.values.length; j++) {
          if (
            Number(json.values[i].h_in) + Number(json.values[j].h_in) ===
            Number(totalHeight)
          ) {
            console.log(
              `${json.values[i].first_name} ${json.values[i].last_name}     ${json.values[j].first_name} ${json.values[j].last_name}`
            );
          } else {
            console.log("No matches found");
          }
        }
      }
    });

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`app `, (height) => {
  data(height);
  readline.close();
});
