import Home from "./pages/Home"
import NavBar from "./Navbar"
import "./styles.css"
import { useState } from "react"
import ThreeDArt from "./pages/3dArt"
import GraphicDesign from "./pages/GraphicDesign"
import Logos from "./pages/Logos"
import PopArt from "./pages/PopArt"

export default function App() {

  const [galleryState, setGalleryState] = useState("")

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/3d-art":
      component = <ThreeDArt />
      break
    case "/graphic-design":
      component = <GraphicDesign />
      break
    case "/logos":
      component = <Logos />
      break
    case "/pop-art":
      component = <PopArt />
      break
  }

  return <>
      <NavBar />
      {component}
    </>
}