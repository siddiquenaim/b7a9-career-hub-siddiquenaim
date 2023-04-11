// use local storage to manage data

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get the applied jobs from local storage
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

/*
getAppliedJobs: This function retrieves the applied jobs object from local storage. If the object is not found in local storage, an empty object is returned.
*/

export { getAppliedJobs };
