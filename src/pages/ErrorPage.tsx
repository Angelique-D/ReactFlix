import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error: unknown  = useRouteError();
    let errorMessage: string;

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "An unknown error occurred";
    }
    return (
        <div>
            <h1>Oops !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
};

export default ErrorPage;