import { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAgreeChange = () => {
        setAgree(!agree);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && agree) {
            // Process the subscription
            console.log("Email:", email);
        }
    };

    return (
        <section className="subscribe-section">
            <h2 className="section-title">Subscribe Now</h2>

            <h4>
                Stay up-to-date on Star Wars Outlaws™ and get the latest
                announcements, offers, and other news from Ubisoft.
            </h4>
            <br />
            <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={handleAgreeChange}
                    />
                    <label htmlFor="agree">
                        I agree that my personal data may be processed to
                        receive commercial communication from Ubisoft in
                        accordance with the <span>privacy policy</span>
                    </label>
                </div>
                <button type="submit" disabled={!email || !agree}>
                    Subscribe Now
                </button>
            </form>
        </section>
    );
};

export default Subscribe;
