export const getCountries  = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("https://restcountries.eu/rest/v2/all", requestOptions)
}