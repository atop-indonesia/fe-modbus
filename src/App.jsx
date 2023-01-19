import { useRef, useState } from "react";
import Chart1 from "./Chart1";

function App() {
  const [DI, setDI] = useState({ address: null, value: null });
  const [DO, setDO] = useState({ address: null, value: null });
  const [AI, setAI] = useState({ address: null, value: null });
  const [AO, setAO] = useState({ address: null, value: null });

  const rD = useRef();
  const wD = useRef();
  const rA = useRef();
  const wA = useRef();

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

  const readAnalog = async e => {
    e.preventDefault();
    let address = parseInt(rA.current[0].value);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/readanalog", {
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
    setAI(state => ({ address, value: responseData.value }));
  };

  const writeAnalog = async e => {
    e.preventDefault();
    let address = parseInt(wA.current[0].value);
    let value = parseInt(wA.current[1].value);
    console.log(wA.current);

    let responseData;

    try {
      const response = await fetch("http://localhost:8888/writeanalog", {
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
    setAO(state => ({ address, value }));
  };

  return (
    <div
      className='App'
      style={{
        height: "100vh",
      }}
    >
      <h2>Read Digital</h2>
      <form ref={rD} onSubmit={readDigital}>
        <input type='number' name='address' placeholder='address' />
        <button>submit</button>
      </form>
      <div>
        Value in address {DI.address === null ? "kosong" : DI.address} ={" "}
        {DI.value === null ? "kosong" : DI.value}
      </div>

      <h2>Write Digital</h2>
      <form ref={wD} onSubmit={writeDigital}>
        <input type='number' name='address' placeholder='address' />
        <input type='number' name='value' placeholder='value' />
        <button>submit</button>
      </form>
      <div>
        Value in address {DO.address === null ? "kosong" : DO.address} ={" "}
        {DO.value === null ? "kosong" : DO.value}
      </div>

      <h2>Read Analog</h2>
      <form ref={rA} onSubmit={readAnalog}>
        <input type='number' name='address' placeholder='address' />
        <button>submit</button>
      </form>
      <div>
        Value in address {AI.address === null ? "kosong" : AI.address} ={" "}
        {AI.value === null ? "kosong" : AI.value}
      </div>

      <h2>Write Analog</h2>
      <form ref={wA} onSubmit={writeAnalog}>
        <input type='number' name='address' placeholder='address' />
        <input type='number' name='value' placeholder='value' />
        <button>submit</button>
      </form>
      <div>
        Value in address {AO.address === null ? "kosong" : AO.address} ={" "}
        {AO.value === null ? "kosong" : AO.value}
      </div>

      <Chart1 />
    </div>
  );
}

export default App;
