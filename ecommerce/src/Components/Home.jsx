import React from 'react'
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Footer.css"; 
import './Home.css'


function Home() {
    return (
        <div>
            <Header />
            {/* first slider */}
            <Carousel>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-25112024-mainbanner-z1-p1-winterfest-3060.gif' alt='First image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Sale start now</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p2-beardo-wildstone-upto65+extra25.jpg' alt='second image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Welcome to my shop</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p3-skechers-reebok-min30.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p4-indianterrain-montecarlo-min35.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p5-tigc-dennislingo-min60.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p6-asos-upto35.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-251122-1.0-MHP-mainbanner-z1-p7-gap-ax-upto40.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* first slider end */}



            {/* Second slider */}
            <Carousel>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/1440x128%20(1).jpg' alt='First image' style={{ height: "25vh", width: "100%", marginTop: "20px" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Sale start now</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-bankoffers-Z1-5instant-prepaid1.jpg' alt='second image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Welcome to my shop</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/1440x128dbscopy1.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30092024-bankoffers-Z1-shop&earn-Payupto3-Wallet.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30092024-bankoffers-Z1-shop&earn-Payupto3%20(2).jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/1440x128mobi500.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/Paytmheart-1440x128%202.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/1440x128%20PhonePe%20Rupay.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg' alt='third image' style={{ height: "25vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* second slider end */}



            {/* third slider */}
            <Carousel>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-19112024-UHP-oneminutedeal-notifyme.gif' id="img2" alt='First image' style={{ height: "70vh", width: "100%", marginTop: "20px",opacity:"100px" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Sale start now</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/Desktop_NewUser_1440x470px_28102024.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h1 style={{ textAlign: "center", fontFamily: "monospace", marginTop: "20px" }}>Fashions This Fall</h1>
            <h1 style={{ textAlign: "center", fontFamily: "serif", marginTop: "30px" }}>The Crust Of Style</h1>

            {/* fourth slider */}
            <Carousel>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-221124-1.0-MHP-topbanner-z2-p1-puma-adidas-under1599.jpg' alt='First image' style={{ height: "70vh", width: "100%", marginTop: "20px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-221124-1.0-MHP-topbanner-z2-p2-vanhuesen-allensolly-upto60.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-221124-1.0-MHP-topbanner-z2-p3-maniac-eyebogler-min-70.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-221124-1.0-MHP-topbanner-z2-p4-puma-nike-upto60.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-221124-1.0-MHP-topbanner-z2-p5-gas-gant-upto50.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
            </Carousel>
            {/* fourth slider end */}

            <h1 style={{ textAlign: "center", fontFamily: "serif", marginTop: "30px" }}>Fall In Line-Daily Drops</h1>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-071124-NSM-header.jpg' alt='third image' style={{ height: "20vh", width: "100%" }} />
            <Container>
                <Row>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-161124-NSM-newseason.jpg" />
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-231124-NSM-Jompers.jpg" />
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-topbrands-z6-uspa-min50.jpg" />
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-topbrands-z6-leecooper-min50.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-budgetbuys-z8-banner.jpg" alt="photo" style={{ height: "70vh", width: "100%" }} />
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip11.jpg" alt="photo" style={{ height: "20vh", width: "100%" }} />
            </div>
            <div className="main">
                <div class="features">
                    <div class="feature-item">
                        <img src="../icon1.png" alt="Easy Exchange" />
                        <h3>Easy Exchange</h3>
                    </div>
                    <div class="feature-item">
                        <img src="../icon2.png" alt="100% Handpicked" />
                        <h3>100% Handpicked</h3>
                    </div>
                    <div class="feature-item">
                        <img src="../icon3.png" alt="Assured Quality" />
                        <h3>Assured Quality</h3>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-section">
                    <div className="footer-column">
                        <h3>Big Deal Sale</h3>
                        <ul>
                            <li>Who We Are</li>
                            <li>Join Our Team</li>
                            <li>Terms & Conditions</li>
                            <li>We Respect Your Privacy</li>
                            <li>Fees & Payments</li>
                            <li>Returns & Refunds Policy</li>
                            <li>Promotions Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li>Track Your Order</li>
                            <li>Frequently Asked Questions</li>
                            <li>Returns</li>
                            <li>Cancellations</li>
                            <li>Payments</li>
                            <li>Customer Care</li>
                            <li>How Do I Redeem My Coupon</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Shop by</h3>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Indie</li>
                            <li>Stores</li>
                            <li>New Arrivals</li>
                            <li>Brand Directory</li>
                            <li>Home</li>
                            <li>Collections</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram - AJIOlife</li>
                            <li>Instagram - AJIO LUXE</li>
                            <li>Twitter</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="payment-methods">
                        <h4>Payment methods</h4>
                        <img src="data:image/jpeg;base64,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" alt="Net Banking" />
                        <img src="path/to/visa-icon.png" alt="Verified by VISA" />
                        <img src="path/to/mastercard-icon.png" alt="MasterCard" />
                        <img src="path/to/cod-icon.png" alt="Cash on Delivery" />
                        <img src="path/to/jio-money-icon.png" alt="Jio Money" />
                    </div>
                    <div className="secure-systems">
                        <h4>Secure systems</h4>
                        <img src="path/to/ssl-icon.png" alt="256 BIT Encryption" />
                    </div>
                </div>
            </footer>
            {/* https://www.ajio.com/shop/men */}

        </div>
    )
}

export default Home