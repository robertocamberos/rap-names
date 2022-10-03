const express = require('express');
// comes with the http requests, stuff that will alows us to generate the responses 
const app = express();
const PORT = 8000;

const rappers = {
  '21 Savage' : {
    'age':29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'Chance The Rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'Dylan' : {
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Chicago, Illinois'
  }

  

}

// this is the endpoint that we are going to use to get the data
// 
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
})

app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName
  if (rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['Dylan'])
  } 
})

app.listen( process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
