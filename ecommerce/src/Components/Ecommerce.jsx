import React from 'react'
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
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
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-051224-BBS-GO%20LIVE%20(1)%201.gif' alt='First image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Sale start now</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P6-GAP-MS-MIN30.jpg' alt='second image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>Welcome to my shop</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P7-TRINK-THEPARI-MIN80.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P2-CAMPUS-SUTRA-HIGHSTAR-MIN50.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P3-FABINDIA-W-MIN30.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P4-FABNEX-WOMENSTER-MIN75.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                    <Carousel.Caption>
                        {/* <h3 style={{color:"blue"}}>30% OFF</h3> */}
                        {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-061224-MAINBANNER-Z1-P5-AVAASA-FUSION-MIN60.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
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
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/Desktop_newuser_1440x470.jpg' id="img2" alt='First image' style={{ height: "70vh", width: "100%", marginTop: "20px",opacity:"100px" }} />

            <h1 style={{ textAlign: "center", fontFamily: "monospace", marginTop: "20px" }}>Sponsor Showdown</h1>

            {/* fourth slider */}
            <Carousel>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D_1.0_WHP_SC_ADIDAS_P1.jpg' alt='First image' style={{ height: "70vh", width: "100%", marginTop: "20px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D_1.0_WHP_SC_SUPERDRY_P2.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D_1.0_WHP_SC_H.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D_1.0_WHP_SC_JOckey_P4.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.ajio.com/cms/AJIO/WEB/D_1.0_WHP_SC_PUMA_P6.jpg' alt='third image' style={{ height: "70vh", width: "100%" }} />
                </Carousel.Item>
            </Carousel>
            {/* fourth slider end */}

            <h1 style={{ textAlign: "center", fontFamily: "serif", marginTop: "30px" }}>Fall In Line-Daily Drops</h1>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-071124-NSM-header.jpg' alt='third image' style={{ height: "20vh", width: "100%" }} />
            {/* <Container> */}
                <Row>
                    {/* <Col> */}
                        <Card style={{ width: '16rem',outline:'none',border:"none" }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-161124-NSM-newseason.jpg" />
                        </Card>
                    {/* </Col> */}
                    {/* <Col > */}
                        <Card style={{ width: '16rem',marginLeft:'-10px',border:"none" }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-231124-NSM-Jompers.jpg" />
                        </Card>
                    {/* </Col> */}
                    {/* <Col > */}
                        <Card style={{ width: '16rem',border:"none",marginLeft:'-10px' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-topbrands-z6-uspa-min50.jpg" />
                        </Card>
                    {/* </Col> */}
                    {/* <Col> */}
                        <Card style={{ width: '16rem',border:"none",marginLeft:'-10px' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-topbrands-z6-leecooper-min50.jpg" />
                        </Card>
                        <Card style={{ width: '16rem',border:"none",marginLeft:'-10px' }}>
                            <Card.Img variant="top" src="https://assets.ajio.com/cms/AJIO/WEB/D-07112024-1.0-MHP-topbrands-z6-leecooper-min50.jpg" />
                        </Card>
                    {/* </Col> */}
                </Row>
            {/* </Container> */}
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
            </footer>
            {/* https://www.ajio.com/shop/men */}

        </div>
    )
}

export default Home