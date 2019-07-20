import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import about from '../assets/images/about.jpg';
import Middlebanner from './Middlebanner';

export default () => {
    return (
        <>
            <Helmet>
                <title>Selam Mango: #1 online mango farm shop selling fresh mangoes</title>
                <meta name="keywords" content="selam mango, online mango, mango farmer, mango cultivation, mango trade, mango exports, mango pulp" />
                <meta name="description" content="Buy farm fresh mango fruit online at modest price from our selam mango website" />
            </Helmet>
            <div className="main-banner-2" id="home">
                <Header></Header>
            </div>
            <div className="breadcrumb-w3ls py-1">
                <div className="container">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </div>

            <section className="about-inner py-5">
                <div className="container pt-xl-5 pt-lg-3">
                    <h3 className="title-w3 mb-5 font-weight-bold">About Us <span>Something about us</span></h3>
                    <div className="row">
                        <div className="col-lg-7 w3lsits_works-grid mt-xl-4">
                            <div>
                                <h6 className="subheading-w3ls text-uppercase text-dark mb-4">DEAL OF THE <span className="font-weight-bold">DAY</span>
                                    organic good <span className="font-weight-bold">foods 50%</span> off</h6>
                                <p>Selam Mango prepare, pack & sell our own produce, carefully handled by farmers itself. We follow all the traditional practices that our grand parents used to follow.
                                There is no machineries involved in any of the product preparation and packing. It is all by our farmers and following traditional practices which we used to follow for more than thousands of years 
                                </p>
                                <a href="https://www.salemmango.com/about-salemmango" className="btn button-style mt-sm-5 mt-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 w3lsits_works-grid1 mt-lg-0 mt-sm-5 mt-4">
                            <img src={about} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <Middlebanner/>
            <Footer></Footer>
        </>
    )
}