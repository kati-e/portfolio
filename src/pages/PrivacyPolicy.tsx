import InlineLink from "../components/child-components/InlineLink";

export default function PrivacyPolicy() {
  return (
    <section className="priv-pol wrapper">
      <div className="container">
        <h1 className="hero-text">Privacy Policy</h1>
        <span>Last Updated: 21/05/2024</span>
        <div className="content">
          <p>
            This site uses Google Analytics & Google Tag Manager to track user
            data and activity on this website. For more information on how this
            third-party handles user data, please visit the official sites:
          </p>
          <br />
          <p>
            - Google Analytics
            <InlineLink
              href="https://www.google.com/analytics/terms/?hl=en-GB"
              text="terms of service"
            />
            and
            <InlineLink
              href="https://policies.google.com/privacy?hl=en-GB"
              text="privacy policy"
            />
          </p>
          <p>
            - Google Tag Manager
            <InlineLink
              href="https://support.google.com/tagmanager/answer/7157428?hl=en-GB"
              text="terms of service"
            />
            and
            <InlineLink
              href="https://policies.google.com/privacy?hl=en-GB"
              text="privacy policy"
            />
          </p>
          <br />
          <p>
            For any further questions please contact me through either LinkedIn
            messages or via email.
          </p>
        </div>
        <a href="/" className="button">
          Return To Home
        </a>
      </div>
    </section>
  );
}
