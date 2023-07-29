const fs = require('fs');
const pkgJson = require('../../package.json');
const shell = require('shelljs');

// Increase build number
let versionParts = pkgJson.version.split('-');
let updatedVersion = '';
let isDevVersion = false;
if (versionParts.length > 1) {
   const lastPart = versionParts[versionParts.length - 1] + '';
   // Is alpha/beta/rc version
   const prefix = lastPart.substr(0, lastPart.search(/\d/));
   const numStr = lastPart.substr(lastPart.search(/\d/));
   const numInt = parseInt(numStr, 10) + 1;
   versionParts[versionParts.length - 1] = prefix + numInt;
   updatedVersion = versionParts.join('-');
   isDevVersion = true;
} else {
   // Is regular release
   versionParts = pkgJson.version.split('.');

   // Increase (last) build number part
   versionParts[versionParts.length - 1] = parseInt(versionParts[versionParts.length - 1], 10) + 1;
   updatedVersion = versionParts.join('.');
   isDevVersion = false;
}

// Build timestamp
const build = new Date().toISOString();

pkgJson.version = updatedVersion;
pkgJson.build = build;

// Write package.json
fs.unlinkSync('package.json');
fs.writeFile('package.json', JSON.stringify(pkgJson, null, 3) + '\n', function (err) {
   if (err) return console.log(err);
   console.log('File: package.json updated!');
});
