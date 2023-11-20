import React from 'react';
import { Link } from 'react-router-dom';
const Servicesf = () => {
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
                            <Link to="/Servicesfa" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Homeapp1.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold ">TV</h5>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesfb" style={{ textDecoration: 'none'}}>
                                <div class="card-body text-center text-dark">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Homeapp2.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Washing Machines</h5>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesfc" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning text-border-dark ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Homeapp3.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Mixers</h5>
                                    
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
export default Servicesf;