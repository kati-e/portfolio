
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
          <p>To each and everyone of you who visit and admire my portfolio work, I appreciate you taking the time to check it out ♡</p>
        </div>
      </div>
      <div className="wrapper copyright">
        <div className="container">
          <span>© 2024 Katelyn Cleary</span>
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
