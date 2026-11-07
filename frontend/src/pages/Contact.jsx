function Contact() {

    return (
        <>
            <h3>Connect me through these!</h3>

            <div className="contact-container">

                <div className="contact-card">
                    <span className="contact-icon">☎</span>
                    <div>
                        <h4>Phone</h4>
                        <p>+91 9495089363</p>
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-icon">✉</span>
                    <div>
                        <h4>Email</h4>
                        <p>
                            <a href="mailto:sahadps1777@gmail.com">
                                sahadps1777@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-icon">in</span>
                    <div>
                        <h4>LinkedIn</h4>
                        <p>
                            <a href="https://www.linkedin.com/in/sahad-ps"
                               target="_blank"
                               rel="noopener noreferrer">
                                sahad-ps
                            </a>
                        </p>
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-icon">●</span>
                    <div>
                        <h4>GitHub</h4>
                        <p>
                            <a href="https://github.com/Sahad-77"
                               target="_blank"
                               rel="noopener noreferrer">
                                sahad77
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;