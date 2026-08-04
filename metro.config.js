const { getDefaultConfig } = require("expo/metro-config");


const config = getDefaultConfig(__dirname);


// Ignore backend folder

config.resolver.blockList = [

/backend\/.*/,

];


module.exports = config;