import React from "react";
import "./Dashboard.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Users", users: 1400000000 },
    { name: "Role", users: 1500000000 },
    { name: "Log", users: 1000000000 },
    // { name: "Telegram", users: 500000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Admin Dashboard</h1>
      <div className="Dashboard">
        <PieChart width={500} height={500}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
