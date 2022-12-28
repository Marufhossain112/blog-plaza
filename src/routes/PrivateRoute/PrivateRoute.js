import React, { useContext } from "react";
import { Puff } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex mt-[25vh] justify-center">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>

      //   <div class="flex justify-center items-center space-x-2">
      //     <div
      //       class="
      //       spinner-border
      //       animate-spin
      //       inline-block
      //       w-8
      //       h-8
      //       border-4
      //       rounded-full
      //       text-green-500
      //     "
      //       role="status"
      //     >
      //       <span class="visually-hidden"></span>
      //     </div>
      //   </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
