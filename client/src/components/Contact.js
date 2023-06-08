import React from "react";
import Navbar from "./Navbar";
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Reach out to us with any questions, concerns, or feedback you may have.</p>
                </div>

                <div>
                    <h2>Contact Information</h2>
                    <p>You can contact us using the following methods:</p>
                    <ul>
                        <li>Email: info@example.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Address: 123 Main Street, City, State, ZIP</li>
                    </ul>
                </div>

                <div>
                    <h2>Customer Support</h2>
                    <p>Our dedicated customer support team is available to assist you. If you have any inquiries or need assistance with your order, please don't hesitate to contact us.</p>
                    <p>You can reach our support team via email or phone during our business hours:</p>
                    <ul>
                        <li>Email: support@example.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Business Hours: Monday to Friday, 9:00 AM - 5:00 PM</li>
                    </ul>
                </div>

                <div>

                    <h2>Feedback and Suggestions</h2>
                    <p>We value your feedback and suggestions. If you have any ideas on how we can improve our products or services, please let us know. Your input is essential in helping us provide a better shopping experience.</p>
                    <p>You can send your feedback or suggestions via email or through our online feedback form.</p>
                </div>

                <div>
                    <h2>Stay Connected</h2>
                    <p>Follow us on social media to stay up-to-date with the latest news, promotions, and product releases:</p>
                    <ul>
                        <li>Facebook: <a href="https://www.facebook.com/example">facebook.com/example</a></li>
                        <li>Twitter: <a href="https://www.twitter.com/example">twitter.com/example</a></li>
                        <li>Instagram: <a href="https://www.instagram.com/example">instagram.com/example</a></li>
                    </ul>
                </div>

                <p>We look forward to hearing from you and providing excellent support!</p>
            </div>
        </div>
    )
}

export default Contact;