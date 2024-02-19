/*const http = require('http');
const requestListener = function (request,response){
    if (request.method === 'POST') {
        response.end("POST call");
    } else {
        response.writeHead(405);
        response.end('Method Not Allowed');
    }
}

const server = http.createServer(requestListener);
server.listen(8000);*/
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
const http = require('http');
const url = require('url');


// Define the selectRandomCity function
function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  }

 // Select a random city
 const citySelected = selectRandomCity(cities);
 const city = cities.find((c) => c.name == citySelected.name);
// Define the fetchdata function
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
  //console.log(await fetchdata(city.lat,city.lng));

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    
    // Extract the path and query parameters
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    console.log('Parsed URL:', parsedUrl);
    console.log('Path:', path);
    console.log('Query:', query.lat);
    // Log the parsed URL
    if (path === '/weather') {
        const {lat,lng} = query;
        if (lat && lng) {
            const  weatherData =async()=>
            {
                try {
                    const response = await fetchdata(city.lat,city.lng);
                    return response;
                } catch (error) {
                    console.log(error);
                }
            };
            
            //res.writeHead(200, {'Content-Type': 'application/json'});
            console.log(weatherData);
            res.end("done");
        } else {
            //res.writeHead(400,{'Content-Type': 'text/plain'});
            res.end('Missing  latitude and longitude parameters');
        }
    } else {
        //res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
    
    //console.log(JSON.stringify(weatherData))
    // Send a response
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end(`Path: ${path}\nQuery: ${JSON.stringify(query)}`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});