import React from "react";
import Navbar from "./Navbar";
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <div className="about-container">
                <div>
                    <h1>About Our Shopping Cart</h1>
                    <p>Welcome to our online store, where you can find a wide range of products to meet your shopping needs.</p>
                </div>

                <div>
                    <h2>Our Company</h2>
                    <p>We are XYZ Store, a leading eCommerce platform dedicated to providing a seamless and enjoyable shopping experience for our customers.</p>
                </div>

                <div>
                    <h2>Our Mission</h2>
                    <p>At XYZ Store, our mission is to connect customers with high-quality products and exceptional service. We strive to make online shopping convenient, reliable, and secure.</p>
                </div>

                <div>
                    <h2>Company History</h2>
                    <p>Since our establishment in 20XX, we have grown from a small startup to a trusted online marketplace. We have served thousands of satisfied customers and continue to expand our product offerings.</p>
                </div>

                <div>
                    <h2>Our Team</h2>
                    <p>Behind XYZ Store is a dedicated team of professionals passionate about delivering excellence. From our customer support representatives to our development and marketing experts, we work together to ensure your shopping experience is top-notch.</p>
                </div>


                <div>
                    <h2>Customer Testimonials</h2>
                    <p>Here's what some of our happy customers have to say:</p>
                    <blockquote>"I love shopping at XYZ Store. The products are fantastic, and the customer service is outstanding!" - John Doe</blockquote>
                    <blockquote>"XYZ Store offers a wide range of products, and their shipping is always fast and reliable. Highly recommended!" - Jane Smith</blockquote>
                </div>

                <div>
                    <h2>Security and Privacy</h2>
                    <p>At XYZ Store, we prioritize the security and privacy of our customers. We implement robust security measures to protect your personal and financial information. Your data is handled with the utmost care and in accordance with our privacy policy.</p>
                </div>

                <div>
                    <h2>Partnerships</h2>
                    <p>We have partnered with leading brands in the industry to bring you high-quality products and exclusive deals. These partnerships allow us to offer a diverse selection of items to suit your preferences and needs.</p>
                </div>

                <div>
                    <h2>Return Policy</h2>
                    <p>Your satisfaction is important to us. We offer a hassle-free return policy to ensure you are happy with your purchase. If you have any issues or need assistance, our dedicated support team is here to help.</p>
                </div>

                <div>
                    <h2>Frequently Asked Questions</h2>
                    <p>Have questions? Check out our FAQ section to find answers to commonly asked questions about shipping, payments, and more.</p>
                    <p>Still have queries? Feel free to reach out to us via email or phone. We're always happy to assist you!</p>
                </div>
            </div>
        </div>
    )
}

export default About;