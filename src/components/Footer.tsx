
/**
 * Site Footer Component
 *
 * This component renders the footer used site-wide.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <div className="inner-footer container">
          <h3 className="heading-text">Thank you.</h3>
          <p>All featured portfolio works remain the intellectual property of the company I was working for at the time or the company/client I was completing freelance work for. To everyone who came to check out my work, I appreciate you taking the time to visit ♡</p>
        </div>
      </div>
      <div className="wrapper copyright">
        <div className="container">
          <span>© {new Date().getFullYear() ?? ""} Katelyn Cleary</span>
          <nav className="navbar">
            <ul className="navlinks">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
