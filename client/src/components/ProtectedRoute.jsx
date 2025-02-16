import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    // console.log(isLoggedIn)

    if (!isLoggedIn) {
        // If the user is not logged in, redirect them to the login page
        return <Navigate to="/login" replace />;
    }

    // If logged in, render the children components (i.e., the protected page)
    return children;
};

export default ProtectedRoute;
