const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];
  //1
const cities1=[];
for (let i = 0; i < cities.length; i++) {
    var obj=[];
    obj[0]=i+1;
    obj[1]=cities[i].name;
    cities1.push(obj);
}
console.log(cities1);
  //function to select a city randomly
  //2
  function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  }
  console.log(selectRandomCity(cities1));

  //code fetch an API data 
  async function fetchdata() {
    const url = "http://api.weatherapi.com/v1";
    await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Auth-Token": "f515f8f1e58e407b9ca112720241602",
        "Content-Type": "application/json" 
      }
    })
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
      /*const city=selectRandomCity(cities1);
      const city1=data.find((c)=>c.location.name==city[1]);
      console.log("the temperature in : "+city1 + " is " +  city1.current.temp_c);*/
  }
  fetchdata();
  /*const response = await fetch('http://api.weatherapi.com/v1');
  const apiKey="f515f8f1e58e407b9ca112720241602";
  const data = await response.json();
  console.log('Data:', data);*/


