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
const fs = require('fs').promises; // Using fs.promises for async/await


// Define the selectRandomCity function
function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

// Define the fileInput function
async function fileInput() {
  try {
    // Select a random city
    const citySelected = selectRandomCity(cities);
    const city = cities.find((c) => c.name == citySelected.name);

    // Write the city name to input.txt
    await fs.writeFile('input.txt', city.name);

    // Read the contents of input.txt
    const data = await fs.readFile('input.txt', 'utf8');
    console.log('File contents:', data);

    // Fetch data from the API
    const apiData = await fetchdata(city.lat, city.lng);
    const temperature = apiData.current_weather.temperature;
    console.log(`The temperature of ${city.name} is: ${temperature} °C`);

    // Write the temperature to cityname.txt
    await fs.writeFile('cityname.txt', `The temperature of ${city.name} is: ${temperature} °C`);
    
    // Read the contents of cityname.txt
    const citynameData = await fs.readFile('cityname.txt', 'utf8');
    console.log('City name file contents:', citynameData);

    // Delete the input.txt file
    await fs.unlink('input.txt');
    console.log('File input.txt deleted successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Define the fetchdata function
async function fetchdata(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'X-Auth-Token': 'f515f8f1e58e407b9ca112720241602',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

// Call the fileInput function to start the process
fileInput();


