const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

let data=[];
app.get('/', (req, res) => {
  res.end('Hello from the server!');
  
});

app.post('/getData',(req, res)=>{
  console.log("getting data")
    res.send(data)
    res.end()
})


app.post('/setData', (req, res) => {
  console.log("setData")
  data = req.body.params;
  console.log(`Received data: Altitude: ${data.altitude}, HIS: ${data.his}, ADI: ${data.adi}`);
  res.sendStatus(200);
  res.end()
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
