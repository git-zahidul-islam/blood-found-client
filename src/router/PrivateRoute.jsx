import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RotatingSquare } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <RotatingSquare
          visible={true}
          height="150"
          width="300"
          color="#FF0000"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/sign-in"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
