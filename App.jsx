import React, {useEffect,useState} from "react";
 import axios from "axios";

 


function App() {

    const [data, setData] = useState(null);

    useEffect(() => {

      console.log("hello")
        axios.post('http://localhost:3001/getData').then(response=>setData(response.data))

      }, []);
      

      return (
        <div>
          {data ? (
            <div>
             <p>Altitude: {data.altitude}</p>
              <p>HIS: {data.his}</p>
              <p>ADI: {data.adi}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );

}

export default App;