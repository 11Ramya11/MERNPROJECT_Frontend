import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0 text-warning">Choose your Categories</h3>
                            <h1 className="display-6 text-center mb-4 text-warning">Your <b>Wished </b>
                                Categories</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesa" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-warning text-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold ">Clothing</h5>
                                    <p class="card-text lead">Users can share insights on the latest fashion trends, fabric quality, and sizing accuracy, helping fellow shoppers make informed choices.</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesb" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center text-warning bg-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Footwear</h5>
                                    <p class="card-text lead">Users often share experiences with customer service, warranty, and return policies, contributing to a comprehensive understanding of the entire footwear purchasing experience.</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesc" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-warning text-light ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Skin care</h5>
                                    <p class="card-text lead">Glow together! Explore top-rated skincare products and contribute your reviews to guide the skincare community towards healthier, happier skin</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesd" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-light text-warning">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary "></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Mobiles</h5>
                                    <p class="card-text lead">Discover a world of opinions! Rate and review your favorite mobiles on our platform to help others make informed choices</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicese" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-warning text-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Cars</h5>
                                    <p class="card-text lead">Car buyers contribute reviews on performance, fuel efficiency, and reliability, assisting potential buyers in making well-informed decisions.</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesf" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-light text-warning ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Home Appliances</h5>
                                    <p class="card-text lead">Users evaluate home appliances based on efficiency, ease of use, and durability, helping homeowners select products that suit their needs.</p>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Services;