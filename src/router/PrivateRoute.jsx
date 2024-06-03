import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-xs"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/sign-in'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;