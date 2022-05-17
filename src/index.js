import './css/styles.css';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

// function fetchCountries(name) {
//   // const a = fetch('https://restcountries.com/v3.1/name/{name}');

//   fetch('https://restcountries.com/v2/name/peru')
//     .then(response => {
//       return response.json();
//     })
//     .then(country => console.log(country))
//     .catch(error => console.log(error));
// }

fetchCountries('ukraine');

// https://restcountries.com/v2/name/united
// https://restcountries.com/v2/{service}?fields={field},{field},{field}
// https://restcountries.com/v2/all?fields=name,capital,currencies

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }
//   });
// }
//  createPromise(i, delaySet - step)
//         .then(resalt => console.log(resalt))
//         .catch(error => console.log(error));
