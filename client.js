const net = require('net');

const moveUp = (times, conn) => {
  for(let i = 0; i < times; i++){  
    setInterval((() => {conn.write('Move: up')}), 500)
  } 
}

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    
    console.log('CONNECTED TO SERVER');

    conn.write('Name:  PSB');







    //moveUp(50, conn);
    
  });
    


  conn.on('data',(data) => {
    console.log(data);
  } )

  return conn;
}










module.exports = {connect}