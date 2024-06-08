import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { LikeOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "antd";
import { FaUser } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const {data: stats = {}} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('admin-stats')
      return res.data;
    }
  })

  console.log(stats);

  return (
    <div className="my-8 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">
          Welcome{" "}
          <span className="text-red-400">
            {user?.displayName ? user?.displayName : "User"}
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="flex md:gap-5 border-2 rounded-md p-3 min-h-24">
          <div className="px-4 bg-green-200 flex items-center">
            <FaUser size={32}></FaUser>
          </div>
          <div>
            <h2 className="text-lg font-medium">Total User</h2>
            <Statistic value={stats.user} />
          </div>
        </div>
        <div className="flex md:gap-5 border-2 rounded-md p-3 min-h-24">
          <div className="px-4 bg-green-200 flex items-center">
            <MdBloodtype className="text-red-400" size={35}></MdBloodtype>
          </div>
          <div>
            <h2 className="text-lg font-medium">Total Donation Request</h2>
            <Statistic value={stats.totalDonationRequest} />
          </div>
        </div>
        <div className="flex md:gap-5 border-2 rounded-md p-3 min-h-24">
          <div className="px-4 bg-green-200 flex items-center">
            <FaDollarSign size={32}></FaDollarSign>
          </div>
          <div>
            <h2 className="text-lg font-medium">Total User(porai)</h2>
            <Statistic value={1128} />
          </div>
        </div>

        {/* <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default AdminHome;
