document.addEventListener("DOMContentLoaded", () => {

    const temperature = document.querySelector(".temperature");

    function renderTemperature(){

    }


  function fetchWeatherData() {
    
  //  const proxy = "http://127.0.0.1:8080/";

   /* const credentials = btoa(`${clientId}:`);
    const auth = { Authorization: `Basic ${credentials}` };
    const apiURL = `${proxy}https://frost.met.no/observations/v0.jsonld?sources=sn18700&referencetime=2010-01-01T12&elements=air_temperature`;*/

    let myHeaders = new Headers();
    myHeaders.append("Origin", "test");
    myHeaders.append(
      "Authorization",
      "Basic clientid"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://127.0.0.1:8080/https://clientid:@frost.met.no/observations/v0.jsonld?sources=sn18700&referencetime=2010-01-01T12&elements=air_temperature",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherData();
  renderTemperature();
});
