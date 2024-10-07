
import '../App.css';
import MainComponent from '../components/MainComponent/MainComponent';
import GamePassSection from '../components/GamePassSection/GamePassSection';
import BestSellers from '../components/BestSellers/BestSellers';
import SubscriptionComponent from '../components/SubscriptionComponent/SubscriptionComponent';
import GameSalesSection from '../components/GameSales/GameSalesSection';
import HalloweenSale from '../components/HalloweenSale/HalloweenSale';
import GameCurrency from '../components/GameCurrency/GameCurrency';
import NewReleases from '../components/NewReleases/NewReleases';
import PreOrders from '../components/PreOrders/PreOrders';
import GameSales from '../components/GameSales/GameSales';
function HomePage() {

  return (
    <div>
        <MainComponent/>
        <GamePassSection/>
        <BestSellers/>
        <SubscriptionComponent/>
        <GameSalesSection/>
        <HalloweenSale/>
        <GameCurrency/>
        <NewReleases/>
        <PreOrders/>
        <GameSales/>
    </div>
  );
}

export default HomePage;
