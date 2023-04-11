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
    name: "Assignment 1",
    marks: 60,
    position: 400,
    average: 60,
  },
  {
    name: "Assignment 2",
    marks: 59,
    position: 793,
    average: 59.5,
  },
  {
    name: "Assignment 3",
    marks: 60,
    position: 588,
    average: 59.67,
  },
  {
    name: "Assignment 4",
    marks: 60,
    position: 512,
    average: 59.75,
  },
  {
    name: "Assignment 5",
    marks: 60,
    position: 483,
    average: 59.8,
  },
  {
    name: "Assignment 6",
    marks: 60,
    position: 246,
    average: 59.83,
  },
  {
    name: "Assignment 7",
    marks: 60,
    position: 176,
    average: 59.86,
  },
  {
    name: "Assignment 8",
    marks: 60,
    position: 136,
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
