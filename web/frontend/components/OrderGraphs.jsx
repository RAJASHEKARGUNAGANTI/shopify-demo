import React, { useState } from "react";
import { Layout, LegacyCard } from "@shopify/polaris";
import { storeData } from "../data.js";
// import { Chart as ChartJS } from "chart.js";
// import { Line, Doughnut } from "react-chartjs-2";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export const OrderGraphs = () => {
  const data = [
    { name: "Page A", uv: 400 },
    { name: "Page b", uv: 300 },
    { name: "Page c", uv: 1300 },
  ];
  const needData = storeData.map((d) => ({ name: d.year, uv: d.order }));
  const [data1, setData] = useState(needData);
  // console.log(data1)
  // let [graphData, setgraphData] = useState({
  //   labels: storeData.map((d) => d.year),
  //   dataset: [
  //     {
  //       label: "Order Details",
  //       data: storeData.map((d) => d.order),
  //     },
  //   ],
  // });
  return (
    <>
      <Layout>
        <Layout.Section oneHalf>
          <LegacyCard title="Total Orders" sectioned>
            <LineChart
              width={600}
              height={200}
              data={data1}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </LegacyCard>
        </Layout.Section>
        </Layout>
        </>
      );
};

      // <Layout.Section oneThird>
      //   <LegacyCard title="Completed Orders" sectioned>
      //     <ResponsiveContainer width="100%" height="100%">
      //       <BarChart width={400} height={200} data={data1}>
      //         <Bar dataKey="uv" fill="#8884d8" />
      //       </BarChart>
      //     </ResponsiveContainer>
      //   </LegacyCard>
      // </Layout.Section>
      // <Layout.Section oneThird>
      //   <LegacyCard title="Remaining Orders" sectioned>
          
      //   </LegacyCard>
      // </Layout.Section>