import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/index.css';

export default ()=>{
    return (
            <header>
                <div className="container-fluid">
                    <div className="header d-md-flex justify-content-between align-items-center py-sm-4 py-3 px-xl-5 px-lg-3 px-2">
                        {/*<!-- logo --> */}
                        <div id="logo">
                            <h1><a className="" href="/">Selam Mango</a></h1>
                        </div>
                        {/*<!-- //logo --> */}
                        {/*<!-- nav --> */}
                        <div className="nav_w3ls">
                            <nav>
                                <label htmlFor="drop" className="toggle toogle-2">Menu</label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2"><Link to="/about">About Us</Link></li>
                                    <li><a href="https://www.salemmango.com">Buy Online</a></li>
                                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2"><a href="https://www.salemmango.com/contact-salemmango">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/*<!-- //nav --> */}
                    </div>
                </div>
            </header>
    )
}