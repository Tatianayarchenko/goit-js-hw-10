// export function fetchCountries(name) {
//   const url = `https://restcountries.com/v3.1/name/${name}
//   ?fields=name,capital,population,flags,languages`;
//   return fetch(url).then(response => {
//     if (response.status !== 200) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  )
    .then(response => {
      return response.json();
    })
    .then(country => console.log(country))
    .catch(error => console.log(error));
}

// fetchCountries();

// `https://restcountries.com/v2/name/${name}?fields=?name,capital,population,flags,languages`,
