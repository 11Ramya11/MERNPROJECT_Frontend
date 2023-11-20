import React from 'react';
import { Link } from 'react-router-dom';
const Servicesa = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0 text-warning">Welcome</h3>
                            <h1 className="display-6 text-center mb-4 text-warning"> Choose Your <b>Wished </b>
                                Clothing brands</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesaa" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/hmlogo.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold ">H & M</h5>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesab" style={{ textDecoration: 'none'}}>
                                <div class="card-body text-center text-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/zaralogo.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Zara</h5>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesac" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning text-border-dark ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/levilogo.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Levi's</h5>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesae" style={{ textDecoration: 'none'}}>

                                <div class="card-body text-center text-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/westside.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Westside</h5>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesad" style={{ textDecoration: 'none' }}>
                                <div class="card-body text-center bg-light text-warning">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary "></i>
                                    <img class="card-img-top" src="/assets/bibalogo.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Biba</h5>
                                </div>
                            </Link>    
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesaf" style={{ textDecoration: 'none'}}>
                                <div class="card-body text-center text-light ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Louislogo.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Louis philippe</h5>

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
export default Servicesa;