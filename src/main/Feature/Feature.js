import "../../css/Feature.css";
import iconFeature1 from "../../img/icon-feature-1.svg";
import iconFeature2 from "../../img/icon-feature-2.svg";
import iconFeature3 from "../../img/icon-feature-3.svg";

function Feature() {
    return (
        // <!-- Features -->
        <section className="feature">
            <div className="container">
                <div className="content">
                    <h2 className="title">Share the features that help your customers</h2>
                    <p className="sub-title">
                        You already know that the customer experience doesn't end with a sale — it's an ongoing work in
                        progress that companies should be constantly seeking to improve and iterate on.
                    </p>
                </div>

                <div className="list-item">
                    <div className="item">
                        <img src={iconFeature1} alt="" className="icon" />
                        <h3 className="title">Blog</h3>
                        <p className="desc">
                            We’ve researched numerous agencies and complied a list of digital marketing agency blogs you
                            should read to stay ahead of your rivals and succeed online!
                        </p>
                    </div>

                    <div className="item">
                        <img src={iconFeature2} alt="" className="icon" />
                        <h3 className="title">Documention</h3>
                        <p className="desc">
                            In this article, we discuss the different types of documentation, what makes for great
                            technical documentation, and provide examples.
                        </p>
                    </div>

                    <div className="item">
                        <img src={iconFeature3} alt="" className="icon" />
                        <h3 className="title">Customers</h3>
                        <p className="desc">
                            Your customers have high expectations — and if your business can't meet them, they're going
                            to leave you for your competitors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
