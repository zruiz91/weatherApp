const express = require('express');
const https = require('https');



const app = express();


app.get("/", (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=50dd39c51714469ae2ed1cf1fde3c6a1&units=imperial";

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            console.log(data);

            const weatherData = JSON.parse(data);

            console.log(weatherData);
        })
    })
    res.send("server is up and running");
})







app.listen(3000, function () {
    console.log('listening on port 3000');
})