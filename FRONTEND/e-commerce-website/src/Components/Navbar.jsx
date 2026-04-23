import "../App.css"
const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="hamberger">
                <i class="fa-solid fa-bars"></i>
                <p>menu</p>
            </div>

            <h2 id="navheading">croma</h2>

            <div className="Input">
                <input type="text"
                id="search"
                placeholder="What are you looking for you ?" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="icons">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    )
}

export default NavBar