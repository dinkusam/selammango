import React from 'react';
import { Link } from 'react-router-dom';

export default ()=>{
    return (
        <footer className="py-5">
            <div className="container pt-lg-3">
                {/*<!-- newsletter -->
                <div className="newsletter_right_w3w3pvt-lau pb-md-5 pb-3" id="newsletter">
                    <h2 className="tittle text-wh mb-5 font-weight-bold">Subscribe Newsletter</h2>
                    <div className="n-right-w3ls pt-3">
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input className="form-control" type="text" name="Name" placeholder="Name" />
                                </div>
                                <div className="col-md-4 form-group px-md-0">
                                    <input className="form-control" type="email" name="Email" placeholder="Email Address"/>
                                </div>
                                <div className="col-md-4 form-group mt-md-0 mt-3">
                                    <button className="form-control btn text-uppercase" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*<!-- //newsletter -->*/}
                {/*<!-- footer bottom -->*/}
                <div className="row pt-lg-3">
                    {/*<!-- button -->*/}
                    <div className="col-lg-5 col-md-7 w3l-footer mt-lg-3 text-md-left text-center">
                        <ul className="list-unstyled footer-nav-wthree">
                            <li className="mr-4">
                            <Link to="/">Home</Link>
                            </li>
                            <li className="mr-4">
                            <Link to="/about">About Us</Link>
                            </li>                           
                        </ul>
                    </div>
                    {/*<!-- //button -->*/}
                    {/*<!-- social icons -->*/}
                    <div className="col-lg-7 col-md-5 w3social-icons text-md-right text-center mt-md-0 mt-3">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/salemmangofarm/" target="_blank" className="rounded-circle">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="px-2">
                                <a href="https://salemmango.wordpress.com/" target="_blank" className="rounded-circle">
                                    <i className="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/salemmangofarm" target="_blank" className="rounded-circle">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- //social icons -->*/}
                </div>
                {/*<!-- //footer bottom -->*/}
                {/*<!-- copyright -->*/}
                <div className="row pt-lg-4 pt-3 text-md-left text-center">
                    <p className="col-xl-7 col-lg-8 copy-right-grids mt-lg-1">© 2019 Selam Mango. All Rights Reserved</p>
                    <div className="col-xl-5 col-lg-4 text-center mt-lg-0 mt-4">
                        <a href="#home" className="move-top"></a>
                    </div>
                </div>
                {/*<!-- //copyright -->*/}
            </div>
        </footer>
    )
}