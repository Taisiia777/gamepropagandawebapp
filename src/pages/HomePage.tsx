
// import '../App.css';
// import MainComponent from '../components/MainComponent/MainComponent';
// import GamePassSection from '../components/GamePassSection/GamePassSection';
// import BestSellers from '../components/BestSellers/BestSellers';
// import SubscriptionComponent from '../components/SubscriptionComponent/SubscriptionComponent';
// import GameSalesSection from '../components/GameSales/GameSalesSection';
// import HalloweenSale from '../components/HalloweenSale/HalloweenSale';
// import GameCurrency from '../components/GameCurrency/GameCurrency';
// import NewReleases from '../components/NewReleases/NewReleases';
// import PreOrders from '../components/PreOrders/PreOrders';
// import GameSales from '../components/GameSales/GameSales';
// function HomePage() {

//   return (
//     <div>
//         <MainComponent/>
//         <GamePassSection/>
//         <BestSellers/>
//         <SubscriptionComponent/>
//         <GameSalesSection/>
//         <HalloweenSale/>
//         <GameCurrency/>
//         <NewReleases/>
//         <PreOrders/>
//         <GameSales/>
//     </div>
//   );
// }

// export default HomePage;
import React from 'react';
import '../App.css';
const BestSellers = React.lazy(() => import('../components/BestSellers/BestSellers'));
const MainComponent = React.lazy(() => import('../components/MainComponent/MainComponent'));
const GamePassSection = React.lazy(() => import('../components/GamePassSection/GamePassSection'));
const SubscriptionComponent = React.lazy(() => import('../components/SubscriptionComponent/SubscriptionComponent'));
const GameSalesSection = React.lazy(() => import('../components/GameSales/GameSalesSection'));
const HalloweenSale = React.lazy(() => import('../components/HalloweenSale/HalloweenSale'));
const GameCurrency = React.lazy(() => import('../components/GameCurrency/GameCurrency'));
const NewReleases = React.lazy(() => import('../components/NewReleases/NewReleases'));
const PreOrders = React.lazy(() => import('../components/PreOrders/PreOrders'));
const GameSales = React.lazy(() => import('../components/GameSales/GameSales'));


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
