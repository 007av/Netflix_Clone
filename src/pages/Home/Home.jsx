
import "./Home.css";
import Navbar from "../../components/Navbar/NavBar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/Titlecards/TitleCards";
import Footer from "../../components/Footer/Footer";




const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>Discovering his ties to a Secrate ancient order, a young man living in morden 
            istanbul embarks on a quiest to save the city from immortal enemy. 
          </p>
          <div className="hero-btn">
            <button className="btn"><img src={play_icon}alt="" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockboster Movies"}/>
        <TitleCards title={"Only On Netflix"}/>
        <TitleCards title={"top Pick For You"}/>
        <TitleCards title={"Upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
