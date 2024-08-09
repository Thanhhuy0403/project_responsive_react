import { useState } from "react";
import "../../css/Process.css";
import processImg from "../../img/process-img.svg";

function Process() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    function handleLearnMore1() {
        setVisible1(!visible1);
    }

    function handleLearnMore2() {
        setVisible2(!visible2);
    }

    return (
        // <!-- Process -->
        <section className="process">
            <div className="container">
                <p className="sub-title">OUR PROCESS</p>
                <h2 className="title">A simple ,yet effective three step process</h2>
                <div className="list-item">
                    <div className="item">
                        <span>
                            <p className="col-1">01.</p>
                            <div className="col-2">
                                <p className="desc">Project idea</p>
                                <a href="#!">Learn More</a>
                            </div>
                        </span>
                        <img src={processImg} alt="Process" />
                    </div>

                    <div className={`item ${visible1 ? "visible" : ""}`}>
                        <span>
                            <p className="col-1">02.</p>
                            <div className="col-2">
                                <p className="desc">Brainstormaing</p>
                                <a onClick={handleLearnMore1} href="#!">
                                    Learn More
                                </a>
                            </div>
                        </span>
                        {visible1 && (
                            <p className="col-3">
                                We customse a ensure aligment and difine key mileones and defiverables experience tells
                                us the best solutions are the ones deated with clients.
                            </p>
                        )}
                    </div>

                    <div className={`item ${visible2 ? "visible" : ""}`}>
                        <span>
                            <p className="col-1">03.</p>
                            <div className="col-2">
                                <p className="desc">Execution</p>
                                <a onClick={handleLearnMore2} href="#!">
                                    Learn More
                                </a>
                            </div>
                        </span>
                        {visible2 && (
                            <p className="col-3">
                                We customse a ensure aligment and difine key mileones and defiverables experience tells
                                us the best solutions are the ones deated with clients.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
