import React from "react";

const Home = () => {
  const sectionStyle = {
    backgroundImage: 'url("/assets/Rating5.jpg")', // Use `url` and backticks for string interpolation
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '90vh',
  };

  return (
    <div>
      <section id="home" style={sectionStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-dark">
                Star Surveys
              </h1>
              <p className="lead text-center fs-4 mb-5 text-dark">
                Welcome to Star Surveys, your ultimate destination for honest
                and insightful product reviews! From the latest tech gadgets to
                home essentials, we've got you covered. Explore our reviews,
                ratings, and expert recommendations to make confident and
                informed purchase decisions. Your journey to smarter shopping
                starts here!
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-outline-light rounded-pill px-4 py-2">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
