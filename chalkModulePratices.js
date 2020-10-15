const chalk = require('chalk');
let before= true;

setInterval(() => {
    console.clear();
    if(before)
    {
   console.log( chalk.bgGreen.blue.bold("Srinivasan Amarnathan")); 
    }
    else{
        console.log( chalk.bgGreen.blue.inverse.bold("Srinivasan Amarnathan"));  
    }
   //clear
    before = !before;

}, 1000);

