const url = 'https://gist.githubusercontent.com/Vikinov/e70aa947c5664302c691fcd94cb656f0/raw/namedcolors.csv';

// fetch(url).then(response => { // loads csv data
//   response.text().then(text => {
//     console.log(text);
//   });
// });

const fetchText = async (url) => {
  const response = await fetch(url)
  return await response.text()
}

fetchText(url).then(text => {
  const data = d3.csvParse(text)
  console.log(`Data contains ${data.length} rows.`)
  console.log(`Data contains ${data.columns.length} columns.`)
  console.log(`Data is ${Math.round(text.length / 1024)} kB.`)
})
