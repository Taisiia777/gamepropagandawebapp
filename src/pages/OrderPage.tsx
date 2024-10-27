
import '../App.css';
import {Orders} from "../components/Order/Orders.tsx";
import MainComponent from "../components/MainComponent/MainComponent.tsx";
function OrderPage() {

    return (
        <div style={{height:"100vh", width:"360px"}}>
            <MainComponent/>
            <Orders/>
        </div>
    );
}

export default OrderPage;
