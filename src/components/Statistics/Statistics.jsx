import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data01 = [
  {
    id: "A1",
    name: "Assignment 1",
    title: "New Year New Mission",
    marks: 60,
    average: 60,
  },
  {
    id: "A2",
    name: "Assignment 2",
    title: "Responsive Website",
    marks: 59,
    average: 59.5,
  },
  {
    id: "A3",
    name: "Assignment 3",
    title: "Responsive Landing Page",
    marks: 60,
    average: 59.67,
  },
  {
    id: "A4",
    name: "Assignment 4",
    title: "Basic JavaScript Problem Solving",
    marks: 60,
    average: 59.75,
  },
  {
    id: "A5",
    name: "Assignment 5",
    title: "Geometry Genius",
    marks: 60,
    average: 59.8,
  },
  {
    id: "A6",
    name: "Assignment 6",
    title: "ES6 and API",
    marks: 60,
    average: 59.83,
  },
  {
    id: "A7",
    name: "Assignment 7",
    title: "Devtool and Debug",
    marks: 60,
    average: 59.86,
  },
  {
    id: "A8",
    name: "Assignment 8",
    title: "React SPA",
    marks: 60,
    average: 59.88,
  },
];

const Statistics = () => {
  return (
    <div className="mb-10">
      <div className="bg-[#F9F9FF] pt-12 pb-16 text-center">
        <h1 className="font-extrabold text-3xl">Assignment Marks</h1>
      </div>
      <div className="mt-16 lg:mt-24 w-[95%] mx-auto gap-6 flex items-center justify-center">
        <div>
          <h3 className="text-xl text-center lg:text-start">
            The following chart elaborates assignment marks:
          </h3>
          <div className="mt-10">
            <ResponsiveContainer width={"99%"} height={400}>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="marks"
                  isAnimationActive={true}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#9675FF"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
