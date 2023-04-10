import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Default from "./components/Default/Default";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import appliedJobLoader from "./loaders/cartProductLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Default></Default>,
        loader: () => fetch("/featured.json"),
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/featured.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobLoader,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
