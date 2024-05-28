function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container wrapper">
                <div className="footer-links">
                    <p>SITE MAP</p>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resources & Medical Education</a></li>
                        <li><a href="#">Research & Advocacy</a></li>
                        <li><a href="#">Outreach & Events</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <p>SOCIAL</p>
                    <ul>

                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="mailto:info.ubc.fpc@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Families as Partners in Care Society &copy; 2024</p>
            </div>
        </footer>
    )
}

export default Footer;