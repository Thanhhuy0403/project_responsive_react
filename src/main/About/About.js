import "../../css/About.css";
import avata1 from "../../img/avata-1.svg";
import avata2 from "../../img/avata-2.svg";
import avata3 from "../../img/avata-3.svg";
import avata4 from "../../img/avata-4.svg";
import notification from "../../img/icon-action-notification.svg";

function About() {
    return (
        // <!-- About -->
        <section className="about" id="about">
            <div className="container">
                <div className="image">
                    <img
                        src="https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        className="img-1"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="img-2"
                    />
                </div>

                <div className="notification">
                    <h3 className="title">All Desingners</h3>
                    <p className="sub-title">Total Balance</p>
                    <p className="digit">40%</p>
                    <div className="load">
                        <div className="loading"></div>
                    </div>
                    <p className="digit digit-loading">Loading...</p>
                    <img src={notification} alt="icon" />
                    <div className="im"></div>
                    <div className="team">
                        <p className="desc">Teams:</p>
                        <div className="avata">
                            <img src={avata1} alt="avata" />
                            <img src={avata2} alt="avata" />
                            <img src={avata3} alt="avata" />
                            <img src={avata4} alt="avata" />
                        </div>
                    </div>
                </div>

                <div className="info">
                    <p className="sub-title">ABOUT US</p>
                    <h2 className="title">We are an extention of your creative team</h2>
                    <p className="desc">
                        At the start of every project, we cusomizea detailed project plan together with you set
                        exectationns ensure alighment and define key milestones and deiverbles.
                    </p>

                    <div className="content">
                        <p className="digit">48%</p>
                        <p className="sub-digit">
                            Are you strive for two things in design simplicity and clarity. Great design is born of
                            those two things
                        </p>
                    </div>
                    <div className="content">
                        <p className="digit">26%</p>
                        <p className="sub-digit">
                            Are you strive for two things in design simplicity and clarity. Great design is born of
                            those two things
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
