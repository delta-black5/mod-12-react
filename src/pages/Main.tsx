import React, { useState } from 'react';
import '../scr/App.css';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';

const Main: React.FC = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <title>Horiseon Home Page</title>
      </head>

<body>
    <header>
            <div className="header">
                <h1>Unrein Portfolio</h1>
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
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/search-engine-optimization.jpg" alt="Notebook with writing about SEO" class="float-left" />
            <section>
            <h2>Search Engine Optimization</h2>
            <p>
                The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
            </p>
        </section>
        </div>
   
        <div id="online-reputation-management" className="online-reputation-management">
            <img src="https://static.bc-edx.com/coding/full-stack/01-HTML-Git-CSS/assets/online-reputation-management.jpg" alt="Person Looking at laptop with the screen reading Reputation" class="float-right" />
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
        <footer>
    <div className="footer">
        <h2>Made with ❤️️ by Horiseon</h2>
        <p>
        2024 Horiseon Social Solution Services, Inc.
        </p>
    </div>
        </footer>   
    </body>
  </div>
  );
};

export default Main;


