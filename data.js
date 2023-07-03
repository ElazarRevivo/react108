
const { default: axios } = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendDataToReact(altitude, his, adi) {
   axios.post('http://localhost:3001/setData',{
    params:{altitude:altitude, his:his, adi:adi }
   }) // Replace with your server's URL
   .then(response => {
    
   })
   .catch(error => {
     console.error('Error fetching data:', error);
   });
  // fetch("localhost:3001/test",{
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: data
  // }).then(data=>{console.log(data)})

  // const req = http.request(options, (res) => {
  //   console.log(`Data sent to React with status code: ${res.statusCode}`);
  // });

  // req.on('error', (error) => {
  //   console.error(`Error sending data to React: ${error}`);
  // });

  // req.write(data);
  // req.end();
}

rl.question('Enter Altitude (0-3000): ', (altitude) => {
  rl.question('Enter HIS (0-360): ', (his) => {
    rl.question('Enter ADI (-100 - 100): ', (adi) => {
      console.log(`Altitude: ${altitude}`);
      console.log(`HIS: ${his}`);
      console.log(`ADI: ${adi}`);

      sendDataToReact(altitude, his, adi);

      rl.close();
    });
  });
});