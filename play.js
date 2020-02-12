const { connect } = require('./client');
const stdin = process.stdin;

const handleUserInput = (data) => {
  console.log("THIS IS YOUR DATA" , data);
   if(data === '\u0003'){
     console.log('INSIDE IF STATEMENT')
     process.exit(); 
   }
}


const setUpInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  //stdin.on('data', handleUserInput);
  stdin.on('data', handleUserInput);
  return stdin;
}





console.log('Connecting ...');
setUpInput();
connect();