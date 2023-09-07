import Img1 from "../imgs/3D Art/1.jpg"
import Img2 from "../imgs/3D Art/2.png"
import Img3 from "../imgs/3D Art/3.png"
import Img4 from "../imgs/3D Art/4.png"
import Img5 from "../imgs/3D Art/5.jpg"
import Img6 from "../imgs/3D Art/6.jpg"
import Img7 from "../imgs/3D Art/7.png"
import Img8 from "../imgs/3D Art/8.png"
import Img9 from "../imgs/3D Art/9.png"
import "../styles.css"

export default function ThreeDArt() {
    let images = [
      {
        id: 1,
        imgSrc: Img1
      },
      {
        id: 2,
        imgSrc: Img7
      },
      {
        id: 3,
        imgSrc: Img3
      },
      {
        id: 4,
        imgSrc: Img2
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
        imgSrc: Img4
      },
      {
        id: 8,
        imgSrc: Img9
      },
      {
        id: 9,
        imgSrc: Img8
      }
    ]
    
    return <>
      <div className="content">
        <div className="header">
          <h1>3D Art</h1>
          <p>Procedurally rendered 3-dimensional artwork.</p>
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