const chalk = require('chalk');
let before= true;

setInterval(() => {
    console.clear();
    if(before)
    {
   console.log( chalk.bgWhite.blue.bold("Srinivasan Amarnathan")); 
    }
    else{
        console.log( chalk.bgWhite.red.bold("Srinivasan Amarnathan"));  
    }
   //clear
    before = !before;

}, 1000);

