import './css/styles.css';

import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countriesItem from './templates/countries-item';
import countryItem from './templates/country-items';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(onInputSeach, DEBOUNCE_DELAY));

function clearInput() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function onInputSeach(e) {
  const inputValue = e.target.value.trim();
  console.log(inputValue);

  if (inputValue === '') {
    clearInput();
    return;
  }
  fetchCountries(inputValue)
    .then(country => {
      console.log(country);
      if (country.length > 10) {
        clearInput();
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
      // else if (country.length >= 2 || country.length <= 10) {
      //   clearInput();
      //   drawInterfeices(country);
      // }
      else if (country.length === 1) {
        clearInput();
        renderCountry(country);
      } else if (country.length >= 2 || country.length <= 10) {
        clearInput();
        drawInterfeices(country);
      }
      // else if (countries.length === 1) {
      //   clearInput();
      //   renderCountrys(countries[0]);
      //   return;
      // }
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));

  function drawInterfeices(countrys) {
    const markup = countrys.map(countriesItem).join('');
    refs.countryList.insertAdjacentHTML('afterbegin', markup);
  }

  function renderCountry(country) {
    const markup = country.map(countryItem).join('');
    refs.countryList.insertAdjacentHTML('afterbegin', markup);
  }
  // renderCountry(country);
}

// ===============================================================

// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import { fetchCountries } from './fetchCountries';
// const DEBOUNCE_DELAY = 300;

// const refs = {
//   searchBox: document.querySelector('#search-box'),
//   countriesList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// refs.searchBox.addEventListener('input', debounce(handleSearch, DEBOUNCE_DELAY));

// function clearData() {
//   refs.countriesList.innerHTML = '';
//   refs.countryInfo.innerHTML = '';
// }

// function handleSearch(event) {
//   const inputValue = event.target.value.trim();
//   if (inputValue === '') {
//     clearData();
//     return;
//   }
//   fetchCountries(inputValue)
//     .then(countries => {
//       if (countries.length > 10) {
//         clearData();
//         Notiflix.Notify.info('Too many matches found. Please enter a more specific query!');
//         return;
//       } else if (countries.length === 1) {
//         clearData();
//         renderCountry(countries[0]);
//         return;
//       }
//       renderCountries(countries);
//     })
//     .catch(error => {
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//     });
// }
// let country = null;

// function renderCountry(country) {
//   refs.countryInfo.innerHTML = `
//         <div class="info-title">
//         <img src = "${country.flag.svg}" alt = Flag of"${country.name.official} class = "flag"">
//         <h1>${country.name.official}</h1>
//         <p><span>Capital:</span> ${country.capital}</p>
//         <p><span>Population:</span> ${country.population}</p>
//         <p><span>Languages:</span> ${Object.values(country.languages).join(', ')}</p>
//         </div>
//         `;
// }
// function renderCountries(countries) {
//   clearData();
//   countries
//     .map(country => {
//       refs.countriesList.innerHTML = `<li><img src = "${country.flags.svg}" alt = Flag of"${country.name.official}"><span>${country.name.official}</span></li>`;
//     })
//     .join('');
// }