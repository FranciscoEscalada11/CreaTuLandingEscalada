import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <>
        <header>
        <nav className="nav-bar">
            <h2>Tienda</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            <CartWidget />
        </nav>
        </header>
        
        </>
    )
}
export default NavBar;