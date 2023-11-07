import { useParams } from "react-router-dom";

const ManageSingleFood = () => {
  const { id } = useParams();
  console.log(id);
  return <div>manage food</div>;
};

export default ManageSingleFood;
