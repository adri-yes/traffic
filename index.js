const fetch = require('node-fetch');

async function fetchFlights(randomClient, randomVersion) {
  const response = await fetch('https://apollo-gateway-t4modcxifa-uc.a.run.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apollographql-client-name': randomClient,
      'apollographql-client-version': randomVersion
    },
    body:JSON.stringify({ query: `query getFlights {
      flights {
        flightNumber
        travelClass
      }
    }`
    })
  })
  .then((res) => res.json())
  .then((result) => {
    console.log(result.data)
    return result.data
  });
    return response
};

let clients = [
    'client1',
    'client2',
]
let randomClient = clients[Math.floor(Math.random() * clients.length)];

let versions = [
  '1.0',
  '1.1',
  '2.0',
]
let randomVersion = versions[Math.floor(Math.random() * versions.length)];

let possibleTimes = [...Array(30).keys()].map(x => x + 1 )
let times = possibleTimes[Math.floor(Math.random() * possibleTimes.length)];

for (let i = 0; i < times; i++) {
    fetchFlights(randomClient, randomVersion);
}