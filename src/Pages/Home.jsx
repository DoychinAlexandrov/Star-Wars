import Hero from "../assets/hero.png";
import VideoEmbed from "../components/Video";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import LineImg from "../assets/line.png";
import Wrapper from "../wrappers/Home";
import GameSection from "../components/About";

const Home = () => {
    return (
        <Wrapper>
            <div className="opening">
                <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
            </div>
            <div className="hero-section">
                <img className="movie-image" src={Hero} alt="Star Wars Movie" />
                <div className="hero-content">
                    <h1 className="title">Star Wars Outlaws</h1>
                    <div className="text-container">
                        <h3 className="subtitle">
                            Ubisoft's open-world Star Wars game.
                        </h3>
                        <p className="additional-text">
                            Join the battle against the dark side
                        </p>
                    </div>
                    <div className="button-container">
                        <button className="watch-now-button">Watch Now</button>
                        <button className="explore-button">Explore</button>
                    </div>
                </div>
            </div>
            <section>
                <div className="line">
                    <img src={LineImg} alt="" />
                </div>
                <VideoEmbed />
            </section>
            <div className="line">
                <img src={LineImg} alt="" />
            </div>
            <GameSection />
            <div className="line">
                <img src={LineImg} alt="" />
            </div>
            <Subscribe />
            <br />
            <Footer />
        </Wrapper>
    );
};

export default Home;
