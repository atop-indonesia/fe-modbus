import { useState } from "react";
import Chart from "react-apexcharts";

export default function App() {
  const [data, setData] = useState([
    { categories: 1991, data: 31 },
    { categories: 1992, data: 35 },
    { categories: 1993, data: 32 },
    { categories: 1994, data: 28 },
    { categories: 1995, data: 33 },
    { categories: 1996, data: 39 },
    { categories: 1997, data: 30 },
    { categories: 1998, data: 27 },
    { categories: 1999, data: 37 },
    { categories: 2000, data: 31 },
    { categories: 2001, data: 33 },
  ]);

  return (
    <div>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: data.map(d => d.categories),
          },
        }}
        series={[
          {
            name: "series-1",
            data: data.map(d => d.data),
          },
        ]}
        type='bar'
        width='500'
      />
    </div>
  );
}
