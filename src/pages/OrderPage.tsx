
import '../App.css';
import {Orders} from "../components/Order/Orders.tsx";
import MainComponent from "../components/MainComponent/MainComponent.tsx";
function OrderPage() {

    return (
        <div>
            <MainComponent/>
            <Orders/>
        </div>
    );
}

export default OrderPage;
