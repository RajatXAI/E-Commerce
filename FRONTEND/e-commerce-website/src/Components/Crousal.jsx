import { useEffect, useState } from "react"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"


const Crousal = () => {
  const images = [
  image1, image2, image3, image4
  ]

  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((pre)=>pre === 0? images.length-1:pre-1)
  }

  const next = () => {
    setIndex(pre=> pre === images.length-1? 0:pre+1)
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex(pre=> pre === images.length-1? 0:pre+1)
    },3000)

    return ()=>clearInterval(interval);
  },[]);

  return (
    <div >
      <img style={{width: "100%", objectFit: "cover", overflow: "hidden"}} src={images[index]} alt="" />
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}

export default Crousal