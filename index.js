
// importing both the express module to start a server and the https module to handle request to external APIs
const express = require('express');
const https = require('https');



const app = express();

// set up get request to weather API on the load of the home page
app.get("/", (req, res) => {

    // url variable that holds the url for the weather Api
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=50dd39c51714469ae2ed1cf1fde3c6a1&units=imperial";

    // using https get method
    https.get(url, function (response) {
        // logging the response code
        console.log(response.statusCode);

        response.on("data", function (data) {
            // logging data unparsed
            console.log(data);

            // parsing the data and storing it in the weatherData variable
            const weatherData = JSON.parse(data);

            // variable to hold temp
            const temp = weatherData.main.temp;

            // variable to hold feels like temp
            const feelsLikeTemp = weatherData.main.feels_like;

            // variable to hold weather description
            const weatherDescription = weatherData.weather[0].description;

            // printing weatherData, temp, feelsLikeTemp and weather description below
            // console.log(weatherData);

            // console.log(temp);

            // console.log(feelsLikeTemp);

            // console.log(weatherDescription);

            res.send("<h1>the temp in houston, texas is " + temp + " degress.</h1>");
        })
    })
    // res.send("server is up and running");
})






// setting up the server to listen on port 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
})