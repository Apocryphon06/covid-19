// import React, { useEffect, useState } from "react";
// import CovidInfoCard from "../CovidInfoCard";
// import axios from "axios";
import InfoCard from "../InfoCard";

function Home() {
  // const [countries, setCountries] = useState([]);

  // const options = {
  //   method: "GET",
  //   url: "https://covid-193.p.rapidapi.com/countries",
  //   headers: {
  //     "X-RapidAPI-Key": "c14b3d0bacmsh77912aafa6e81e3p16c885jsna78dbb61726e",
  //     "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  //   },
  // };

  // const getCountriesDropdown = () => {
  //   axios
  //     .request(options)
  //     .then(function (response: any) {
  //       // console.log(response.data.response, "data from api");
  //       setCountries(response.data.response);
  //     })
  //     .catch(function (error: any) {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   getCountriesDropdown();
  // }, []);

  return (
    <div>
      {/* {countries.map((item: any) => (
        <CovidInfoCard country={item}/>
      ))} */}

      <InfoCard />
    </div>
  );
}

export default Home;
