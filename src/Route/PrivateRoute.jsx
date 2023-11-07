import { Navigate } from "react-router-dom";
import useProvider from "../Hooks/useProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useProvider();

  if (loading) {
    return <p>loading...</p>;
  }

  if (user) {
    return children;
  }
  console.log(user);
  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
