import "../../css/Services.css";
import webDesign from "../../img/web-design.svg";
import graphicDesign from "../../img/graphic-design.svg";

function Services() {
    return (
        // <!-- Services -->
        <section className="services">
            <div className="container">
                <p className="desc">OUR SERVICES</p>
                <div className="top">
                    <h2 className="title">We offer a wide range of design services</h2>
                    <div className="pre-next">
                        <svg
                            className="pre"
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="54" height="54" fill="#EFEFEF" />
                            <g id="Creative Agency Website Design" clipPath="url(#clip0_0_1)">
                                <rect width="1400" height="6670" transform="translate(-1072 -1218)" fill="white" />
                                <g id="service section">
                                    <g id="Group">
                                        <g id="Group 1000004095">
                                            <circle
                                                id="Ellipse 4016"
                                                cx="27"
                                                cy="27"
                                                r="27"
                                                transform="matrix(-1 0 0 1 54 0)"
                                                fill="#E2EDDF"
                                            />
                                            <path
                                                id="Right arrow"
                                                d="M37 27.8235H17M17 27.8235L22.2941 22M17 27.8235L22.2941 33"
                                                stroke="#152427"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="1400" height="6670" fill="white" transform="translate(-1072 -1218)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg
                            className="next"
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="27" cy="27" r="27" transform="matrix(-1 0 0 1 54 0)" fill="#E2EDDF" />
                            <path
                                d="M17 27.2941H37M37 27.2941L31.7059 22M37 27.2941L31.7059 32"
                                stroke="#152427"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <div className="list-item">
                    <div className="item">
                        <div className="image">
                            <img
                                src="https://images.unsplash.com/photo-1701743801469-57e71ae3da6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <h3 className="title">Branding</h3>
                            <p className="desc">
                                Create beautiful Agency website with Boluethat converts more visitors than any website.
                            </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">
                            <img src={webDesign} alt="" />
                        </div>
                        <div className="content">
                            <h3 className="title">Web Design</h3>
                            <p className="desc">
                                Create beautiful Agency website with Boluethat converts more visitors than any website.
                            </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">
                            <img src={graphicDesign} alt="Design" />
                        </div>
                        <div className="content">
                            <h3 className="title">Graphic Design</h3>
                            <p className="desc">
                                Create beautiful Agency website with Boluethat converts more visitors than any website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
