import "../../css/Brand.css";
import slack from "../../img/slack.svg";
import agworld from "../../img/agworld.svg";
import heroku from "../../img/heroku.svg";

function Brand() {
    return (
        // <!-- Brand -->
        <article className="brand">
            <div className="container">
                <div className="list-item">
                    <div className="item">
                        <p className="Google">Google</p>
                    </div>
                    <div className="item">
                        <img src={slack} alt="slack" />
                        <p className="slack">slack</p>
                    </div>
                    <div className="item">
                        <img src={agworld} alt="Agworld" />
                        <p className="agworld">Agworld</p>
                    </div>
                    <div className="item">
                        <p className="riotinto">RioTinto</p>
                    </div>
                    <div className="item">
                        <img src={heroku} alt="HEROKU" />
                        <p className="heroku">HEROKU</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Brand;
