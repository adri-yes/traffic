const fetch = require('node-fetch');

async function fetchAllProducts(randomClient, randomVersion) {
    const response = await fetch('https://apollo-gateway-t4modcxifa-uc.a.run.app', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': randomClient,
        'apollographql-client-version': randomVersion
        },
        body:JSON.stringify({ query: `query getAllFlights {
        flights {
            flightNumber
            departureDate
            }
        }
        }`})
    })
    .then((res) => res.json())
    .then((result) => {
        console.log(result.data)
        return result.data
    });
    return response
};


let clients = [
    'iOS',
    'Web',
    'Android'
]
let randomClient = clients[Math.floor(Math.random() * clients.length)];

let versions = [
  '1.0',
  '1.1',
  '1.2',
  '1.4',
  '1.5',
  '1.7',
  '1.8',
  '1.9',
  '2.0',
  '2.2',
  '2.5',
  '3.0'
]
let randomVersion = versions[Math.floor(Math.random() * versions.length)];

let oddsArray = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4 ]
let random = oddsArray[Math.floor(Math.random() * oddsArray.length)];

let randomProduct = Math.floor(Math.random() * 15 + 1);

let randomUser = Math.floor(Math.random() * 8 + 1);

// let possibleTimes = [...Array(300).keys()].map(x => x + 30 )
let possibleTimes = [...Array(10).keys()].map(x => x + 2 )
let times = possibleTimes[Math.floor(Math.random() * possibleTimes.length)];

if(random === 1) {
  for (let i = 0; i < times; i++) {
      fetchAllProducts(randomClient, randomVersion);
  }
} else if (random === 2) {
  for (let i = 0; i < times; i++) {
      fetchOneProduct(randomClient, randomVersion, randomProduct);
  }
} else if (random === 3) {
  for (let i = 0; i < times; i++) {
      fetchUserAccount(randomClient, randomVersion, randomUser);
  } 
} else {
  for (let i = 0; i < 4; i++) {
      legacyClientAccount(randomUser);
  }
};