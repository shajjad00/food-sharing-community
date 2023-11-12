import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetData = ({ children }) => {
  return (
    <Helmet>
      <title className=" text-gray-500 italic">{children}</title>
      <meta
        name="description"
        content="Community Food"
      />
      <meta
        name="theme-color"
        content="#008f68"
      />
    </Helmet>
  );
};

HelmetData.propTypes = {
  children: PropTypes.node,
};

export default HelmetData;
