import { Navigate } from "react-router-dom";
import useProvider from "../Hooks/useProvider";
import PropTypes from "prop-types";
import LottieAnimation from "../Component/LottieAnimation/LottieAnimation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useProvider();

  if (loading) {
    return <LottieAnimation></LottieAnimation>;
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
