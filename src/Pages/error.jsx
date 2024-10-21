import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    console.error(error);
    return (
        <div className="error-page">
            <h1>Oops!</h1>
                {error.status} - {error.statusText || error.message}
                <p>Ups, seems like we've encountered an error.</p>
                <a href="/" className="btn-primary">Go Home</a>
        </div>
    );
}

export default ErrorPage