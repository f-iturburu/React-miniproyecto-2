

function CountriesCard ({country}){
  
console.log(country.currencies);
  let currenciesKey = Object.keys(country.currencies)
  console.log(currenciesKey.length);
  let currenciesName ;
  let currenciesSymbol ;

 

  for (let i = 0; i < currenciesKey.length; i++) {

    currenciesName = Object.values(country.currencies[currenciesKey[i]].name)
    currenciesSymbol = Object.values(country.currencies[currenciesKey[i]].symbol)


    console.log(currenciesSymbol);
    console.log(currenciesName);
  }
  currenciesName = JSON.stringify(currenciesName)
 
  console.log(typeof currenciesName);



    return <div className="container text-light mt-5">
      <div className="d-flex justify-content-center">
         <img src={country.flags.png} alt="" />
      </div>
      <div className="text-center">
           <h4>
           {country.name.common}
           </h4>
      </div>
      <div>
        <h4>Capital: {country.capital} </h4>
        <h4>Language: {Object.values(country.languages)} </h4>
        <h4>Population: {country.population.toLocaleString('es-AR')} </h4>
        <h4>Currency: </h4>
      </div>

    </div>
}

export default CountriesCard