import { Spin } from "antd";

const loading = () => {
  return (
    <div className="m-6 mt-10 flex justify-center">
      <Spin size="large" />
    </div>
  );
};

export default loading;
