import { useRouteError } from "react-router-dom";
import { LinkedIn } from "./data/consts";

export default function NotFoundPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <section className="error-display wrapper">
            <div className="container">
                <h1 className="hero-text">Uh Oh...</h1>
                <span className="heading-text error-bubble">{error.status} {error.statusText || error.message}</span>
                <p>You seem to have encountered a wild error!
                    <br />
                    Please try again another day, or contact me directly via <a className="inline-link" href={LinkedIn ?? ""} target="_blank">LinkedIn</a> if urgent.</p>
                <a href="/" className="button">Return To Home</a>
            </div>
        </section>
    );
}
