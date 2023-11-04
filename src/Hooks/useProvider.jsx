import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useProvider = () => {
  const allData = useContext(AuthContext);
  return allData;
};

export default useProvider;
