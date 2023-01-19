export default function App() {
  return (
    <div
      className='App'
      style={{
        height: "100vh",
      }}
    >
      <button onClick={() => readDigital(1)}>{address1}</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "300px",
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
