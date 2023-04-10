import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import { useLoaderData } from "react-router-dom";

const Default = () => {
  const featuredJobs = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <Featured featuredJobs={featuredJobs}></Featured>
    </>
  );
};

export default Default;
