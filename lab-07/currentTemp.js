const https = require("https");

function getCurrentTemp(location) {
    const url = `https://wttr.in/${location}?format=j1`;

    https
        .get(url, (response) => {
            let data = "";

            // Receive data from stream
            response.on("data", (chunk) => {
                data += chunk;
            });

            // End of stream
            response.on("end", () => {
                try {
                    const weatherData = JSON.parse(data);
                    const temperature = weatherData.current_condition[0].FeelsLikeC;
                    console.log(`${temperature}°`);
                } catch (error) {
                    console.error("Error while parsing data:", error);
                }
            });
        })
        .on("error", (error) => {
            console.error("Error while fetching data:", error);
        });
}

// Check input location
const location = process.argv[2];
if (!location) {
    console.log("Bitte einen Ort angeben.");
} else {
    getCurrentTemp(location);
}
