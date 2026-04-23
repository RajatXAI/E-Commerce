import HotDealCard from "./HotDealCard"
const HotDeal = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h2>What's Hot</h2>
            <div  style={{display: "flex"}}>
                <HotDealCard />
                <HotDealCard />
                <HotDealCard />
                <HotDealCard />
            </div>
        </div>
    )
}

export default HotDeal