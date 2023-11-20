import React from 'react';
const About = () => {
return (
     <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/About.jpg" alt="About" className="w-75 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0 text-warning">About Us</h3>
                        <h1 className="display-6 text-warning">Who <b>We </b>Are </h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4 ">At Star Surveys, we believe in empowering consumers with
                unbiased information to make confident purchasing decisions.We
                understand the importance of making informed choices, and that's
                why we've created a platform dedicated to helping you navigate
                through the vast world of products. Our team of dedicated
                experts is committed to providing comprehensive and honest
                reviews of a wide range of products. Whether you're a tech
                enthusiast, a home decor lover, or someone searching for the
                best kitchen appliances, we're here to guide you.
                        </p>
                        <button className="btn btn-warning rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-warning rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
     </div>
   );
}
export default About;