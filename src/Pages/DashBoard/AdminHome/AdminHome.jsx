import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { FaFirstOrder } from "react-icons/fa";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
//-------Bar--chart----color-------
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
//-------Pi--chart----color-------
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //--------Cards-------Query--------
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  //--------Charts-------Query--------
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  //-----custom-----shape-----for-----the-----ber-----chart-------
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //-----custom-----shape-----for-----the-----pie-----chart-------
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle subHeading={"I am?"} heading={"Admin"}></SectionTitle>
      </div>
      {/*-----------------*/}
      {/*-----------Item-----&--------Price-------*/}
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          <span>Hi, WellCome</span>{" "}
          {user?.displayName ? user.displayName : "Back!"}
        </h3>
      </div>

      {/*------------stat-----Card--------*/}
      <div className="flex flex-col lg:flex-row gap-5">
        {/*------------stat------1-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center  justify-center gap-4">
            <FaDollarSign className="text-4xl" />
            <div>
              <div className="stat-value">{stats?.revenue}</div>
              <div className="text-2xl">Revenue</div>
            </div>
          </div>
        </div>
        {/*------------stat------2-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center  justify-center gap-4">
            <FaUsers className="text-4xl" />
            <div>
              <div className="stat-value">{stats?.users}</div>
              <div className="text-2xl">Users</div>
            </div>
          </div>
        </div>
        {/*------------stat------3-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center justify-center gap-4">
            <GiAmpleDress className="text-4xl" />
            <div>
              <div className="stat-value">{stats?.menuItems}</div>
              <div className="text-2xl">Users</div>
            </div>
          </div>
        </div>
        {/*------------stat------4-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center justify-center gap-4">
            <FaFirstOrder className="text-4xl" />
            <div>
              <div className="stat-value">{stats?.orders}</div>
              <div className="text-2xl">Orders</div>
            </div>
          </div>
        </div>
      </div>

      {/*------------Bar & Pichart-----Chart--------*/}
      <div className="flex gap-6 flex-col lg:flex-row py-10 ">
        {/*------------Bar-------Chart--------*/}
        <div className="w-full border-2 border-red-600">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/*------------Pie-------Chart--------*/}
        <div className="w-full border-2 border-red-600">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
