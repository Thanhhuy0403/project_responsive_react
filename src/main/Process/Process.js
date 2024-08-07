import "../../css/Process.css";
import processImg from "../../img/process-img.svg";

function Process() {
    return (
        // <!-- Process -->
        <section className="process">
            <div className="container">
                <p className="sub-title">OUR PROCESS</p>
                <h2 className="title">A simple ,yet effective three step process</h2>
                <div className="list-item">
                    <div className="item">
                        <p className="col-1">01.</p>
                        <div className="col-2">
                            <p className="desc">Project idea</p>
                            <a href="#!">Learn More</a>
                        </div>
                        <img src={processImg} alt="Process" />
                    </div>

                    <div className="item">
                        <p className="col-1">02.</p>
                        <div className="col-2">
                            <p className="desc">Brainstormaing</p>
                            <a href="#!">Learn More</a>
                        </div>
                        <p className="col-3">
                            We customse a ensure aligment and difine key mileones and defiverables experience tells us
                            the best solutions are the ones deated with clients.
                        </p>
                    </div>

                    <div className="item">
                        <p className="col-1">03.</p>
                        <div className="col-2">
                            <p className="desc">Execution</p>
                            <a href="#!">Learn More</a>
                        </div>
                        <p className="col-3">
                            We customse a ensure aligment and difine key mileones and defiverables experience tells us
                            the best solutions are the ones deated with clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
