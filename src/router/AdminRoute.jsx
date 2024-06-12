import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../pages/dashboard/admin/useAdmin";


const AdminRoute = ({ children }) => {
    const {loading,user}= useAuth()
    const [isAdmin,isLoadingAdmin] = useAdmin()
    const location = useLocation()

    if (loading || isLoadingAdmin) {
        return <span className="loading loading-bars loading-xs"></span>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;