import Img1 from "../imgs/Graphic Design/1.png"
import Img2 from "../imgs/Graphic Design/2.jpeg"
import Img3 from "../imgs/Graphic Design/3.png"
import Img4 from "../imgs/Graphic Design/4.png"
import Img5 from "../imgs/Graphic Design/5.png"
import Img6 from "../imgs/Graphic Design/6.jpeg"
import Img7 from "../imgs/Graphic Design/7.jpeg"
import Img8 from "../imgs/Graphic Design/8.jpeg"
import Img9 from "../imgs/Graphic Design/9.png"
import Img10 from "../imgs/Graphic Design/10.jpeg"
import "../styles.css"

export default function GraphicDesign() {
    let images = [
      {
        id: 1,
        imgSrc: Img4
      },
      {
        id: 2,
        imgSrc: Img2
      },
      {
        id: 3,
        imgSrc: Img1
      },
      {
        id: 4,
        imgSrc: Img3
      },
      /* {
        id: 5,
        imgSrc: Img5
      }, */
      {
        id: 6,
        imgSrc: Img6
      },
      {
        id: 7,
        imgSrc: Img7
      },
      {
        id: 8,
        imgSrc: Img8
      },
      {
        id: 9,
        imgSrc: Img9
      },
      {
        id: 10,
        imgSrc: Img10
      }
    ]
    
    return <>
      <div className="content">
        <div className="header">
          <h1>Graphic Design</h1>
          <p>Album covers, sports artwork, surreal collages, etc.</p>
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