export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  ).then(response => {
    // console.log(response);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(country => {
//       if (country.length > 10) {
//         console.log('Too many matches found. Please enter a more specific name.');
//       }
//     })
//     .catch(error => console.log('Oops, there is no country with that name'));
// }
// // console.log(response);
// if (response.status !== 200) {
//   throw new Error(response.status)
//   // console.log(response.status);
//   return response.json();
// })
// .then(country => {
//   // console.log(country);
//   if (country.length > 10) {
//     console.log('Too many matches found. Please enter a more specific name.');
//   }
// })
// .catch(error => {
//   Notiflix.Notify.failure('Oops, there is no country with that name');
// });
// .catch(error => {
//   console.log(error);

// if (response.status !== 200) {
//   throw new Error(console.log('Oops, there is no country with that name'));
// }

// console.log('Oops, there is no country with that name');
// });
// }

// ====================================================

// export function fetchCountries(name) {
//   const url = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`;
//   return fetch(url).then(response => {
//     if (response.status !== 200) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// }
// ======================================================

// export function fetchCountries(name) {
//   const url = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`;
//   return fetch(url).then(response => {
//     console.log(response);
//     // if (response.status !== 200) {
//     //   throw new Error(response.status);
//     // }
//     return response.json();
//   });
// }
