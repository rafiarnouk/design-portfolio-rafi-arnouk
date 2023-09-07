import Img1 from "../imgs/Logos/1.png"
import Img2 from "../imgs/Logos/2.png"
import Img3 from "../imgs/Logos/3.png"
import Img4 from "../imgs/Logos/4.png"
import Img5 from "../imgs/Logos/5.png"
import Img6 from "../imgs/Logos/6.png"
import "../styles.css"

export default function Logos() {
    let images = [
      {
        id: 1,
        imgSrc: Img1
      },
      {
        id: 2,
        imgSrc: Img2
      },
      {
        id: 3,
        imgSrc: Img4
      },
      {
        id: 4,
        imgSrc: Img3
      },
      {
        id: 5,
        imgSrc: Img5
      },
      {
        id: 6,
        imgSrc: Img6
      }
    ]
    
    return <>
      <div className="content">
        <div className="header">
          <h1>Logos</h1>
          <p>Infinitely scalable vector logos.</p>
        </div>
        <div className="gallery">
            {images.map((item, index) => {
                return <div className="images" key={index}>
                    <img src={item.imgSrc} />
                </div>
            })}
        </div>
      </div>
    </>
}