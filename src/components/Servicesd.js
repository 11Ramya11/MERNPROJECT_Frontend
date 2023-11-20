import React from 'react';
import { Link } from 'react-router-dom';
const Servicesd = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0 text-warning">Welcome</h3>
                            <h1 className="display-6 text-center mb-4 text-warning"> Choose Your <b>Wished </b>
                                 Mobile brands</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesda" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Mobiles1.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold ">Samsung</h5>
                                    
                                </div>
                            </Link>    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesdb" style={{ textDecoration: 'none'}}>
                                <div class="card-body text-center bg-warning text-light">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Mobiles2.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Realme</h5>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-2" >
                            <Link to="/Servicesdc" style={{ textDecoration: 'none' }}>

                                <div class="card-body text-center text-warning text-border-dark ">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <img class="card-img-top" src="/assets/Mobiles3.jpg" alt="Card image cap"></img>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Oppo</h5>
                                    
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
export default Servicesd;