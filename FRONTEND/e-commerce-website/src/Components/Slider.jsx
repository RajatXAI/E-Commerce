import SliderCard from "./SliderCard.jsx"
import SliderStyle from "./Slider.module.css"
const Slider = () => {
    return (
        <div className={SliderStyle.item}>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        <SliderCard></SliderCard>
        </div>
    )
}

export default Slider