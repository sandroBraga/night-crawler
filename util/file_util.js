const fileWriter = require('fs');


fileWriter.writeFile(__dirname + '/output_files/', (err) => {
    if (err) throw err
    console.log('File saved');
});