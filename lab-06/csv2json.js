const fs = require('fs');

function getFileStats(filePath) {
    const stats = fs.statSync(filePath);
    return {
        size: stats.size,
        modifiedDate: stats.mtime
    };
}

function csvToJson(csvFilePath, jsonFilePath) {
    const startTime = Date.now();

    // File properties
    const { size, modifiedDate } = getFileStats(csvFilePath);
    console.log(`File size: ${size} bytes`);
    console.log(`Last changed: ${modifiedDate}`);

    // Read CSV file synchronously
    const data = fs.readFileSync(csvFilePath, 'utf8');
    const lines = data.split('\n');
    const headers = lines[0].split(',');

    // Convert CSV to JSON
    const jsonArray = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index];
        });
        return obj;
    });

    // Write JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, 2));

    const endTime = Date.now();
    console.log(`Number of data sets: ${jsonArray.length}`);
    console.log(`Time needed to read and process: ${endTime - startTime} ms`);
}

const csvFilePath = process.argv[2];
const jsonFilePath = process.argv[3];

if (csvFilePath && jsonFilePath) {
    csvToJson(csvFilePath, jsonFilePath);
} else {
    console.log("Usage: node csv2json.js <input.csv> <output.json>");
}