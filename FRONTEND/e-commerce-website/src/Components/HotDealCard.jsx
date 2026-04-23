import mobile from "../assets/mobile.jpg"
const HotDealCard = () => {

    return (
        <div  style={{height: "250px", width: "200px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginLeft: "8px", boxShadow: "0 8px 16px black", borderRadius: "16px", background: "linear-gradient(135deg, orange, pink)"}}>

            <h2>Iphone 17 Pro</h2>

            <div style={{height: "100px", width: "100px", overflow: "hidden", borderBottom: "1px solid black"}}>

                <img style={{height: "100%", width: "100%", objectFit: "cover", paddingBottom: "8px"}}
                 src={mobile} alt="mobile" />
            </div>

            <h4 style={{fontSize: "24px"}}><span style={{textDecoration: "line-through", fontSize: "16px"}}>₹79,999</span>₹69,9999</h4>
            <p>Inclusive of all Offers</p>


        </div>
    )
}

export default HotDealCard