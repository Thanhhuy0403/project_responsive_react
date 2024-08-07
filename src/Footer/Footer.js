import "../css/Footer.css";

function Footer() {
    return (
        <footer className="contact" id="contact">
            <div className="container">
                <div className="part-1">
                    <h2 className="title">Sign up for our newsletter</h2>
                    <form action="#!">
                        <input type="email" placeholder="Enter your email" />
                    </form>

                    <div className="icon">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26" r="25.5" stroke="#265252" />
                            <path
                                d="M22.8401 36.5406H26.8051V24.6326H29.5135V21.5132H26.8051V20.8894C26.8051 19.2076 27.4473 18.6108 29.346 18.6651V15.4643C24.9901 15.3558 22.8401 17.0647 22.8401 20.7537V21.5132H21.0811V24.6326H22.8401V36.5406Z"
                                fill="#FBFBFB"
                            />
                        </svg>

                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26" r="26" stroke="#265252" />
                            <rect
                                x="17.8652"
                                y="17.8647"
                                width="16.2703"
                                height="16.2703"
                                rx="2"
                                stroke="#FCFCFC"
                                strokeWidth="2"
                            />
                            <circle cx="25.9998" cy="25.9998" r="3.01351" stroke="#FCFCFC" />
                        </svg>
                    </div>
                </div>

                <div className="part-2">
                    <div className="item">
                        <p className="desc">Pages</p>
                        <div className="sub-item">
                            <a href="#!">Home</a>
                            <a href="#!">About</a>
                            <a href="#!">Blog</a>
                            <a href="#!">Blog Post</a>
                        </div>
                    </div>

                    <div className="item">
                        <p className="desc">Product</p>
                        <div className="sub-item">
                            <a href="#!">Home</a>
                            <a href="#!">About</a>
                            <a href="#!">Blog</a>
                            <a href="#!">Blog Post</a>
                        </div>
                    </div>

                    <div className="item">
                        <p className="desc">Overview</p>
                        <div className="sub-item">
                            <a href="#!">Home1</a>
                            <a href="#!">Home2</a>
                            <a href="#!">Home3</a>
                            <a href="#!">Pricing1</a>
                        </div>
                    </div>

                    <div className="item">
                        <p className="desc">About us</p>
                        <div className="sub-item">
                            <a href="#!">Team</a>
                            <a href="#!">Invertors</a>
                            <a href="#!">Blog</a>
                            <a href="#!">Press</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
