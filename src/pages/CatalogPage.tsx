import MainComponent from "../components/MainComponent/MainComponent";
import GameCatalog from "../components/CatalogComponents/GameCatalog";
import GameCardList from "../components/GameCards/GameCardList";
function CatalogPage() {
  // Example data for cartItems and recommendations
  
  return (
    <div style={{height: "100vh"}}>
      <MainComponent />
      <GameCatalog/>
      <GameCardList/>
    </div>
  );
}

export default CatalogPage;
