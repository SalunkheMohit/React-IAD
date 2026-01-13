import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ Children }) => {
    const { users } = useContext(AuthContext);

    if (!users) {
        return <Navigate to ="/login" />;
    }
    return Children;
};

export default ProtectedRoute;