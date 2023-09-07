import "../styles.css"
import ImgGraphicDesign from "../imgs/Graphic Design/1.png"
import Img3D from "../imgs/3D Art/landscapeface.png"
import ImgPopArt from "../imgs/Pop Art/3 copy.png"
import ImgLogos from "../imgs/Logos/1.png"

export default function Home() {
    return <>
        <h1 className="home">Designs by Rafi Arnouk</h1>
        <p className="home">
            Rafi Arnouk is a designer based in Vancouver with a wide range of mediums. Whether it is an album cover or a basketball gameday poster, a logo or a pop art portrait, 2d or 3d, I do it all.
        </p>
        <div className="buttons">
            <a className="medium" href="/graphic-design">
                <img className="button" src={ImgGraphicDesign} />
                <span>Graphic Design</span>
            </a>
            <a className="medium" href="/3d-art">
                <img className="button" src={Img3D} /> 
                <span>3D Art</span>
            </a>
            <a className="medium" href="/logos">
                <img className="button" src={ImgLogos} /> 
                <span>Logos</span>
            </a>
            <a className="medium" href="/pop-art">
                <img className="button" src={ImgPopArt} /> 
                <span>Pop Art</span>
            </a>
        </div>
    </>
}