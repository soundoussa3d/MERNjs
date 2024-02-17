const fs = require('fs');
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
//console.log(cities1);
  //function to select a city randomly
  //2
  function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  }
 var citySelected= selectRandomCity(cities1);

  var city= cities.find((c)=>c.name==citySelected[1]);
  console.log(city.name);

  //create a file and put the name of the city in  it 
  fs.writeFile('input.txt', city.name, (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created successfully.');
    }
  });


  //1-read the file 
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File contents:', data);
      
    }
  });
  
  
  //code fetch an API data 
  async function fetchdata(lat,lng) {
    var city=cities.find((c)=>c.lat==lat);
    var name=city.name;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
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
        console.log("The temperature of "+name+" is :" + data.current_weather.temperature + " °C");
      })
  
      .catch(function(error) {
        console.log(error);
      });
  }
  
var result = fetchdata(city.lat,city.lng);
//console.log(temp);

  // Creating a new file
fs.writeFile('cityname.txt',result, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
  }
});


fs.readFile('cityname.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
    
  }
});


