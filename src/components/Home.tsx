import React from 'react';
import { Redirect } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import d1 from '../assets/images/d1.jpg';
import d2 from '../assets/images/d2.jpg';
import d3 from '../assets/images/d3.jpg';
import d4 from '../assets/images/d4.jpg';
import d5 from '../assets/images/d5.jpg';
import d6 from '../assets/images/d6.jpg';
import te1 from '../assets/images/te1.jpg';
import te2 from '../assets/images/te2.jpg';
import scrool1 from '../assets/images/1.jpg';
import scrool2 from '../assets/images/2.jpg';
import scrool3 from '../assets/images/3.jpg';
import scrool4 from '../assets/images/4.jpg';
import selammango1 from '../assets/images/selam-mango.jpg';
import Middlebanner from './Middlebanner';

export default () => {
    return (
        <>
            <Helmet>
                <title>Buy best carbide free Mangoes online. #1 farm shop | Selam Mango</title>
                <meta name="keywords" content="buy mangoes online, farm fresh mangoes, online mango sale, mango fruit for sale, indian mangoes" />
                <meta name="description" content="Buy 100% carbide free, farm fresh famous Imam Pasand, Malgova, Alphonso Mangoes online from farmers." />
            </Helmet>
            <div className="main-top" id="home">
                <Header></Header>
                {/*<!-- banner --> */}
                <div className="main-w3pvt">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 style-banner">
                                <div className="style-banner-inner">
                                    <h3 className="font-weight-bold text-uppercase"><span className="font-weight-normal">Eat</span> Organic <span className="font-weight-normal">Live </span>
                                        Healthy </h3>
                                    <p className="mt-3">Mangoes, Jaggery, Ghee, Turmeric & Organic Samples</p>
                                    <a href="https://www.salemmango.com/" className="btn button-style mt-sm-5 mt-4">Buy Online</a>
                                </div>
                            </div>
                            <div className="col-lg-6 img-banner-w3 text-center">
                                <div className="csslider infinity" id="slider1">
                                    <input type="radio" name="slides" defaultChecked={true} id="slides_1" />
                                    <input type="radio" name="slides" id="slides_2" />
                                    <input type="radio" name="slides" id="slides_3" />
                                    <input type="radio" name="slides" id="slides_4" />
                                    <ul className="banner_slide_bg">
                                        <li>
                                            <img src={scrool1} alt="" className="img-fluid" />
                                        </li>
                                        <li>
                                            <img src={scrool2} alt="" className="img-fluid" />
                                        </li>
                                        <li>
                                            <img src={scrool3} alt="" className="img-fluid" />
                                        </li>
                                        <li>
                                            <img src={scrool4} alt="" className="img-fluid" />
                                        </li>
                                    </ul>
                                    <div className="navigation">
                                        <div>
                                            <label htmlFor="slides_1"></label>
                                            <label htmlFor="slides_2"></label>
                                            <label htmlFor="slides_3"></label>
                                            <label htmlFor="slides_4"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- //banner --> */}
            </div>
            {/*<div className="about py-5">
                <div className="container py-xl-5 py-lg-3">
                    <div className="welcome-left text-center py-md-5 py-sm-3">
                        <h3>Welcome to our Organic Food Website</h3>
                        <a href="/about" className="btn button-style button-style-2 mt-sm-5 mt-4">Read More</a>
                    </div>
                </div>
            </div>
            {/*<!-- //about --> */}

            {/*<!-- best food  --> */}
            <section className="team-w3ls" id="best">
                <div className="container py-lg-3">
                    <h3 className="title-w3 pt-sm-5 mb-5 text-wh font-weight-bold">Healthy Organic Mangoes
				<span> & Farm poducts available at our Farms</span></h3>
                    <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                        <div className="col-lg-4 col-sm-6">
                            <div className="box20">
                                <img src={d1} alt="selam mangoes" className="img-fluid" />                               
                                <div className="box-content">
                                    <h3 className="title">Mangoes</h3>
                                    <span className="post">Imam Pasand, Alphonso, Malgova</span>
                                   </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 my-sm-0 my-4">
                            <div className="box20 active">
                                <img src={d6} alt="" className="img-fluid" />
                                <div className="box-content active">
                                    <h3 className="title">Organic Jaggery</h3>
                                    <span className="post">Country Sugar, Palm Jaggery</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-lg-0 mt-sm-4 mx-auto">
                            <div className="box20">
                                <img src={d5} alt="" className="img-fluid" />
                                <div className="box-content">
                                    <h3 className="title">Dairy Honey</h3>
                                    <span className="post">Organic Desi Ghee, Farm Honey</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-flex team-w3ls-row pt-lg-5 mt-lg-0 mt-4">
                        <div className="col-lg-4 col-sm-6">
                            <div className="box20">
                                <img src={d4} alt="" className="img-fluid" />
                                <div className="box-content">
                                    <h3 className="title">Apples</h3>
                                    <span className="post">Organic Food</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
                            <div className="box20">
                                <img src={d3} alt="" className="img-fluid" />
                                <div className="box-content">
                                    <h3 className="title">Grapes</h3>
                                    <span className="post">Organic Food</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4 mx-auto">
                            <div className="box20">
                                <img src={d2} alt="" className="img-fluid" />
                                <div className="box-content">
                                    <h3 className="title">Carrots</h3>
                                    <span className="post">Organic Food</span>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </section>
            {/*<!-- //best food  --> */}

            {/*<!-- middle --> */}
            <Middlebanner></Middlebanner>
            {/*<!-- //middle --> */}

            {/*<!-- testimonials --> */}
            <div className="testimonials py-5" id="testi">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="title-w3 mb-5 text-wh font-weight-bold">What Our Customers Say
				<span>Excellent Reviews for our Website</span>
                    </h3>
                    <div className="carousel-inner">
                        <div className="row">
                            <div className="col-lg-6 w3_testimonials_grid">
                                <div className="bg-wh p-sm-5 p-4">
                                    <p className="sub-test-w3ls">We are happy with the quality of the mangoes.
                                     They were sweet and fresh. In fact, just placed another order.
                                     Thank you for offering the convenience to buy premium quality mangoes online from comfort of home.							</p>
                                    <div className="row mt-5">
                                        <div className="col-9 w3_testi_grid mt-xl-3 mt-lg-2 mt-md-4 mt-2">
                                            <h5 className="mb-2">Manish</h5>
                                            <p>Alphonso Customer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 w3_testimonials_grid mt-lg-0 mt-4">
                                <div className="bg-wh p-sm-5 p-4">
                                    <p className="sub-test-w3ls">Very efficient delivery sytstem. Mangoes very extremely tasty more so
                                     since they got ripened naturally. Highly recommendable.
                                    Thank you very much on behalf of our entire family for the yummy mangoes.							</p>
                                    <div className="row mt-5">
                                        <div className="col-9 w3_testi_grid  mt-xl-3 mt-lg-2 mt-md-4 mt-2">
                                            <h5 className="mb-2">Arati Sridhar</h5>
                                            <p>Imam Pasand Customer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- //testimonials --> */}

            {/*<!-- slides images --> */}
            <div className="slide-imaes">

            </div>
            {/*<!-- //slides images --> */}

            <Footer></Footer>
        </>
    )
}

const handlePageChange=(url: any)=> {
   return <Redirect to={url}/>
}