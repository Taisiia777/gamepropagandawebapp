
import '../App.css';
import WishlistComponent from "../components/WishlistComponent/WishlistComponent.tsx";

function WishList() {
    return (
        <div>
            <WishlistComponent
                searchIconSrc="img/search.svg"          // Замените на фактический путь
                sortIconSrc="img/arrow.svg"              // Замените на фактический путь
            />
        </div>
    );
}

export default WishList;
