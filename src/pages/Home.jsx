import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import './home.css'

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}

export default Home;