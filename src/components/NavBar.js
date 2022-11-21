import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBarComponent = () => {
return (
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <h1 class="navbar-brand" to="#">Somos Pacifica</h1>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/category/gourmet">Pizzas Gourmet</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/category/gourmetconjamon">Pizzas Gourmet con Jamon</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
            
        </nav>
    </div>
);

};

export default NavBarComponent;