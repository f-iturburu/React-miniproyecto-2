import Loader from "./loader/loader";
import CountriesCard from "./countriesCard";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function CountriesRender() {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState();
  

  const rand = (length) =>{
    return Math.floor(Math.random() * (length - 0 + 1) + 0);
  }

function showLoader(){
    return setTimeout(()=>{
      setLoading(false)
     },600)
     

}

  useEffect(() => {
    APIRequest();
  }, []);

  const APIRequest = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      let length = Object.keys(data).length;
      setCountry(data[rand(length)]);
      showLoader()
    setLoading(true);
    
    
};



  const showCard = loading ? <Loader /> : <CountriesCard country={country} /> ;
  const showBtn = loading ? <Button className="rounded-5 d-none" onClick={(e)=>{APIRequest()}} variant="primary">Randomize</Button> : <Button className="rounded-5" onClick={(e)=>{APIRequest()}} variant="primary">Randomize</Button>

  return <div>
    {showCard}
  <div className="text-center pt-2">
   {showBtn}
  </div>
  </div>;
}

export default CountriesRender;
