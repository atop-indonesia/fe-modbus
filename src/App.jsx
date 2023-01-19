import { useRef, useState } from "react";
import Chart1 from "./Chart1";

function App() {
  const [DI, setDI] = useState({ address: null, value: null });
  const [DO, setDO] = useState({ address: null, value: null });

  const rD = useRef();
  const wD = useRef();

  const readDigital = async e => {
    e.preventDefault();
    let address = parseInt(rD.current[0].value);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/readdigital", {
        method: "POST",
        body: JSON.stringify({ address }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      responseData = await response.json();
    } catch (err) {
      console.error(err);
    }

    console.log(responseData);
    setDI(state => ({ address, value: responseData.value }));
  };

  const writeDigital = async e => {
    e.preventDefault();
    let address = parseInt(wD.current[0].value);
    let value = parseInt(wD.current[1].value);
    console.log(wD.current);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/writedigital", {
        method: "POST",
        body: JSON.stringify({
          address,
          value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      responseData = await response.json();
    } catch (err) {
      console.error(err);
    }

    console.log(responseData);
    setDO(state => ({ address, value }));
  };

  return (
    <div
      className='App'
      style={{
        height: "100vh",
      }}
    >
      <form ref={rD} onSubmit={e => readDigital(e)}>
        <h2>Read Digital</h2>
        <input type='number' />
        <button>submit</button>
      </form>

      <div>
        Value in address {DI.address === null ? "kosong" : DI.address} ={" "}
        {DI.value === null ? "kosong" : DI.value}
      </div>

      <form ref={wD} onSubmit={e => writeDigital(e)}>
        <h2>Write Digital</h2>
        <input type='number' name='address' placeholder='address' />
        <input type='number' name='value' placeholder='value' />
        <button>submit</button>
      </form>

      <div>
        Value in address {DO.address === null ? "kosong" : DO.address} ={" "}
        {DO.value === null ? "kosong" : DO.value}
      </div>

      {/* <Chart1 /> */}
    </div>
  );
}

export default App;
