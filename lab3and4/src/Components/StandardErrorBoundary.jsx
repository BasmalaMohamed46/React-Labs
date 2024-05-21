import React, { useState } from 'react';
import ErrorPage from './ErrorPage.jsx';

function StandardErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(undefined);

    const handleOnError = (error, errorInfo) => {
        console.log("we caught an error", error, errorInfo);
        setHasError(true);
        setError(error);
    };

    if (hasError) {
        return <ErrorPage />;
    }

    return (
        <div onError={handleOnError}>
            {props.children}
        </div>
    );
}

export default StandardErrorBoundary;
