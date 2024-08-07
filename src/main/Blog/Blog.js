import "../../css/Blog.css";
import blogItem1 from "../../img/blog-item-1.svg";
import blogItem2 from "../../img/blog-item-2.svg";

function Blog() {
    return (
        // <!-- Blog -->
        <article className="blog" id="blog">
            <div className="container">
                <div className="sub-title">BLOG & ARTICLES</div>
                <div className="row">
                    <h2 className="title">Take a look at our latest articles and resources</h2>
                    <p className="desc">
                        The best agency are the ones ideated with clients. we corporate your ideas with memorable
                    </p>
                </div>

                <div className="list-item">
                    <div className="item">
                        <div className="image">
                            <img src={blogItem1} alt="" />
                        </div>

                        <div className="content">
                            <button className="btn">
                                <a href="#!">STORIES</a>
                            </button>
                            <h3 className="title">
                                What did we learn from nunning over 100 design sprints in less the year?
                            </h3>
                            <hr />
                            <p className="desc">JANUARY 29, 2022</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">
                            <img src={blogItem2} alt="" />
                        </div>

                        <div className="content">
                            <button className="btn">
                                <a href="#!">STORIES</a>
                            </button>
                            <h3 className="title">
                                The difference between the UI/UX design a simple guide for beginner’s
                            </h3>
                            <hr />
                            <p className="desc">JANUARY 29, 2022</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">
                            <img src={blogItem1} alt="" />
                        </div>

                        <div className="content">
                            <button className="btn">
                                <a href="#!">STORIES</a>
                            </button>
                            <h3 className="title">How marketing can help your business more than anything.</h3>
                            <hr />
                            <p className="desc">JANUARY 29, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Blog;
