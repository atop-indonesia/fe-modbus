import { useState } from "react";
import Chart from "react-apexcharts";

function App() {
  const [data1, setData1] = useState(null);

  const [data2, setData2] = useState(null);

  return (
    <div
      className='App'
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Chart
          options={{
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [
                1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
              ],
            },
          }}
          series={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
          ]}
          type='line'
          width='500'
        />

        <Chart
          options={{
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [
                1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
                2001,
              ],
            },
          }}
          series={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
          ]}
          type='bar'
          width='500'
        />
      </div>
    </div>
  );
}

export default App;
