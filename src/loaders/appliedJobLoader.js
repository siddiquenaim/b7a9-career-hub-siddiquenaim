import { getAppliedJobs } from "../utilities/fakedb";

const appliedJobLoader = async () => {
  const loadedJobs = await fetch("/featured.json");
  const jobs = await loadedJobs.json();
  const savedJobs = [];

  const storedJobs = getAppliedJobs();
  for (const id in storedJobs) {
    const appliedJob = jobs.find((job) => job.id === id);
    if (appliedJob) {
      savedJobs.push(appliedJob);
    }
  }

  return savedJobs;
};

export default appliedJobLoader;
