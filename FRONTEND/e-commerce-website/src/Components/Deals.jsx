import HotDealCard from "./HotDealCard"
const Deals = () => {
    return(
        <div>
        <h1>Deals Of The Day</h1>
        <div style={{display: "flex"}}>
            <HotDealCard></HotDealCard>
            <HotDealCard></HotDealCard>
            <HotDealCard></HotDealCard>
            <HotDealCard></HotDealCard>
        </div>
        </div>
    )
}

export default Deals