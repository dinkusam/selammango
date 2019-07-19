import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import about from '../assets/images/about.jpg';

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
                        <div className="col-lg-6 w3lsits_works-grid mt-xl-4">
                            <div className="wthree-bottom">
                                <h6 className="subheading-w3ls text-uppercase text-dark mb-4">DEAL OF THE <span className="font-weight-bold">DAY</span>
                                    organic good <span className="font-weight-bold">foods 50%</span> off</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto.</p>
                                <a href="/about" className="btn button-style mt-sm-5 mt-4">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 w3lsits_works-grid1 mt-lg-0 mt-sm-5 mt-4">
                            <img src={about} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-w3ls">
                <div className="container-fluid py-xl-5 py-lg-3">
                    <div className="offset-xl-7 offset-lg-6 offset-md-4 offset-sm-2">
                        <div className="grids-whtas pr-xl-5">
                            <h3 className="tittle text-wh mb-5 font-weight-bold">763+ fruits, vegetables & lot more</h3>
                            <p className="lead text-li">Fresh From Our Farm ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at,
						semper varius orci. Nulla accumsan ac elit in congue.</p>
                            <hr className="my-4" />
                            <p className="text-li">Rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut consequat
                                sapien ut leo cursus
						rhoncus.Nullam dui mi, vulputate ac metus.</p>
                            <a href="/about" className="btn button-style mt-sm-5 mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}