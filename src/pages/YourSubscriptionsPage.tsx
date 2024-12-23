
import '../App.css';
import { YourSubscriptions } from '../components/Order/YourSubscriptions.tsx';
import MainComponent from "../components/MainComponent/MainComponent.tsx";
function YourSubscriptionsPage() {

    return (
        <div style={{height:"100vh", width:"360px"}}>
            <MainComponent/>
            <YourSubscriptions/>
        </div>
    );
}

export default YourSubscriptionsPage;
