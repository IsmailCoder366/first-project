
///  core Modules

const fs = require('fs');
const os = require('os');

fs.writeFileSync('data.txt', 'this is my data file')
console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())