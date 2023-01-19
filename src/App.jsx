import { useState } from "react";
import Chart from "react-apexcharts";

function App() {
  const [data, setData] = useState({ address: null, value: null });

  const readDigital = async e => {
    e.preventDefault();
    let a = parseInt(e.target[0].value);
    console.log(a);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/readdigital", {
        method: "POST",
        body: JSON.stringify({ address: a }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      responseData = await response.json();
    } catch (err) {
      console.error(err);
    }

    console.log(data);
    setData(state => ({ address: a, value: responseData.value }));
  };

  const writeDigital = async e => {
    e.preventDefault();
    let a = parseInt(e.target[0].value);
    let b = parseInt(e.target[1].value);
    console.log(a);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/writedigital", {
        method: "POST",
        body: JSON.stringify({ address: a, value: b }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      responseData = await response.json();
    } catch (err) {
      console.error(err);
    }

    console.log(data);
    setData(state => ({ address: a, value: responseData.value }));
  };

  return (
    <div
      className='App'
      style={{
        height: "100vh",
      }}
    >
      <form onSubmit={e => readDigital(e)}>
        <h2>Read Digital</h2>
        <input type='number' />
        <button>submit</button>
      </form>
      <div>
        Value in address {data.address === null ? "kosong" : data.address} ={" "}
        {data.value === null ? "kosong" : data.value}
      </div>

      <form onSubmit={e => writeDigital(e)}>
        <h2>Write Digital</h2>
        <input type='number' name='address' placeholder='address' />
        <input type='number' name='value' placeholder='value' />
        <button>submit</button>
      </form>
      <div>Value in address X = data</div>
    </div>
  );
}

export default App;
