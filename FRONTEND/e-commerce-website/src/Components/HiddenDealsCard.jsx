import tv from "../assets/tv.jpg"
import HiddenStyle from "./HiddenDeals"
const HiddenDealsCard = () => {
    return (
      <>
        <h1>Croma Exclusives: Hidden Deals Inside!</h1>
        <div className="hidden-deal" style={{height: "300px", width: "200px", border: "1px solid black"}}>

            <div className="hidden-deal-card" style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>

                <i class="fa-regular fa-heart"></i>

                <img src={tv} alt="" style={{height: "100px", width: "100px"}} />
                <h3>Croma 127cm(50inch) 4K Ultra HD LED Smart...</h3>

            </div>
        </div>
      </>
    )
}

export default HiddenDealsCard