import "../../css/Project.css";
import nextLeft from "../../img/next-left.svg";

function Project() {
    return (
        // <!-- Project -->
        <section className="project">
            <div className="container">
                <div className="row">
                    <h2 className="title">A quick glance of our past projects</h2>
                    <div className="content">
                        <p className="desc">
                            Are you strive for the fast project simplicity and clarity. Great design is born of those
                            two things.
                        </p>
                        <a href="#!">
                            Browse all Projects
                            <img src={nextLeft} alt="" />
                        </a>
                    </div>
                </div>

                <div className="video">
                    <iframe
                        width="1140px"
                        height="544px"
                        src="https://www.youtube.com/embed/TD7sBUigDIU?si=nNmm-Gfj9uNKqpn9"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Project;
