const { readdir, readFile, writeFile } = require('fs');

const { join } = require('path');
const { promisify } = require('util');

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str =>
    Promise.resolve(
        str
            .split('')
            .reverse()
            .join('')
    );

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
// const readFileAsync = file => new Promise((resolve, reject) => {
//     readFile(file, "utf8", (error, data) => {
//         if (error) return reject(error);
//         resolve(data);
//     });
// });

const readReverseWrite = file => readFileAsync(join(inbox, file), 'utf8')
    .then(reverseText)
    .then(data => writeFileAsync(join(outbox, file), data))
    .then(() => console.log(`${file} has been processed...`));

readdirAsync(inbox)
    .then(files => files.map(file => readReverseWrite(file)))
    .then(promises => Promise.all(promises))
    .then(() => console.log("*** ALl files processed..."))
    .catch(error => console.log(`Error: ${error}`));

