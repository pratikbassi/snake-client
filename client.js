const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    
    console.log('CONNECTED TO SERVER');
  });
  conn.write('Name:  PSB');


  conn.on('data',(data) => {
    console.log(data);
  } )

  return conn;
}

module.exports = {connect}