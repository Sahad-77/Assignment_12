import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home-content">

                <h3>P S SAHAD</h3>

                <h4>
                    Aspiring Software Developer |
                    <br />
                    Python • Databases • Full-Stack Web Development
                </h4>

                <Link to="/about" className="learn-more">
                    To Know More
                </Link>

            </div>

            <p className="quote">
                "The harder thing to do and the right thing to do
                are usually the same thing !!"
            </p>
        </>
    );
}

export default Home;