import { Row, Col, Card, Container} from 'react-bootstrap';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
    {/* this is the default page*/}
        <Route path="/" element={<Resume />} /> 
      </Routes>
    </Router>
    
    <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <div className="contact">
                                <header className="contact-header">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 className="title">Contact Us</h1>
                                                    </Card.Title>
                                                    
                                                        <Card.Text className="body">Matthew Unrein</Card.Text>
                                                        <Card.Text className="body">769-532-6265</Card.Text>
                                                        <Card.Text className="body">email@gmail.com</Card.Text>
                                                        <Card.Text className="body">If you have questions or are intested in my services please fill out the form below</Card.Text>
                                                    
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Container>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
           </header>
            </>
  );
};


  
          


<div>
    <header>
            <div className="header">
                <h1>Hori<span className="seo">seo</span>n</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#search-engine-optimization">Search Engine Optimization</a>
                        </li>
                        <li>
                            <a href="#online-reputation-management">Online Reputation Management</a>
                        </li>
                        <li>
                            <a href="#social-media-marketing">Social Media Marketing</a>
                        </li>
                    </ul>
                </nav>
            </div>
        <div className="hero"></div>
    </header>
    <div className="content">
        <div className="search-engine-optimization">
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/search-engine-optimization.jpg" alt="Notebook with writing about SEO" className="float-left" />
            <section>
            <h2>Search Engine Optimization</h2>
            <p>
                The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
            </p>
        </section>
        </div>
    <div>
        <div id="online-reputation-management" className="online-reputation-management">
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/online-reputation-management.jpg" alt="Person Looking at laptop with the screen reading Reputation" className="float-right" />
            <section>
            <h2>Online Reputation Management</h2>
            <p>
                The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.
            </p>
        </section>
        </div>
        
        <div id="social-media-marketing" className="social-media-marketing">
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/social-media-marketing.jpg" alt="Group Meeting about Social Media" className="float-left" />
            <section>
            <h2>Social Media Marketing</h2>
            <p>
                Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.
            </p>
        </section>
        </div>
    </div>
    <div className="benefits">
        <div className="benefit-lead">
            <h3>Lead Generation</h3>
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/lead-generation.png" alt="image of lead generation icon"/>
            <p>
                Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.
            </p>
        </div>
        <div className="benefit-brand">
            <h3>Brand Awareness</h3>
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/brand-awareness.png" alt="image of brand awareness icon"/>
            <p>
                Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.
            </p>
        </div>
        <div className="benefit-cost">
            <h3>Cost Management</h3>
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/cost-management.png" alt="image of cost management icon"/>
            <p>
                As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.
            </p>
        </div>
    </div>
    
</div>
</div>
  




export default App;
