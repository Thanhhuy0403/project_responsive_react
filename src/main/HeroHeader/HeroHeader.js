import "../../css/HeroHeader.css";
import watchVideo from "../../img/watch-video.svg";
import spWatchVideo from "../../img/support-watch-video.svg";
import hero1 from "../../img/hero-1.svg";
import hero2 from "../../img/hero-2.svg";
import hero3 from "../../img/hero-3.svg";
import heroDay from "../../img/hero-day.svg";
import heroBong from "../../img/hero-bong.svg";

function HeroHeader() {
    return (
        // <!-- Hero Header -->s
        <header className="hero-header" id="home">
            <div className="container">
                <div className="content">
                    <h1 className="title">We’re a creative design agency.</h1>
                    <p className="sub-title">A brilliant, modular agency template for startup’s build yours toady.</p>

                    {/* <!-- Action --> */}
                    <div className="action">
                        <button className="button">
                            <a href="#!">Get in touch</a>
                        </button>

                        <div className="watch-video">
                            <a href="#!">
                                <img src={watchVideo} alt="Video" />
                            </a>
                            <img className="support" src={spWatchVideo} alt="" />
                            <a href="#!">Watch Video</a>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <div className="back-ground"></div>
                    <img src={hero1} alt="" />
                    <img className="item-2" src={hero2} alt="" />
                    <img src={hero3} alt="" />
                </div>

                <img src={heroDay} alt="" className="hero-day" />
                <img src={heroBong} alt="" className="hero-bong" />
                <img src={heroDay} alt="" className="hero-day-nguoc" />
                <img src={heroBong} alt="" className="hero-bong-nguoc" />
            </div>
        </header>
    );
}

export default HeroHeader;
