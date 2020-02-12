const handleUserInput = (data) => {
  console.log("THIS IS YOUR DATA" , data);
   if(data === '\u0003'){
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

module.exports = {setUpInput}