import Img1 from "../imgs/Pop Art/1.png"
import Img2 from "../imgs/Pop Art/2.png"
import Img3 from "../imgs/Pop Art/3.png"
import Img4 from "../imgs/Pop Art/4.png"
import Img5 from "../imgs/Pop Art/5.png"
import Img6 from "../imgs/Pop Art/6.png"
import Img7 from "../imgs/Pop Art/7.png"
import "../styles.css"

export default function PopArt() {
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
        imgSrc: Img3
      },
      {
        id: 4,
        imgSrc: Img4
      },
      {
        id: 5,
        imgSrc: Img5
      },
      {
        id: 6,
        imgSrc: Img6
      },
      {
        id: 7,
        imgSrc: Img7
      }
    ]
    
    return <>
      <div className="content">
        <div className="header">
          <h1>Pop Art</h1>
          <p>Vector graphic portraits, primarily in a pop art style called WPAP.</p>
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