import NavBar from "./Components/Navbar"
import Crousal from "./Components/Crousal"
import Slider from "./Components/Slider"
import HotDeal from "./Components/HotDeal"
import Deal from "./Components/Deals"
import HiddenDeals from "./Components/HiddenDeals"
const App = () => {
  return(
    <div className="container">
      <NavBar/>
      <Crousal/>
      <Slider/>
      <HotDeal/>
      <Deal/>
      <HiddenDeals />
    </div>
  )
}

export default App